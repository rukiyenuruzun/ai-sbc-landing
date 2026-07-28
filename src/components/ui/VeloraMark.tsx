"use client";

import { motion, useReducedMotion } from "motion/react";

// Velora amblemi — vektör yeniden çizim (sağı açık dişli + turuncu ok).
// Yüklenirken dişli yerine oturur, ok soldan süzülür; hover'da (parent'a `group`
// verin) dişli 45° döner. Orijinal raster logo public/velora-mark.png'de duruyor.

const CX = 42;
const CY = 46;

// Dişler 12 yönünden başlar; sağ taraftaki boşluğa denk gelenler (45/90/135°) atlanır.
const TOOTH_ANGLES = [0, 180, 225, 270, 315];

export default function VeloraMark({
  size = 34,
  gearClass = "stroke-paper fill-paper",
  arrowClass = "fill-accent",
}: {
  size?: number;
  gearClass?: string;
  arrowClass?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      initial={reduce ? false : { rotate: -20, opacity: 0 }}
      animate={{ rotate: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden
      className="overflow-visible"
    >
      {/* Dişli */}
      <g
        className={`transition-transform duration-700 ease-out group-hover:rotate-45 ${gearClass}`}
        style={{ transformOrigin: `${CX}px ${CY}px`, transformBox: "view-box" }}
      >
        {/* halka — dasharray ile sağ tarafta ok boşluğu bırakılır */}
        <circle
          cx={CX}
          cy={CY}
          r={26}
          fill="none"
          strokeWidth={13}
          pathLength={360}
          strokeDasharray="250 110"
          strokeDashoffset={-65}
        />
        {/* dişler */}
        {TOOTH_ANGLES.map((a) => (
          <rect
            key={a}
            x={CX - 7}
            y={CY - 39}
            width={14}
            height={12}
            rx={3}
            stroke="none"
            transform={`rotate(${a} ${CX} ${CY})`}
          />
        ))}
      </g>

      {/* Turuncu ok — soldan süzülerek gelir */}
      <motion.g
        initial={reduce ? false : { x: -12, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className={arrowClass}
      >
        <path d="M 36 33 L 76 33 L 90 47 L 62 47 L 41 89 L 29 89 L 50 47 L 36 47 Z" />
      </motion.g>
    </motion.svg>
  );
}
