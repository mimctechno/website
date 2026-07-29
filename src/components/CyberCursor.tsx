import { useEffect, useState } from 'react';

export default function CyberCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      // Check if hovering over a clickable element
      if (
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.closest('button') ||
        target.closest('a')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  return (
    <>
      <div 
        className="fixed top-0 left-0 w-8 h-8 border border-[var(--color-cyber-accent)] pointer-events-none z-[9999] transition-all duration-150 ease-out hidden md:flex items-center justify-center mix-blend-difference"
        style={{ 
          transform: `translate(${position.x - 16}px, ${position.y - 16}px) scale(${isHovering ? 1.5 : 1}) rotate(${isHovering ? 45 : 0}deg)`,
          borderRadius: isHovering ? '0px' : '50%'
        }}
      >
      </div>
      <div 
        className="fixed top-0 left-0 w-2 h-2 bg-[var(--color-cyber-accent)] pointer-events-none z-[10000] hidden md:block mix-blend-difference"
        style={{ 
          transform: `translate(${position.x - 4}px, ${position.y - 4}px)`,
        }}
      />
    </>
  );
}
