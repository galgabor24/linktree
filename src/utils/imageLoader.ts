// Utility to handle image loading and error states
export async function checkImageExists(url: string): Promise<boolean> {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
}

export function getImageUrl(path: string): string {
  // Load images from the public directory
  return `/${path}`;
}