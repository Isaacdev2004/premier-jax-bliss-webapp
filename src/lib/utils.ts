
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Animation utility functions
export const staggeredDelay = (index: number, baseDelay: number = 0.1): string => {
  return `${baseDelay * index}s`;
}

export const animationClass = (
  type: 'fade-in' | 'slide-up' | 'slide-left' | 'slide-right' | 'scale-in',
  delay?: number
): string => {
  const baseClass = type;
  return delay ? `${baseClass} style="animation-delay: ${delay}s"` : baseClass;
}

// Blue theme utility functions
export const gradientTextClass = "bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent";

export const gradientButtonClass = "bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white";

export const cardHoverEffectClass = "transition-all duration-300 hover:shadow-lg hover:-translate-y-1";

// Helper for creating decorative blobs
export const createBlob = (position: string, size: 'small' | 'medium' | 'large' = 'medium'): React.CSSProperties => {
  const [vertical, horizontal] = position.split(' ');
  
  return {
    position: 'absolute',
    top: vertical === 'top' ? '0' : vertical === 'center' ? '50%' : 'auto',
    bottom: vertical === 'bottom' ? '0' : 'auto',
    left: horizontal === 'left' ? '0' : horizontal === 'center' ? '50%' : 'auto',
    right: horizontal === 'right' ? '0' : 'auto',
    transform: (vertical === 'center' || horizontal === 'center') 
      ? `translate(${horizontal === 'center' ? '-50%' : '0'}, ${vertical === 'center' ? '-50%' : '0'})` 
      : 'none',
    width: size === 'small' ? '150px' : size === 'medium' ? '300px' : '500px',
    height: size === 'small' ? '150px' : size === 'medium' ? '300px' : '500px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, rgba(59, 130, 246, 0) 70%)',
    filter: 'blur(40px)',
    zIndex: 0,
  };
}
