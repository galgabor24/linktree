import React from 'react';

interface GlowEffectProps {
  color: string;
  className?: string;
}

export function GlowEffect({ color, className = '' }: GlowEffectProps) {
  return (
    <div
      className={`absolute blur-[100px] opacity-20 rounded-full ${className}`}
      style={{ backgroundColor: color }}
    />
  );
}