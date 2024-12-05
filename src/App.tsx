import React from 'react';
import { Facebook, Instagram, FileText, Github, Linkedin } from 'lucide-react';
import { Profile } from './components/Profile';
import { SocialLink } from './components/SocialLink';
import { Background } from './components/Background';
import { GlowEffect } from './components/GlowEffect';

function App() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Background />
      
      {/* Glow Effects */}
      <GlowEffect color="#0891b2" className="w-[500px] h-[500px] -left-40 -top-40" />
      <GlowEffect color="#6366f1" className="w-[500px] h-[500px] -right-40 -bottom-40" />

      <div className="relative max-w-md mx-auto px-4 py-16">
        <Profile
          name="Gabor Gal"
          bio="System Administrator and Drone Enthusiast"
          avatarUrl="/profile.jpg"
        />
        
        <div className="space-y-3">
          <SocialLink
            href="https://www.linkedin.com/in/gabor-gal-b39aaa139/"
            icon={Linkedin}
            label="Connect on LinkedIn"
          />
          <SocialLink
            href="https://github.com/galgabor24/"
            icon={Github}
            label="Follow on GitHub"
          />
          <SocialLink
            href="https://www.facebook.com/en.5sy"
            icon={Facebook}
            label="Connect on Facebook"
          />
          <SocialLink
            href="https://www.instagram.com/dronevisionair/?hl=en"
            icon={Instagram}
            label="Follow on Instagram"
          />
          <SocialLink
            href="https://www.galgabor.eu"
            icon={FileText}
            label="View My CV"
          />
        </div>
        
        <footer className="mt-12 text-center text-sm text-white/40">
          © {new Date().getFullYear()} • Gabor Gal
        </footer>
      </div>
    </main>
  );
}

export default App;
