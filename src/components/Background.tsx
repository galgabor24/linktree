import React from 'react';
import { BackgroundImage } from './BackgroundImage';

export function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      <BackgroundImage />
    </div>
  );
}
