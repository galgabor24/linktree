import React, { useState, useEffect } from 'react';
import { checkImageExists } from '../utils/imageLoader';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  fallbackSrc: string;
  alt: string;
}

export function ImageWithFallback({
  src,
  fallbackSrc,
  alt,
  className,
  ...props
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState<string>(src);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const validateImage = async () => {
      setIsLoading(true);
      const exists = await checkImageExists(src);
      setImgSrc(exists ? src : fallbackSrc);
      setIsLoading(false);
    };

    validateImage();
  }, [src, fallbackSrc]);

  if (isLoading) {
    return <div className={`animate-pulse bg-white/10 ${className}`} />;
  }

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={() => setImgSrc(fallbackSrc)}
      {...props}
    />
  );
}