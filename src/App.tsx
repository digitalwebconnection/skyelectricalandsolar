import { useEffect } from "react";
import { Layout } from "./components/layout";
import { HomePage, ContactPage } from "./pages";
import {
  WebsiteLoader,
  SmoothScrollProvider,
  InquiryEnvelopeModal,
} from "./components/common";
import {
  InquiryModalProvider,
  NavigationProvider,
  useNavigation,
} from "./context";
import { siteConfig } from "./config/site";

function MainContent() {
  const { currentPath } = useNavigation();
  const isContact = currentPath.includes("contact");

  useEffect(() => {
    if (isContact) {
      document.title = `Contact Us | ${siteConfig.name} - WA, NSW & QLD Energy Hubs`;
    } else {
      document.title = siteConfig.title;
    }
  }, [isContact]);

  return (
    <Layout>
      {isContact ? <ContactPage /> : <HomePage />}
    </Layout>
  );
}

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
    const favicon = document.querySelector(
      "link[rel*='icon']",
    ) as HTMLLinkElement;
    if (favicon) {
      favicon.href = `/favicon.svg?v=${Date.now()}`;
    }
  }, []);

  return (
    <NavigationProvider>
      <InquiryModalProvider>
        <SmoothScrollProvider>
          {/* 3D Gyroscope Orbital Preloader with Typing Animation */}
          <WebsiteLoader minDuration={1800} />

          {/* Global Envelope Inquiry Modal */}
          <InquiryEnvelopeModal />

          <MainContent />
        </SmoothScrollProvider>
      </InquiryModalProvider>
    </NavigationProvider>
  );
}

export default App;
