import { useEffect } from "react";
import { useNavigation } from "../../context";

export function ScrollToTop() {
  const { currentPath } = useNavigation();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const lenis = (window as unknown as { lenis?: { scrollTo: (target: number, options?: object) => void } }).lenis;
      if (lenis) {
        lenis.scrollTo(0, { duration: 0.5 });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  }, [currentPath]);

  return null;
}

export default ScrollToTop;

