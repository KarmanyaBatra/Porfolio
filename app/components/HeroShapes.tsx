"use client";

import { useEffect, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from "framer-motion";

function Shape({
  mx,
  my,
  depth,
  float = 10,
  delay = 0,
  className,
  children,
}: {
  mx: MotionValue<number>;
  my: MotionValue<number>;
  depth: number;
  float?: number;
  delay?: number;
  className: string;
  children: ReactNode;
}) {
  const x = useTransform(mx, (v) => v * depth);
  const y = useTransform(my, (v) => v * depth);

  return (
    <motion.div
      className={`absolute ${className}`}
      style={{ x, y }}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        animate={{ y: [0, -float, 0] }}
        transition={{ duration: 5 + delay * 4, repeat: Infinity, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export default function HeroShapes() {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const mx = useSpring(rawX, { stiffness: 60, damping: 18 });
  const my = useSpring(rawY, { stiffness: 60, damping: 18 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      rawX.set(e.clientX / window.innerWidth - 0.5);
      rawY.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [rawX, rawY]);

  return (
    <div aria-hidden className="relative h-[26rem] w-full">
      <Shape mx={mx} my={my} depth={-30} delay={0.2} className="right-4 top-0">
        <div className="h-52 w-52 rounded-full bg-saffron" />
      </Shape>

      <Shape mx={mx} my={my} depth={40} delay={0.35} float={14} className="left-6 top-40">
        <div className="h-40 w-40 rounded-tl-full bg-teal" />
      </Shape>

      <Shape mx={mx} my={my} depth={-55} delay={0.5} className="right-28 bottom-6">
        <motion.div
          className="h-28 w-28 bg-rust"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
      </Shape>

      <Shape mx={mx} my={my} depth={25} delay={0.65} float={8} className="left-32 top-4">
        <div className="h-20 w-40 rounded-t-full bg-plum" />
      </Shape>

      <Shape mx={mx} my={my} depth={-70} delay={0.8} float={18} className="right-0 top-56">
        <div className="h-14 w-14 rounded-full bg-blush" />
      </Shape>

      <Shape mx={mx} my={my} depth={15} delay={0.9} float={6} className="left-0 bottom-0">
        <div className="h-24 w-24 bg-[radial-gradient(var(--color-ink)_1.5px,transparent_1.5px)] bg-[size:12px_12px] opacity-60" />
      </Shape>

      <Shape mx={mx} my={my} depth={-20} delay={1} float={12} className="left-48 top-48">
        <div className="h-32 w-32 rounded-full border-2 border-ink/80" />
      </Shape>
    </div>
  );
}
