/**
 * This file contains custom hooks
 * that can be used across different components in Homepage
 */

import { useInView, IntersectionOptions } from "react-intersection-observer";

export const useInViewHook = (
  options: IntersectionOptions = { threshold: 0.3 },
) => {
  const [ref, inView] = useInView(options);
  return { ref, inView };
};
