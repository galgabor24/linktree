// Asset imports
import gridPattern from '../assets/images/grid-pattern.svg';
import avatarPlaceholder from '../assets/images/avatar-placeholder.svg';
import backgroundFallback from '../assets/images/background-fallback.svg';
import { getImageUrl } from '../utils/imageLoader';

export const images = {
  gridPattern,
  avatarPlaceholder,
  backgroundFallback,
  // Dynamic imports for user-provided images from public folder
  profile: getImageUrl('profile.jpg'),
  background: getImageUrl('background.jpg'),
  // Fallback for profile picture
  profilePicture: getImageUrl('profile.jpg') || avatarPlaceholder,
} as const;