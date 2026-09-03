import React from "react";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark" | "teal";
}

export function LogoIcon({ className = "w-10 h-10" }: LogoProps) {
  return (
    <div
      className={`${className} rounded-xl overflow-hidden flex items-center justify-center`}
    >
      <img
        src="/logo.webp"
        alt="MIMC Technologies"
        width={40}
        height={40}
        loading="eager"
        decoding="async"
        className="w-full h-full object-contain"
      />
    </div>
  );
}

export default function Logo({
  variant = "light",
  showText = true,
  size = "md",
  className = "",
}: {
  variant?: "light" | "dark";
  showText?: boolean;
  size?: "md" | "lg";
  className?: string;
}) {
  const isDarkBg = variant === "dark";
  const isLarge = size === "lg";

  return (
    <div className={`flex items-center gap-3.5 ${className}`}>
      {/* Logo Icon Mark (Enlarged) */}
      <div
        className={`${
          isLarge ? "w-13 h-13" : "w-11 h-11"
        } rounded-2xl overflow-hidden shadow-xs shrink-0 flex items-center justify-center p-0.5 transition-transform group-hover:scale-105`}
      >
        <img
          src="/logo.webp"
          alt="MIMC Technologies Logo"
          width={isLarge ? 52 : 44}
          height={isLarge ? 52 : 44}
          loading="eager"
          decoding="async"
          className="w-full h-full object-contain"
        />
      </div>

      {showText && (
        <div className="flex flex-col leading-tight">
          <span
            className={`font-heading font-extrabold tracking-tight ${
              isLarge ? "text-2xl" : "text-xl"
            } ${isDarkBg ? "text-white" : "text-[#171717]"}`}
          >
            MIMC
          </span>
          <span
            className={`text-teal-600 font-bold tracking-[0.22em] uppercase font-mono ${
              isLarge ? "text-[11px]" : "text-[10px]"
            }`}
          >
            Technologies
          </span>
        </div>
      )}
    </div>
  );
}
