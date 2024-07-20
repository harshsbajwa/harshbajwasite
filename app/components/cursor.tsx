"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const variants = {
  hover: { 
    top: -100,
    left: -100,
    width: 200,
    height: 200
  },
  inactive: { 
    top: -8,
    left: -8,    
    width: 16,
    height: 16
  },
}

export default function Cursor({ isActive }) {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 200, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        animate={isActive ? "hover" : "inactive"}
        transition={{ type: "tween", ease: "backOut", duration:0.75}}
        variants={variants}
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          backgroundColor: "#FFFFFF",
          zIndex: 999,
          position: 'fixed',
          borderRadius: '50%',
          mixBlendMode: 'difference',
          pointerEvents: 'none',
        }}
      />
      {!isActive && (
      <motion.div
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          backgroundColor: "#FFFFFF",
          width: 32,
          height: 32,
          zIndex: 1,
          background: 'radial-gradient(white, #3984ff00 125%)',
          opacity: '33%',
          boxShadow: '0 0 8px rgba(255, 255, 255, 0.9)',
          position: 'fixed',
          top: -16,
          left: -16,
          borderRadius: '50%',
          mixBlendMode: 'difference',
          pointerEvents: 'none'
        }}
      />
      )}
    </>
  );
}
