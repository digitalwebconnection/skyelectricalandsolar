import {
  ContactHero,
  ContactFormSection,
  LocationsMapSection,
  AssistanceProcessSection,
  ContactFaqSection,
} from "./components";

export function ContactPage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Contact Hero with Interactive Showcase of WA, NSW & QLD Hubs + Direct Call/Email Channels */}
      <ContactHero />

      {/* 2. Interactive High-Converting Quote & Consultation Form with Accessible Inputs & Animation */}
      <ContactFormSection />

      {/* 3. Multi-State Operations & Interactive Google Map Hub Explorer */}
      <LocationsMapSection />

      {/* 4. Rapid Turnaround Roadmap & Emergency Electrical Support Matrix */}
      <AssistanceProcessSection />

      {/* 5. Pre-Contact FAQ Accordion & Final High-Impact Conversion Banner */}
      <ContactFaqSection />
    </div>
  );
}

export default ContactPage;

