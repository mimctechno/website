"use client";
import { useEffect, useState, useRef } from "react";

export default function CyberCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // Disable completely on mobile / touch devices
    if (
      typeof window === "undefined" ||
      window.matchMedia("(pointer: coarse)").matches ||
      window.innerWidth < 768
    ) {
      return;
    }

    const updatePosition = (e: MouseEvent) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);

      rafRef.current = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
        if (!isVisible) setIsVisible(true);

        const target = e.target as HTMLElement | null;
        if (
          target &&
          target.closest?.(
            "a, button, [role='button'], input, select, textarea",
          )
        ) {
          setIsHovering(true);
        } else {
          setIsHovering(false);
        }
      });
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", updatePosition, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
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
