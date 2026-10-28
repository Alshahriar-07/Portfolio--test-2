"use client";

import { useEffect, useRef } from "react";
import type * as ThreeNamespace from "three";

type Point = [number, number, number];
type Triangle = [number, number, number];

const materials = ["#171717", "#292929", "#414141", "#626262", "#858585", "#aaaaaa"];
const basePoints: Point[] = [
  [-1, 1.618, 0], [1, 1.618, 0], [-1, -1.618, 0], [1, -1.618, 0],
  [0, -1, 1.618], [0, 1, 1.618], [0, -1, -1.618], [0, 1, -1.618],
  [1.618, 0, -1], [1.618, 0, 1], [-1.618, 0, -1], [-1.618, 0, 1],
];
const baseFaces: Triangle[] = [
  [0, 11, 5], [0, 5, 1], [0, 1, 7], [0, 7, 10], [0, 10, 11],
  [1, 5, 9], [5, 11, 4], [11, 10, 2], [10, 7, 6], [7, 1, 8],
  [3, 9, 4], [3, 4, 2], [3, 2, 6], [3, 6, 8], [3, 8, 9],
  [4, 9, 5], [2, 4, 11], [6, 2, 10], [8, 6, 7], [9, 8, 1],
];

function hash(value: number) {
  const result = Math.sin(value * 127.1 + 311.7) * 43758.5453123;
  return result - Math.floor(result);
}

function makeMesh() {
  const points = basePoints.map((point) => {
    const length = Math.hypot(...point);
    return point.map((coordinate) => coordinate / length) as Point;
  });
  let faces = baseFaces.map((face) => [...face] as Triangle);
  const midpointCache = new Map<string, number>();
  const midpoint = (a: number, b: number) => {
    const key = a < b ? `${a}:${b}` : `${b}:${a}`;
    const cached = midpointCache.get(key);
    if (cached !== undefined) return cached;
    const p = points[a].map((value, axis) => (value + points[b][axis]) / 2) as Point;
    const length = Math.hypot(...p);
    const index = points.push(p.map((value) => value / length) as Point) - 1;
    midpointCache.set(key, index);
    return index;
  };

  faces = faces.flatMap(([a, b, c]) => {
    const ab = midpoint(a, b);
    const bc = midpoint(b, c);
    const ca = midpoint(c, a);
    return [[a, ab, ca], [b, bc, ab], [c, ca, bc], [ab, bc, ca]] as Triangle[];
  });

  const deformed = points.map(([x, y, z], index) => {
    const radius = 0.96 + hash(index + 19) * 0.08;
    const nudge = (offset: number) => (hash(index * 3 + offset) - 0.5) * 0.022;
    return [x * radius + nudge(1), y * radius + nudge(2), z * radius + nudge(3)] as Point;
  });

  const tones = faces.map(([a, b, c], index) => {
    const pa = deformed[a];
    const pb = deformed[b];
    const pc = deformed[c];
    const u: Point = [pb[0] - pa[0], pb[1] - pa[1], pb[2] - pa[2]];
    const v: Point = [pc[0] - pa[0], pc[1] - pa[1], pc[2] - pa[2]];
    const normal: Point = [u[1] * v[2] - u[2] * v[1], u[2] * v[0] - u[0] * v[2], u[0] * v[1] - u[1] * v[0]];
    const magnitude = Math.hypot(...normal) || 1;
    const lit = Math.max(0, (normal[0] * -0.38 + normal[1] * 0.82 + normal[2] * 0.48) / magnitude);
    return Math.max(0, Math.min(materials.length - 1, Math.floor(0.5 + lit * 3.1 + (hash(index + 510) - 0.5) * 2.5)));
  });

  return { points: deformed, faces, tones };
}

const mesh = makeMesh();

function makeGrainTexture(THREE: typeof ThreeNamespace) {
  const size = 128;
  const pixels = new Uint8Array(size * size * 4);
  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      const index = (y * size + x) * 4;
      const broad = hash(Math.floor(x / 12) * 31 + Math.floor(y / 12) * 127) - 0.5;
      const mid = hash(Math.floor(x / 3) * 17 + Math.floor(y / 3) * 73) - 0.5;
      const fine = hash(y * size + x) - 0.5;
      const gray = Math.round(235 + broad * 24 + mid * 12 + fine * 8);
      pixels[index] = gray;
      pixels[index + 1] = gray;
      pixels[index + 2] = gray;
      pixels[index + 3] = 255;
    }
  }
  const texture = new THREE.DataTexture(pixels, size, size, THREE.RGBAFormat);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(2, 2);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;
  return texture;
}

function projectedFallback() {
  const angleY = -0.38;
  const angleX = -0.2;
  const projected = mesh.points.map(([x, y, z]) => {
    const rotatedX = x * Math.cos(angleY) + z * Math.sin(angleY);
    const rotatedZ = -x * Math.sin(angleY) + z * Math.cos(angleY);
    const rotatedY = y * Math.cos(angleX) - rotatedZ * Math.sin(angleX);
    const depth = y * Math.sin(angleX) + rotatedZ * Math.cos(angleX);
    const perspective = 2.8 / (3.9 - depth * 0.34);
    return [250 + rotatedX * perspective * 206, 250 - rotatedY * perspective * 206, depth] as const;
  });

  return [...mesh.faces.keys()]
    .sort((a, b) => {
      const depth = (index: number) => mesh.faces[index].reduce((sum, vertex) => sum + projected[vertex][2], 0) / 3;
      return depth(a) - depth(b);
    })
    .map((index) => {
      const face = mesh.faces[index];
      const points = face.map((vertex) => `${projected[vertex][0].toFixed(1)},${projected[vertex][1].toFixed(1)}`).join(" ");
      const fill = materials[mesh.tones[index]];
      return <polygon key={index} points={points} fill={fill} fillOpacity={mesh.tones[index] > 3 ? 0.7 : 0.94} stroke="#bababa" strokeOpacity="0.48" strokeWidth="0.72" />;
    });
}

export function HeroSculpture() {
  const hostRef = useRef<HTMLDivElement>(null);
  const fallbackRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    const hostElement: HTMLDivElement = host;

    let disposed = false;
    let cleanup = () => {};

    async function setup() {
      const THREE = await import("three");
      if (disposed) return;

      let renderer: ThreeNamespace.WebGLRenderer;
      try {
        renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "low-power" });
      } catch {
        return;
      }

      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
      renderer.setClearColor(0x000000, 0);
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.05;
      renderer.domElement.setAttribute("aria-hidden", "true");
      hostElement.appendChild(renderer.domElement);
      if (fallbackRef.current) fallbackRef.current.style.display = "none";

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(37, 1, 0.1, 100);
      camera.position.set(0, 0, 4.2);
      const sculpture = new THREE.Group();
      sculpture.rotation.set(-0.12, -0.3, 0.02);
      scene.add(sculpture);

      const vertices = new Float32Array(mesh.points.flat());
      const indices: number[] = [];
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
      geometry.setAttribute(
        "uv",
        new THREE.Float32BufferAttribute(
          mesh.points.flatMap(([x, y, z]) => [
            Math.atan2(z, x) / (Math.PI * 2) + 0.5,
            Math.asin(THREE.MathUtils.clamp(y, -1, 1)) / Math.PI + 0.5,
          ]),
          2,
        ),
      );
      mesh.faces.forEach((face, index) => {
        geometry.addGroup(index * 3, 3, mesh.tones[index]);
        indices.push(...face);
      });
      geometry.setIndex(indices);
      geometry.computeVertexNormals();

      const texture = makeGrainTexture(THREE);
      const palette = materials.map((color, index) => new THREE.MeshStandardMaterial({
        color,
        map: index > 1 && index < 5 ? texture : null,
        roughness: 0.7 + (index % 3) * 0.08,
        metalness: 0.18 + (index % 3) * 0.08,
        flatShading: true,
        side: THREE.DoubleSide,
      }));
      const panels = new THREE.Mesh(geometry, palette);
      sculpture.add(panels);

      const edgeGeometry = new THREE.EdgesGeometry(geometry, 1);
      const edges = new THREE.LineSegments(edgeGeometry, new THREE.LineBasicMaterial({ color: 0xb9b9b9, transparent: true, opacity: 0.54 }));
      edges.scale.set(1.001, 1.001, 1.001);
      sculpture.add(edges);

      scene.add(new THREE.AmbientLight(0xd1d1d1, 1.45));
      const key = new THREE.DirectionalLight(0xffffff, 2.7);
      key.position.set(-3.5, 4.2, 5);
      scene.add(key);
      const fill = new THREE.DirectionalLight(0x999999, 0.8);
      fill.position.set(4, -1.5, 3);
      scene.add(fill);
      const rim = new THREE.PointLight(0xdddddd, 8, 8);
      rim.position.set(0.5, 2.4, -2.2);
      scene.add(rim);

      let animation = 0;
      let previousFrame = 0;
      let elapsed = 0;
      const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
      const resize = () => {
        const width = hostElement.clientWidth;
        const height = hostElement.clientHeight;
        if (!width || !height) return;
        camera.aspect = width / height;
        camera.position.z = window.innerWidth <= 760 ? 4.4 : 4;
        sculpture.scale.setScalar(1);
        camera.updateProjectionMatrix();
        renderer.setSize(width, height, false);
        renderer.render(scene, camera);
      };
      const render = (time: number) => {
        animation = 0;
        if (motion.matches || document.hidden) {
          previousFrame = 0;
          renderer.render(scene, camera);
          return;
        }
        const delta = previousFrame === 0 ? 0 : Math.min((time - previousFrame) / 1000, 0.05);
        previousFrame = time;
        elapsed += delta;
        sculpture.rotation.y += delta * 0.035;
        sculpture.rotation.x = -0.12 + Math.sin(elapsed * 0.22) * 0.018;
        renderer.render(scene, camera);
        animation = window.requestAnimationFrame(render);
      };
      const updateMotion = () => {
        window.cancelAnimationFrame(animation);
        animation = 0;
        previousFrame = 0;
        if (motion.matches || document.hidden) renderer.render(scene, camera);
        else animation = window.requestAnimationFrame(render);
      };
      const updateVisibility = () => updateMotion();
      const observer = new ResizeObserver(resize);
      observer.observe(hostElement);
      resize();
      updateMotion();
      motion.addEventListener("change", updateMotion);
      document.addEventListener("visibilitychange", updateVisibility);

      cleanup = () => {
        motion.removeEventListener("change", updateMotion);
        document.removeEventListener("visibilitychange", updateVisibility);
        observer.disconnect();
        window.cancelAnimationFrame(animation);
        edgeGeometry.dispose();
        edges.material.dispose();
        geometry.dispose();
        palette.forEach((material) => material.dispose());
        texture.dispose();
        renderer.dispose();
        renderer.domElement.remove();
      };
    }

    setup().catch(() => {
      // Keep the static SVG fallback if the WebGL module cannot load.
    });

    return () => {
      disposed = true;
      cleanup();
    };
  }, []);

  return (
    <div ref={hostRef} className="hero-sculpture" aria-hidden="true">
      <svg ref={fallbackRef} className="hero-sculpture-fallback" viewBox="0 0 500 500" role="presentation">
        {projectedFallback()}
      </svg>
    </div>
  );
}
