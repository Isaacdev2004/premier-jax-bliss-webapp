
// Keyframe definitions
export const keyframes = {
  slideInUp: {
    from: {
      opacity: 0,
      transform: 'translateY(20px)',
    },
    to: {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
  slideIn: {
    '0%': { 
      opacity: '0',
      transform: 'translateY(20px)', 
    },
    '100%': { 
      opacity: '1',
      transform: 'translateY(0)', 
    },
  },
  accordionDown: {
    from: { height: '0' },
    to: { height: 'var(--radix-accordion-content-height)' },
  },
  accordionUp: {
    from: { height: 'var(--radix-accordion-content-height)' },
    to: { height: '0' },
  },
};

// Animation utilities
export const animations = {
  slideIn: 'slide-in 0.5s ease-out forwards',
  slideInUp: 'slideInUp 0.6s ease-out forwards',
  accordionDown: 'accordion-down 0.2s ease-out',
  accordionUp: 'accordion-up 0.2s ease-out',
};

// Component-specific animations
export const componentAnimations = {
  pageTransitions: {
    enter: 'animate-slide-in',
  },
  hover: {
    scale: 'transition-transform duration-300 ease-in-out hover:scale-105',
  },
  navLink: {
    underline: 'relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 after:ease-in-out hover:after:w-full',
  },
  button: {
    hover: 'transition-all duration-300 ease-in-out hover:shadow-lg',
  },
};

// Animation delays
export const delays = {
  short: '0.2s',
  medium: '0.4s',
  long: '0.6s',
};

