import { useEffect } from "react";
import { Layout } from "./components/layout";
import { AppRouter } from "./routes";
import {
  WebsiteLoader,
  SmoothScrollProvider,
  InquiryEnvelopeModal,
  ErrorBoundary,
  JsonLd,
  SEO,
} from "./components/common";
import { InquiryModalProvider, NavigationProvider } from "./context";
import { siteConfig } from "./config/site";

export function App() {
  useEffect(() => {
    // Ensure meta description tag
    let descMeta = document.querySelector('meta[name="description"]');
    if (!descMeta) {
      descMeta = document.createElement("meta");
      descMeta.setAttribute("name", "description");
      document.head.appendChild(descMeta);
    }
    descMeta.setAttribute("content", siteConfig.description);

    // Force live browser tab favicon update
    const favicon = document.querySelector("link[rel*='icon']") as HTMLLinkElement;
    if (favicon) {
      favicon.href = `/favicon.svg?v=${Date.now()}`;
    }
  }, []);

  return (
    <ErrorBoundary>
      <SEO />
      <JsonLd />
      <NavigationProvider>
        <InquiryModalProvider>
          <SmoothScrollProvider>
            {/* 3D Gyroscope Orbital Preloader */}
            <WebsiteLoader minDuration={1800} />

            {/* Main Application Layout with Lazy Router */}
            <Layout>
              <AppRouter />
            </Layout>

            {/* Global Envelope Inquiry Modal */}
            <InquiryEnvelopeModal />
          </SmoothScrollProvider>
        </InquiryModalProvider>
      </NavigationProvider>
    </ErrorBoundary>
  );
}

export default App;
