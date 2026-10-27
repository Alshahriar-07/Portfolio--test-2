/**
 * Static, zero-dependency line drawing of the hero sculpture.
 * Shown on small screens and whenever WebGL is unavailable, and used
 * as the poster frame while the real scene loads.
 */
export function SculpturePoster({ className = "" }: { className?: string }) {
  const hex = (radius: number, rotation = 0) =>
    Array.from({ length: 6 }, (_, index) => {
      const angle = (Math.PI / 3) * index - Math.PI / 2 + rotation;
      return `${(400 + Math.cos(angle) * radius).toFixed(1)},${(400 + Math.sin(angle) * radius).toFixed(1)}`;
    }).join(" ");

  const ticks = Array.from({ length: 36 }, (_, index) => {
    const angle = (index / 36) * Math.PI * 2;
    const inner = index % 3 === 0 ? 306 : 314;
    return {
      x1: 400 + Math.cos(angle) * inner,
      y1: 400 + Math.sin(angle) * inner,
      x2: 400 + Math.cos(angle) * 326,
      y2: 400 + Math.sin(angle) * 326,
    };
  });

  const vertices = hex(255)
    .split(" ")
    .map((point) => point.split(",").map(Number) as [number, number]);

  return (
    <svg
      viewBox="0 0 800 800"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="poster-face" x1="300" y1="290" x2="520" y2="530" gradientUnits="userSpaceOnUse">
          <stop stopColor="#EDEDE9" stopOpacity="0.9" />
          <stop offset="0.48" stopColor="#8F8F8B" stopOpacity="0.5" />
          <stop offset="1" stopColor="#111111" stopOpacity="0.85" />
        </linearGradient>
        <radialGradient id="poster-glow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(400 400) rotate(90) scale(330)">
          <stop stopColor="#F2F2F0" stopOpacity="0.045" />
          <stop offset="1" stopColor="#F2F2F0" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="400" cy="400" r="330" fill="url(#poster-glow)" />

      {/* measurement rings */}
      <circle cx="400" cy="400" r="330" stroke="#242424" strokeWidth="1" />
      <circle cx="400" cy="400" r="302" stroke="#2E2E2E" strokeWidth="1" strokeDasharray="1 11" />
      {ticks.map((tick, index) => (
        <line
          key={index}
          x1={tick.x1}
          y1={tick.y1}
          x2={tick.x2}
          y2={tick.y2}
          stroke={index % 3 === 0 ? "#545454" : "#2C2C2C"}
          strokeWidth="1"
        />
      ))}

      {/* interlocking frames */}
      <polygon points={hex(255)} stroke="#5A5A5A" strokeWidth="1.6" />
      <polygon points={hex(255, Math.PI / 6)} stroke="#3A3A3A" strokeWidth="1" strokeDasharray="3 8" />
      <polygon points={hex(196)} stroke="#777773" strokeWidth="1.1" opacity="0.5" />
      <polygon points={hex(196, Math.PI / 6)} stroke="#3F3F3F" strokeWidth="1" opacity="0.7" />

      {/* structural spokes */}
      {vertices.map(([x, y], index) => (
        <line key={index} x1="400" y1="400" x2={x} y2={y} stroke="#333333" strokeWidth="1" opacity="0.55" />
      ))}

      {/* faceted core */}
      <polygon points={hex(118)} fill="url(#poster-face)" stroke="#D8D8D3" strokeWidth="1.2" strokeOpacity="0.7" />
      <polygon points={hex(58, Math.PI / 6)} stroke="#EAEAE6" strokeWidth="1" strokeOpacity="0.45" />
      {hex(118)
        .split(" ")
        .map((point, index) => {
          const [x, y] = point.split(",").map(Number);
          return <line key={index} x1="400" y1="400" x2={x} y2={y} stroke="#E4E4DF" strokeWidth="0.8" strokeOpacity="0.35" />;
        })}

      {/* orbiting bodies */}
      <circle cx="400" cy="72" r="3" fill="#D9D9D4" fillOpacity="0.8" />
      <circle cx="728" cy="400" r="2" fill="#9C9C98" fillOpacity="0.7" />
      <circle cx="400" cy="728" r="2" fill="#7C7C78" fillOpacity="0.6" />
      <circle cx="72" cy="400" r="1.6" fill="#6B6B67" fillOpacity="0.6" />
    </svg>
  );
}
