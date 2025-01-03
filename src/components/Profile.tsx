import React from 'react';

interface ProfileProps {
  name: string;
  bio: string;
  avatarUrl: string;
}

export function Profile({ name, bio }: ProfileProps) {
  return (
    <div className="relative text-center mb-12">
      <div className="relative inline-block">
        <div className="absolute inset-0 bg-cyan-500/20 blur-2xl rounded-full" />
        <div
          className="relative w-28 h-28 rounded-full border-2 border-white/20 shadow-lg"
          style={{
            backgroundImage: `url(/profile.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      </div>
      <div className="mt-6 space-y-2">
        <h1 className="text-3xl font-bold text-white">
          {name}
        </h1>
        <p className="text-white/80 text-lg">{bio}</p>
      </div>
    </div>
  );
}
