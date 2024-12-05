// Convert SVG to PNG for browsers that don't support SVG favicons
export function generatePNGFavicon() {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const img = new Image();
  
  canvas.width = 32;
  canvas.height = 32;
  
  img.onload = () => {
    if (ctx) {
      ctx.drawImage(img, 0, 0);
      const pngData = canvas.toDataURL('image/png');
      const pngLink = document.createElement('link');
      pngLink.rel = 'icon';
      pngLink.type = 'image/png';
      pngLink.href = pngData;
      document.head.appendChild(pngLink);
    }
  };
  
  img.src = '/favicon.svg';
}