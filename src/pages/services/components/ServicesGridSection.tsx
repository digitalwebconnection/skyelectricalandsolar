import { motion } from "motion/react";
import { Sun, PlugZap, BatteryCharging, Home, Network, Zap, ArrowUpRight } from "lucide-react";
import { useNavigation } from "../../../context";
import { AnimatedGridPattern } from "../../../components/ui";
import "./SolarServices.css";

interface ServiceDisplayItem {
  number: string;
  slug: string;
  title: string;
  Icon: typeof Sun;
  image: string;
  fallbackImage: string;
  description: string;
  benefits: string[];
}

const SERVICES_DISPLAY: ServiceDisplayItem[] = [
  {
    number: "01",
    slug: "solar-installation",
    title: "Solar Installation",
    Icon: Sun,
    image:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1100&q=90",
    fallbackImage: "/assets/residential-solar.webp",
    description:
      "Harness the power of the sun with our expert solar panel installation services. We design and install efficient solar systems to help reduce your energy bills and carbon footprint.",
    benefits: ["Custom Roof or Ground Mount Systems", "High-Efficiency Solar Panels"],
  },
  {
    number: "02",
    slug: "electric-car-chargers",
    title: "Electric Car Chargers",
    Icon: PlugZap,
    image:
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1100&q=90",
    fallbackImage: "/assets/posters/poster-ev.webp",
    description:
      "Future-proof your home or business with our EV charger installations. We supply and install reliable electric vehicle charging stations tailored to your vehicle and lifestyle.",
    benefits: ["Home & Business EV Charging", "Smart & Solar-Integrated Chargers"],
  },
  {
    number: "03",
    slug: "solar-battery",
    title: "Solar Battery",
    Icon: BatteryCharging,
    image:
      "https://images.unsplash.com/photo-1624397640148-949b1732bb0a?auto=format&fit=crop&w=1100&q=90",
    fallbackImage: "/assets/posters/poster-battery.webp",
    description:
      "Enjoy uninterrupted power, reduce your reliance on the grid, and lower your electricity bills.",
    benefits: ["Reliable Backup During Outages", "Store Solar Energy for Maximum Savings"],
  },
  {
    number: "04",
    slug: "all-domestic-electrical-work",
    title: "All Domestic Electrical Work",
    Icon: Home,
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1100&q=90",
    fallbackImage: "/assets/reviews/electrician-carrying-panel.webp",
    description:
      "From small repairs to complete home rewiring, we handle all types of domestic electrical needs with precision and care.",
    benefits: ["Safe & Compliant Installations", "Lighting, Power Points & Home Upgrades"],
  },
  {
    number: "05",
    slug: "all-communications-work-for-domestic-commercial",
    title: "All Communications Work for Domestic & Commercial",
    Icon: Network,
    image:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1100&q=90",
    fallbackImage: "/assets/posters/poster-technician.webp",
    description:
      "We install and maintain communication systems, including phone lines, data cabling, and networking solutions to keep you connected.",
    benefits: ["Data & Phone Cabling", "Network Setup & Smart Systems"],
  },
  {
    number: "06",
    slug: "switchboard-upgrades",
    title: "Switchboard Upgrades",
    Icon: Zap,
    image:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1100&q=90",
    fallbackImage: "/assets/posters/poster-inverter.webp",
    description:
      "Upgrade your switchboard to meet current safety standards, reduce fire risk, and support modern appliances and solar systems.",
    benefits: ["Increased Safety & Compliance", "Ready for Solar & EV Integration"],
  },
];

function DecorativeArt() {
  return (
    <>
      {/* Ambient Radial Solar Glows */}
      <div className="ss-glow ss-glow-one" />
      <div className="ss-glow ss-glow-two" />

      {/* Subtle Dot Grid Fields */}
      <div className="ss-dot-field ss-dots-left" />
      <div className="ss-dot-field ss-dots-right" />

      {/* Golden Sun Disk Backdrop */}
      <div className="ss-sun-disc" />

      {/* SVG Connecting Flow Lines and Glowing Solar Orbit Nodes */}
      <svg
        className="ss-orbit-art"
        viewBox="0 0 1440 1250"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M-40 210 C190 65 310 145 470 300 S760 260 930 350 S1190 230 1480 340" />
        <path d="M-70 760 C180 640 340 740 510 820 S800 690 990 800 S1260 720 1500 850" />
        <path d="M-50 1130 C190 980 350 1060 560 1110 S900 1010 1080 1090 S1300 1020 1490 1120" />
        {[30, 475, 930, 510, 990, 560, 1080].map((x, i) => {
          const y = [210, 300, 350, 820, 800, 1110, 1090][i];
          return (
            <g key={i}>
              <circle cx={x} cy={y} r="10" className="ss-node-halo" />
              <circle cx={x} cy={y} r="5" className="ss-node" />
            </g>
          );
        })}
      </svg>

      {/* Soft Sunlight Blurred Foliage Elements */}
      <div className="ss-leaf-blur ss-leaf-top" />
      <div className="ss-leaf-blur ss-leaf-bottom" />
    </>
  );
}

interface ServiceCardProps {
  service: ServiceDisplayItem;
  index: number;
  onNavigate: (slug: string) => void;
}

function ServiceCard({ service, index, onNavigate }: ServiceCardProps) {
  const Icon = service.Icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
      className={`ss-service ss-service-${index + 1}`}
    >
      {/* Visual Organic Shape Wrapper */}
      <div className="ss-visual-wrap cursor-pointer" onClick={() => onNavigate(service.slug)}>
        {/* Warm Orange Offset Accent Backdrop */}
        <div className="ss-orange-backdrop" />

        {/* Organic Rounded Photo Shape */}
        <div className="ss-photo-shape">
          <img
            src={service.image}
            alt={service.title}
            loading="lazy"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = service.fallbackImage;
            }}
          />
          <div className="ss-photo-shade" />
        </div>

        {/* Floating Circular Orange Badge with Icon */}
        <div className="ss-service-icon">
          <Icon className="w-7 h-7" strokeWidth={2.2} />
        </div>
      </div>

      {/* Service Text & Features */}
      <div className="ss-copy">
        <div className="ss-heading-row">
          <span className="ss-number">{service.number}</span>
          <h3 className="cursor-pointer" onClick={() => onNavigate(service.slug)}>
            {service.title}
          </h3>
        </div>

        <p className="ss-description">{service.description}</p>

        {/* Green Checkmark Benefits */}
        <ul className="ss-benefits">
          {service.benefits.map((benefit) => (
            <li key={benefit}>
              <svg
                className="w-4 h-4 shrink-0 text-emerald-600 mt-0.5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>

        {/* Explore Service Action Link */}
        <button type="button" onClick={() => onNavigate(service.slug)} className="ss-link">
          <span>Explore this service</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </motion.article>
  );
}

export function ServicesGridSection() {
  const { navigate } = useNavigation();

  return (
    <section id="all-services" className="solar-services">
      {/* MCP Magic UI Animated Grid Pattern in background */}
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none opacity-20"
        style={{
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 35%, black 20%, rgba(0,0,0,0.1) 80%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 35%, black 40%, rgba(0,0,0,0.1) 80%, transparent 100%)",
        }}
      >
        <AnimatedGridPattern
          numSquares={36}
          maxOpacity={0.22}
          duration={3.5}
          repeatDelay={0.5}
          className="fill-amber-500/30 stroke-amber-500/25"
        />
      </div>

      {/* Complex Organic Background Decorative Artwork */}
      <DecorativeArt />

      {/* Main Container */}
      <div className="ss-inner">
        {/* Section Header */}
        <motion.header
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="ss-header"
        >
          <h2 className="font-serif text-5xl">
            Our Core <span>Electrical &amp; Solar</span>
            <br />
            Services
          </h2>

          <p className="ss-intro">
            From solar installation to complete electrical solutions, we deliver reliable, efficient
            and future-ready systems for homes and businesses.
          </p>
        </motion.header>

        {/* 6 Organic Services Grid */}
        <div className="ss-grid">
          {SERVICES_DISPLAY.map((service, index) => (
            <ServiceCard
              key={service.number}
              service={service}
              index={index}
              onNavigate={(slug) => navigate(`/services/${slug}`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesGridSection;
