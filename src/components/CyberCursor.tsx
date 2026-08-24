"use client";
import { useEffect, useState } from "react";

let globalMouseX = -100;
let globalMouseY = -100;

export default function CyberCursor() {
  const [position, setPosition] = useState({
    x: globalMouseX,
    y: globalMouseY,
  });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      globalMouseX = e.clientX;
      globalMouseY = e.clientY;
      setPosition({ x: globalMouseX, y: globalMouseY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      if (
        window.getComputedStyle(target).cursor === "pointer" ||
        target.tagName.toLowerCase() === "button" ||
        target.tagName.toLowerCase() === "a" ||
        target.closest("button") ||
        target.closest("a")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", updatePosition);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Smooth outer interactive ring */}
      <div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-teal-600/30 bg-teal-500/5 pointer-events-none z-[9999] transition-transform duration-200 ease-out hidden md:block"
        style={{
          transform: `translate(${position.x - 16}px, ${position.y - 16}px) scale(${isHovering ? 1.6 : 1})`,
        }}
      />
      {/* Precise inner point */}
      <div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-teal-600 pointer-events-none z-[10000] hidden md:block transition-transform duration-75 ease-out"
        style={{
          transform: `translate(${position.x - 3}px, ${position.y - 3}px) scale(${isHovering ? 0.5 : 1})`,
        }}
      />
    </>
  );
}
