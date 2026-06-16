import React, { useId } from "react";
import { cn } from "../../lib/utils";

type BackgroundPathsProps = {
  className?: string;
  children?: React.ReactNode;
  svgOptions?: {
    duration?: number;
  };
};

type NodePoint = {
  x: number;
  y: number;
  color: string;
};

const PATHS = [
  "M80 90 H300 V200 H520",
  "M200 260 H520 V360 H800",
  "M600 80 V180 H820",
  "M740 120 H980 V240 H1130",
  "M120 340 H300 V480 H430",
  "M420 400 V520 H630",
  "M870 320 H1040 V420 H1140",
  "M60 520 H220",
  "M1000 500 V580 H1120",
];

const NODE_COLORS = ["#34d399", "#60a5fa", "#f59e0b"];

const NODES: NodePoint[] = [
  { x: 80, y: 90, color: NODE_COLORS[0] },
  { x: 300, y: 90, color: NODE_COLORS[1] },
  { x: 300, y: 200, color: NODE_COLORS[1] },
  { x: 520, y: 200, color: NODE_COLORS[2] },
  { x: 200, y: 260, color: NODE_COLORS[0] },
  { x: 520, y: 260, color: NODE_COLORS[1] },
  { x: 520, y: 360, color: NODE_COLORS[2] },
  { x: 800, y: 360, color: NODE_COLORS[1] },
  { x: 600, y: 80, color: NODE_COLORS[2] },
  { x: 600, y: 180, color: NODE_COLORS[1] },
  { x: 820, y: 180, color: NODE_COLORS[0] },
  { x: 740, y: 120, color: NODE_COLORS[0] },
  { x: 980, y: 120, color: NODE_COLORS[1] },
  { x: 980, y: 240, color: NODE_COLORS[2] },
  { x: 1130, y: 240, color: NODE_COLORS[1] },
  { x: 120, y: 340, color: NODE_COLORS[0] },
  { x: 300, y: 340, color: NODE_COLORS[1] },
  { x: 300, y: 480, color: NODE_COLORS[2] },
  { x: 430, y: 480, color: NODE_COLORS[1] },
  { x: 420, y: 400, color: NODE_COLORS[2] },
  { x: 420, y: 520, color: NODE_COLORS[0] },
  { x: 630, y: 520, color: NODE_COLORS[1] },
  { x: 870, y: 320, color: NODE_COLORS[0] },
  { x: 1040, y: 320, color: NODE_COLORS[1] },
  { x: 1040, y: 420, color: NODE_COLORS[2] },
  { x: 1140, y: 420, color: NODE_COLORS[1] },
  { x: 60, y: 520, color: NODE_COLORS[2] },
  { x: 220, y: 520, color: NODE_COLORS[0] },
  { x: 1000, y: 500, color: NODE_COLORS[2] },
  { x: 1000, y: 580, color: NODE_COLORS[1] },
  { x: 1120, y: 580, color: NODE_COLORS[0] },
];

export const BackgroundPaths: React.FC<BackgroundPathsProps> = ({
  className,
  children,
  svgOptions,
}) => {
  const gradientId = useId();
  const glowId = useId();
  const duration = svgOptions?.duration ?? 8;

  return (
    <div className={cn("relative overflow-hidden bg-white", className)}>
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(16, 185, 129, 0.6)" />
            <stop offset="50%" stopColor="rgba(59, 130, 246, 0.75)" />
            <stop offset="100%" stopColor="rgba(107, 102, 95, 0.7)" />
          </linearGradient>
          <filter id={glowId} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {PATHS.map((d, index) => (
          <path
            key={`${d}-${index}`}
            d={d}
            className="scrollx-bg-path"
            style={{
              animationDuration: `${duration + index * 0.6}s`,
              animationDelay: `${index * 0.35}s`,
            }}
            stroke={`url(#${gradientId})`}
            strokeWidth={4}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        ))}

        {NODES.map((node, index) => (
          <g key={`${node.x}-${node.y}-${index}`} filter={`url(#${glowId})`}>
            <circle
              cx={node.x}
              cy={node.y}
              r={12}
              fill="white"
              stroke={node.color}
              strokeOpacity={0.6}
              strokeWidth={2}
            />
            <circle cx={node.x} cy={node.y} r={4} fill={node.color} />
          </g>
        ))}
      </svg>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(59,130,246,0.08),transparent_55%)]" />
      <div className="relative z-10 h-full w-full">{children}</div>
    </div>
  );
};
