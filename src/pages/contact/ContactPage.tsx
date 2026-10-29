import {
  ContactHero,
  ContactChannelsSection,
  ContactFormSection,
  LocationsMapSection,
  AssistanceProcessSection,
  ContactFaqSection,
} from "./components";

export function ContactPage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Full-Width Cinematic Hero Banner */}
      <ContactHero />

      {/* 2. Elevated Direct Channels Showcase (The 3 State Hubs, Direct Helpline, Email, & Action CTA) */}
      <ContactChannelsSection />

      {/* 3. Interactive High-Converting Quote & Consultation Form with Accessible Inputs & Animation */}
      <ContactFormSection />

      {/* 4. Multi-State Operations & Interactive Google Map Hub Explorer */}
      <LocationsMapSection />

      {/* 5. Rapid Turnaround Roadmap & Emergency Electrical Support Matrix */}
      <AssistanceProcessSection />

      {/* 6. Pre-Contact FAQ Accordion & Final High-Impact Conversion Banner */}
      <ContactFaqSection />
    </div>
  );
}

export default ContactPage;
