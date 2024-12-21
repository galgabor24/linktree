import React from 'react';

export function BackgroundImage() {
  return (
    <div 
      className="absolute inset-0"
      style={{
        backgroundImage: `url(/background.mp4)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    />
  );
}
