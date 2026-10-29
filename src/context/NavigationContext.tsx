import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";

interface NavigationContextType {
  currentPath: string;
  navigate: (path: string) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(
  undefined,
);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const getInitialPath = () => {
    if (typeof window === "undefined") return "/";
    const path = window.location.pathname;
    const hash = window.location.hash.replace("#", "");
    if (path.includes("contact") || hash.includes("contact")) return "/contact-us";
    return path || "/";
  };

  const [currentPath, setCurrentPath] = useState<string>(getInitialPath);

  const navigate = useCallback((path: string) => {
    setCurrentPath(path);
    if (typeof window !== "undefined") {
      window.history.pushState({}, "", path);
      // Smooth scroll to top when changing page
      const lenis = (window as unknown as { lenis?: { scrollTo: (target: number, options?: object) => void } }).lenis;
      if (lenis) {
        lenis.scrollTo(0, { duration: 0.6 });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      const hash = window.location.hash.replace("#", "");
      if (path.includes("contact") || hash.includes("contact")) {
        setCurrentPath("/contact-us");
      } else {
        setCurrentPath(path || "/");
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return (
    <NavigationContext.Provider value={{ currentPath, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
}

