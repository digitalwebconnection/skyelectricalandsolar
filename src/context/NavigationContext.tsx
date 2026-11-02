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
    const rawPath = window.location.pathname;
    const path = rawPath.toLowerCase();
    const hash = window.location.hash.toLowerCase().replace("#", "");

    if (path.includes("about") || hash.includes("about")) return "/about-us";
    if (path.includes("contact") || hash.includes("contact")) return "/contact-us";
    if (path.startsWith("/services/") || path.startsWith("/service/")) return rawPath;
    if (path === "/services" || path === "/service" || hash.includes("service")) return "/services";
    if (path.startsWith("/blogs/") || path.startsWith("/blog/")) return rawPath;
    if (path === "/blogs" || path === "/blog" || hash.includes("blog")) return "/blogs";
    if (path.includes("privacy") || hash.includes("privacy")) return "/privacy-policy";
    if (path.includes("terms") || hash.includes("terms")) return "/terms-conditions";
    return rawPath || "/";
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
      const rawPath = window.location.pathname;
      const path = rawPath.toLowerCase();
      const hash = window.location.hash.toLowerCase().replace("#", "");
      if (path.includes("about") || hash.includes("about")) {
        setCurrentPath("/about-us");
      } else if (path.includes("contact") || hash.includes("contact")) {
        setCurrentPath("/contact-us");
      } else if (path.startsWith("/services/") || path.startsWith("/service/")) {
        setCurrentPath(rawPath);
      } else if (path === "/services" || path === "/service" || hash.includes("service")) {
        setCurrentPath("/services");
      } else if (path.startsWith("/blogs/") || path.startsWith("/blog/")) {
        setCurrentPath(rawPath);
      } else if (path === "/blogs" || path === "/blog" || hash.includes("blog")) {
        setCurrentPath("/blogs");
      } else if (path.includes("privacy") || hash.includes("privacy")) {
        setCurrentPath("/privacy-policy");
      } else if (path.includes("terms") || hash.includes("terms")) {
        setCurrentPath("/terms-conditions");
      } else {
        setCurrentPath(rawPath || "/");
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

