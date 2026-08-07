"use client";
import { useState } from "react";
import { Image as ImageIcon } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Private utility, NOT exported to satisfy react-refresh
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface CyberImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  alt: string; // Enforce alt tags for SEO
  aspectRatio?: string; // e.g. "16/9"
}

export default function CyberImage({
  alt,
  className,
  aspectRatio,
  src,
  ...props
}: CyberImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  // If no source is provided (placeholder mode) or it errors out, show the cyberpunk skeleton
  const showSkeleton = !src || error;

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-[var(--color-cyber-card)] border border-[var(--color-cyber-border)]",
        className,
      )}
      style={{ aspectRatio }}
    >
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 170, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 170, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
        }}
      />

      {showSkeleton ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-[var(--color-cyber-muted-fg)] gap-2">
          <ImageIcon className="w-8 h-8 opacity-50" />
          <span className="font-[var(--font-cyber-accent)] text-[10px] uppercase tracking-widest bg-black/50 px-2 py-1 border border-[var(--color-cyber-border)]">
            [IMAGE PLACEHOLDER]
          </span>
        </div>
      ) : (
        <>
          <img
            src={src}
            alt={alt}
            loading="lazy" // Critical for Core Web Vitals
            onLoad={() => setIsLoaded(true)}
            onError={() => setError(true)}
            className={cn(
              "w-full h-full object-cover transition-opacity duration-700 relative z-10",
              isLoaded ? "opacity-100" : "opacity-0",
            )}
            {...props}
          />

          {/* Scanline effect while loading */}
          {!isLoaded && (
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-cyber-accent)]/20 to-transparent animate-scanline z-20 pointer-events-none" />
          )}
        </>
      )}
    </div>
  );
}
