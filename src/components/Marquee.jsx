// src/components/Marquee.jsx
import React, { useEffect, useRef } from "react";

export function Marquee({ children, speed = 1, reverse = false }) {
  const containerRef = useRef();
  const scrollRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;

    const step = () => {
      if (!container) return;

      scrollRef.current += reverse ? -speed : speed;

      if (scrollRef.current > container.scrollWidth / 2) scrollRef.current = 0;
      if (scrollRef.current < 0) scrollRef.current = container.scrollWidth / 2;

      container.scrollLeft = scrollRef.current;

      requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [reverse, speed]);

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden whitespace-nowrap flex gap-6"
    >
      <div className="flex gap-6">
        {children}
        {children} {/* duplicate for seamless scroll */}
      </div>
    </div>
  );
}
