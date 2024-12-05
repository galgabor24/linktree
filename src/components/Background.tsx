import React from 'react';
import { BackgroundImage } from './BackgroundImage';

export function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      <BackgroundImage />
      {/* Overlay with reduced blur and darkening effect */}
      <div className="absolute inset-0 backdrop-blur-[3px] bg-black/40" />
    </div>
  );
}
