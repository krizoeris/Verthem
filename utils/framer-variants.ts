/**
 * This file contains reusable Framer Motion variants
 * that can be used across different components in Homepage
 */

export const scaleInView = {
  initial: {
    opacity: 0,
    scale: 0.9,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};
