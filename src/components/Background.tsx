import React from 'react';
import { BackgroundImage } from './BackgroundImage';

export function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      <BackgroundImage />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
    </div>
  );
}