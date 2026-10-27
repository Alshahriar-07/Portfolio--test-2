"use client";

import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

type HeroSculptureProps = {
  reducedMotion: boolean;
  onReady: () => void;
};

/**
 * Hexagonal frame built from a hexagon with a hexagon hole.
 * Three of these cross the core like an armillary structure.
 */
function useHexFrame(outer: number, inner: number, depth: number) {
  return useMemo(() => {
    const points = (radius: number) =>
      Array.from({ length: 6 }, (_, index) => {
        const angle = (Math.PI / 3) * index - Math.PI / 6;
        return [Math.cos(angle) * radius, Math.sin(angle) * radius] as const;
      });

    const shape = new THREE.Shape();
    points(outer).forEach(([x, y], index) => {
      if (index === 0) shape.moveTo(x, y);
      else shape.lineTo(x, y);
    });
    shape.closePath();

    const hole = new THREE.Path();
    points(inner)
      .reverse()
      .forEach(([x, y], index) => {
        if (index === 0) hole.moveTo(x, y);
        else hole.lineTo(x, y);
      });
    hole.closePath();
    shape.holes.push(hole);

    const geometry = new THREE.ExtrudeGeometry(shape, {
      depth,
      bevelEnabled: true,
      bevelThickness: 0.012,
      bevelSize: 0.012,
      bevelSegments: 1,
      curveSegments: 1,
    });
    geometry.center();
    return geometry;
  }, [outer, inner, depth]);
}

/**
 * Builds a neutral studio reflection map from three's procedural room, so the
 * metal reads correctly without downloading an HDR asset.
 */
function attachStudioEnvironment(gl: THREE.WebGLRenderer, scene: THREE.Scene) {
  const pmrem = new THREE.PMREMGenerator(gl);
  const room = new RoomEnvironment();
  const environment = pmrem.fromScene(room, 0.04).texture;

  scene.environment = environment;

  return () => {
    scene.environment = null;
    environment.dispose();
    pmrem.dispose();
    room.traverse((object) => {
      if (object instanceof THREE.Mesh) {
        object.geometry.dispose();
        if (Array.isArray(object.material)) {
          object.material.forEach((material) => material.dispose());
        } else {
          object.material.dispose();
        }
      }
    });
  };
}

function StudioEnvironment() {
  const gl = useThree((state) => state.gl);
  const scene = useThree((state) => state.scene);

  useEffect(() => attachStudioEnvironment(gl, scene), [gl, scene]);

  return null;
}

function FirstFrame({ onReady }: { onReady: () => void }) {
  const fired = useRef(false);

  useFrame(() => {
    if (fired.current) return;
    fired.current = true;
    onReady();
  });

  return null;
}

function Sculpture({ reducedMotion }: { reducedMotion: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const orbitRef = useRef<THREE.Group>(null);
  const frameRefs = useRef<Array<THREE.Mesh | null>>([]);
  const pointer = useRef({ x: 0, y: 0 });

  const materials = useMemo(
    () => ({
      metal: new THREE.MeshStandardMaterial({
        color: "#d8d8d2",
        metalness: 0.98,
        roughness: 0.24,
        envMapIntensity: 1.25,
        flatShading: true,
      }),
      graphite: new THREE.MeshStandardMaterial({
        color: "#3a3a3a",
        metalness: 0.9,
        roughness: 0.36,
        envMapIntensity: 1,
        flatShading: true,
      }),
      edge: new THREE.LineBasicMaterial({
        color: "#a8a8a2",
        transparent: true,
        opacity: 0.28,
      }),
      hairline: new THREE.MeshBasicMaterial({
        color: "#d9d9d4",
        transparent: true,
        opacity: 0.35,
      }),
    }),
    [],
  );

  const geometries = useMemo(() => {
    const core = new THREE.IcosahedronGeometry(1.32, 0);
    const cage = new THREE.IcosahedronGeometry(2.16, 1);
    return {
      core,
      coreEdges: new THREE.EdgesGeometry(core),
      cage: new THREE.EdgesGeometry(cage),
      shard: new THREE.TetrahedronGeometry(1, 0),
    };
  }, []);

  const frameA = useHexFrame(2.62, 2.44, 0.055);
  const frameB = useHexFrame(2.22, 2.05, 0.05);
  const frameC = useHexFrame(1.92, 1.77, 0.045);

  const shards = useMemo(
    () =>
      Array.from({ length: 8 }, (_, index) => {
        const angle = (index / 8) * Math.PI * 2;
        const radius = 2.92 + (index % 3) * 0.16;
        return {
          position: [Math.cos(angle) * radius, Math.sin(angle * 2.4) * 0.5, Math.sin(angle) * radius] as [
            number,
            number,
            number,
          ],
          rotation: [angle, angle * 1.7, angle * 0.6] as [number, number, number],
          scale: 0.055 + (index % 3) * 0.022,
        };
      }),
    [],
  );

  useEffect(() => {
    if (reducedMotion) return;

    const onPointerMove = (event: PointerEvent) => {
      pointer.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (event.clientY / window.innerHeight) * 2 - 1;
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", onPointerMove);
  }, [reducedMotion]);

  useFrame((state, delta) => {
    const group = groupRef.current;
    if (!group || reducedMotion) return;

    const time = state.clock.elapsedTime;

    group.rotation.y += delta * 0.07;
    group.rotation.x = THREE.MathUtils.damp(group.rotation.x, 0.16 + pointer.current.y * 0.1, 2.4, delta);
    group.rotation.z = Math.sin(time * 0.1) * 0.025;
    group.position.x = THREE.MathUtils.damp(group.position.x, pointer.current.x * 0.22, 2.4, delta);
    group.position.y = THREE.MathUtils.damp(group.position.y, -pointer.current.y * 0.12, 2.4, delta);

    frameRefs.current.forEach((frame, index) => {
      if (!frame) return;
      frame.rotation.z += delta * (index % 2 === 0 ? 0.018 : -0.024);
    });

    if (orbitRef.current) {
      orbitRef.current.rotation.y -= delta * 0.1;
      orbitRef.current.rotation.x = Math.sin(time * 0.14) * 0.12;
    }
  });

  return (
    <group ref={groupRef} rotation={[0.16, 0.3, 0]} scale={1.08}>
      <mesh geometry={geometries.core} material={materials.metal} />
      <lineSegments geometry={geometries.coreEdges} material={materials.edge} />

      <lineSegments geometry={geometries.cage} material={materials.edge} />

      <mesh
        ref={(node) => {
          frameRefs.current[0] = node;
        }}
        geometry={frameA}
        material={materials.metal}
        rotation={[Math.PI / 2.15, 0.12, 0]}
      />
      <mesh
        ref={(node) => {
          frameRefs.current[1] = node;
        }}
        geometry={frameB}
        material={materials.graphite}
        rotation={[0.42, Math.PI / 2.4, 0.34]}
      />
      <mesh
        ref={(node) => {
          frameRefs.current[2] = node;
        }}
        geometry={frameC}
        material={materials.metal}
        rotation={[1.32, -0.46, 0.92]}
      />

      <mesh rotation={[Math.PI / 2.6, 0.2, 0.4]}>
        <torusGeometry args={[2.98, 0.012, 3, 180]} />
        <primitive object={materials.hairline} attach="material" />
      </mesh>

      <group ref={orbitRef}>
        {shards.map((shard, index) => (
          <mesh
            key={index}
            geometry={geometries.shard}
            material={materials.graphite}
            position={shard.position}
            rotation={shard.rotation}
            scale={shard.scale}
          />
        ))}
      </group>
    </group>
  );
}

export default function HeroSculpture({ reducedMotion, onReady }: HeroSculptureProps) {
  return (
    <Canvas
      dpr={[1, 1.8]}
      camera={{ position: [0, 0, 9.4], fov: 42, near: 0.1, far: 40 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      onCreated={({ gl }) => {
        gl.toneMapping = THREE.ACESFilmicToneMapping;
        gl.toneMappingExposure = 1.05;
      }}
      style={{ pointerEvents: "none" }}
    >
      <StudioEnvironment />
      <FirstFrame onReady={onReady} />

      <ambientLight intensity={0.35} />
      <directionalLight position={[4, 6, 5]} intensity={2.6} />
      <directionalLight position={[-5, -3, 2]} intensity={1.15} color="#b8c1c8" />
      <pointLight position={[0, -3, 4]} intensity={26} distance={16} decay={2} color="#ffffff" />

      <Sculpture reducedMotion={reducedMotion} />
    </Canvas>
  );
}
