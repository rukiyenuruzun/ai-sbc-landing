"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number; // saniye — grid'lerde index * 0.1 ile stagger verin
  y?: number; // giriş kayma mesafesi (px)
  className?: string;
};

// Görünüme girerken blur'dan netleşerek yukarı süzülme — sert "şerit" hissi yerine akışkan giriş.
export default function Reveal({ children, delay = 0, y = 32, className }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.25, margin: "0px 0px -60px 0px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
