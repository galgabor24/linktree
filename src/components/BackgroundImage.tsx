import React from 'react';

export function BackgroundImage() {
  return (
    <div 
      className="absolute inset-0"
      style={{
        backgroundImage: `url(/background.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    />
  );
}
