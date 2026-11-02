import type { LucideIcon } from "lucide-react";
import { Sun, Zap, BatteryCharging, Home, Network, ShieldCheck } from "lucide-react";

export interface ServiceBenefit {
  title: string;
  desc: string;
  iconName?: string;
}

export interface ServiceProcessStep {
  step: string;
  title: string;
  desc: string;
  timeframe: string;
}

export interface ServicePackage {
  name: string;
  tagline: string;
  idealFor: string;
  specs: string[];
  featured?: boolean;
}

export interface RecentInstallation {
  title: string;
  location: string;
  state: "WA" | "NSW" | "QLD";
  capacity: string;
  details: string;
  image: string;
  tag: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  tagline: string;
  heroImage: string;
  cardImage: string;
  icon: LucideIcon;
  badge: string;
  stats: {
    stat1Label: string;
    stat1Value: string;
    stat2Label: string;
    stat2Value: string;
    stat3Label: string;
    stat3Value: string;
  };
  benefitsTitle: string;
  benefitsSubtitle: string;
  benefits: ServiceBenefit[];
  processTitle: string;
  processSubtitle: string;
  process: ServiceProcessStep[];
  whyChoosePoints: {
    title: string;
    desc: string;
  }[];
  packagesTitle: string;
  packagesSubtitle: string;
  packages: ServicePackage[];
  recentInstallations: RecentInstallation[];
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "solar-installation",
    slug: "solar-installation",
    title: "Solar Installation",
    shortDesc:
      "Harness the power of the sun with our expert solar panel installation services. We design and install efficient solar systems to help reduce your energy bills and carbon footprint.",
    tagline: "CEC-Accredited Residential & Commercial Solar Systems Sized for Maximum ROI",
    heroImage: "/assets/banner/banner-solar-field.jpg",
    cardImage: "/assets/residential-solar.jpg",
    icon: Sun,
    badge: "CEC Accredited Master Installers",
    stats: {
      stat1Value: "Up to 80%",
      stat1Label: "Power Bill Reduction",
      stat2Value: "25-Year",
      stat2Label: "Linear Output Warranty",
      stat3Value: "1-Day",
      stat3Label: "Turnkey Installation",
    },
    benefitsTitle: "Benefits of Installing Solar",
    benefitsSubtitle:
      "Why thousands of Australian homeowners and commercial facilities choose Sky Electrical & Solar for high-output photovoltaic arrays.",
    benefits: [
      {
        title: "Slash Electricity Bills by up to 80%",
        desc: "Generate your own free daytime power and dramatically curb exposure to unpredictable retail electricity tariff spikes across WA, NSW, and QLD.",
      },
      {
        title: "Federal STC Rebate Deductions Upfront",
        desc: "Save thousands of dollars immediately. We claim Small-scale Technology Certificates (STCs) directly on your behalf as an upfront invoice discount.",
      },
      {
        title: "Increase Property Capital Value",
        desc: "Australian homes equipped with premium tier-1 solar systems attract higher valuations and sell significantly faster in today's energy-conscious market.",
      },
      {
        title: "Tier-1 N-Type TOPCon Panels",
        desc: "We exclusively deploy high-density monocrystalline cells (Jinko, Longi, Seraphim) engineered for Australian high-heat UV resistance and 85%+ degradation resistance at year 25.",
      },
      {
        title: "Smart Cloud App Monitoring",
        desc: "Track real-time kWh solar yield, household self-consumption, and grid feed-in credits directly on your smartphone 24 hours a day.",
      },
      {
        title: "Cut 4 to 8 Tonnes of Carbon Annually",
        desc: "A typical 10kW residential rooftop array offsets the equivalent of planting over 100 trees every year, accelerating Australia's clean energy transition.",
      },
    ],
    processTitle: "Our Solar Installation Process",
    processSubtitle:
      "From initial LIDAR irradiance roof mapping to grid connection, every step is executed in-house by licensed master electricians.",
    process: [
      {
        step: "01",
        title: "3D Satellite Solar Audit & Shading Modeling",
        desc: "We analyze high-resolution satellite imagery and LIDAR roof pitch data to calculate optimal panel placement, annual kWh irradiance, and exact payback horizons.",
        timeframe: "Within 2 Hours",
      },
      {
        step: "02",
        title: "Custom Electrical Engineering & Rebate Plan",
        desc: "Our CEC-accredited electrical engineers design your custom array, verify inverter phase matching, and subtract all Federal and state incentives upfront.",
        timeframe: "Same Day",
      },
      {
        step: "03",
        title: "Network Operator Grid Connection Approval",
        desc: "We submit and manage all compliance documentation with Western Power, Ausgrid, Endeavour Energy, or Energex to secure feed-in tariff export permits.",
        timeframe: "3 - 7 Business Days",
      },
      {
        step: "04",
        title: "Master Electrician 1-Day Installation",
        desc: "Our in-house master electricians securely mount heavy-duty cyclone-rated racking, wire DC isolators, install string or microinverters, and run concealed conduits.",
        timeframe: "Single Day",
      },
      {
        step: "05",
        title: "System Commissioning & Smart App Handover",
        desc: "We conduct anti-islanding safety tests, commission Wi-Fi cloud telemetry, calibrate your mobile monitoring dashboard, and issue your official Certificate of Electrical Safety.",
        timeframe: "Complete & Live",
      },
    ],
    whyChoosePoints: [
      {
        title: "100% In-House Master Electricians",
        desc: "We never outsource or subcontract your rooftop to third-party labourers. Every Sky installer is an Australian-licensed A-Grade electrician.",
      },
      {
        title: "10-Year Workmanship Warranty",
        desc: "We back every roof penetration, flash footing, and conduit run with an unconditional 10-year structural and electrical workmanship guarantee.",
      },
      {
        title: "CEC Approved Solar Retailer Standards",
        desc: "Strict compliance with Clean Energy Council guidelines, ethical quoting, and zero aggressive sales tactics.",
      },
      {
        title: "Tri-State Hubs in WA, NSW, and QLD",
        desc: "Dedicated local distribution warehouses and emergency rapid-response technicians based in Perth, Sydney, and Brisbane.",
      },
    ],
    packagesTitle: "Solar Installation System Packages",
    packagesSubtitle:
      "Engineered systems built around your household consumption profile, available in single-phase and three-phase configurations.",
    packages: [
      {
        name: "6.6kW Essential Solar System",
        tagline: "The Australian Household Standard",
        idealFor: "1-3 Bedroom Homes with $450 - $700 quarterly power bills",
        specs: [
          "15 x 440W Tier-1 N-Type Monocrystalline Panels",
          "5.0kW High-Efficiency String Inverter (Sungrow / Solis)",
          "Estimated Daily Generation: 26 - 32 kWh",
          "Wi-Fi Real-Time Mobile App Monitoring",
          "Includes Full Federal STC Rebate Deduction",
          "10-Year Comprehensive Workmanship Warranty",
        ],
      },
      {
        name: "10.0kW High-Yield Solar System",
        tagline: "The Modern High-Consumption Benchmark",
        idealFor: "3-5 Bedroom Homes with Ducted Air-Con or Swimming Pool",
        featured: true,
        specs: [
          "23 x 440W Tier-1 Ultra-Black TOPCon Panels",
          "8.0kW - 10kW Hybrid-Ready Smart Inverter",
          "Estimated Daily Generation: 42 - 50 kWh",
          "Battery-Ready DC Architecture for Easy Storage Add-on",
          "Consumption Monitoring Meter Included",
          "25-Year Panel Performance & 10-Year Inverter Warranty",
        ],
      },
      {
        name: "13.2kW Maximum Export System",
        tagline: "Ultimate Energy Independence & EV Ready",
        idealFor: "Large Multi-Story Residences & Home Offices",
        specs: [
          "30 x 440W Heavy-Duty Monocrystalline Panels",
          "10.0kW Three-Phase High-Efficiency Inverter",
          "Estimated Daily Generation: 56 - 68 kWh",
          "Dual MPPT Split-Roof Orientation Optimization",
          "Smart EV & Battery Rapid Charging Integration",
          "Priority 24/7 Dedicated Engineering Support",
        ],
      },
    ],
    recentInstallations: [
      {
        title: "13.2kW Premium Rooftop Array",
        location: "Caversham, Perth WA",
        state: "WA",
        capacity: "13.2kW Solar (30 Panels)",
        details:
          "Split East-West orientation generating 62 kWh daily, offsetting 78% of household summer air-conditioning electricity demands.",
        image: "/assets/banner/banner-13kw-battery.jpg",
        tag: "Residential Perth",
      },
      {
        title: "10.5kW Modern Split-Roof Installation",
        location: "Kellyville, Sydney NSW",
        state: "NSW",
        capacity: "10.5kW Solar Array",
        details:
          "Custom tile roof brackets with Sungrow Hybrid Inverter and smart meter integration for maximum self-consumption during peak tariff periods.",
        image: "/assets/banner/banner-solar-mansion.jpg",
        tag: "Residential Sydney",
      },
      {
        title: "26.4kW Commercial Workshop Array",
        location: "Chermside, Brisbane QLD",
        state: "QLD",
        capacity: "26.4kW Commercial",
        details:
          "Three-phase commercial solar array powering industrial machinery and high-draw 3D welding equipment with zero grid export curtailment.",
        image: "/assets/commercial-solar.jpg",
        tag: "Commercial QLD",
      },
    ],
  },
  {
    id: "electric-car-chargers",
    slug: "electric-car-chargers",
    title: "Electric Car Chargers",
    shortDesc:
      "Future-proof your home or business with our EV charger installation. We supply and install reliable electric vehicle charging stations suited to your vehicle and lifestyle.",
    tagline: "Turnkey Fast Level 2 EV Charger Stations with Smart Solar Surplus Charging",
    heroImage: "/assets/banner/banner-electrical-technician.jpg",
    cardImage: "/assets/posters/poster-ev.jpg",
    icon: Zap,
    badge: "Certified Level 2 EV Technicians",
    stats: {
      stat1Value: "3x – 8x",
      stat1Label: "Faster than Wall Plugs",
      stat2Value: "100%",
      stat2Label: "Solar Self-Drive Mode",
      stat3Value: "Type 2",
      stat3Label: "Universal Compatibility",
    },
    benefitsTitle: "Benefits of Installing an EV Charger",
    benefitsSubtitle:
      "Charge rapidly and safely from home or workplace with dedicated Level 2 infrastructure tailored to Australian electric vehicles.",
    benefits: [
      {
        title: "Charge Up to 8x Faster at Home",
        desc: "Say goodbye to sluggish 10A granny cables that take 24+ hours. A dedicated 7.4kW single-phase or 22kW three-phase EV charger fully tops up your battery overnight.",
      },
      {
        title: "100% Free Driving with Solar Surplus",
        desc: "Pair your EV charger with your rooftop solar system to dynamically throttle charging currents, consuming zero grid power and driving purely on clean sunshine.",
      },
      {
        title: "Smart Off-Peak Charging Schedules",
        desc: "Automate charging sessions to trigger strictly during super-off-peak electricity tariffs (e.g. 11:00 PM – 6:00 AM) to slash your charging bill down to cents.",
      },
      {
        title: "Universal Type-2 Cable Compatibility",
        desc: "Engineered to charge all modern electric and plug-in hybrid vehicles in Australia, including Tesla, BYD, Hyundai, Kia, Polestar, MG, Volvo, and BMW.",
      },
      {
        title: "Built-in Dynamic Electrical Load Management",
        desc: "Smart CT clamp sensors monitor total household current draw in real time, automatically reducing EV charging speed if ducted AC or ovens are running.",
      },
      {
        title: "IP65 Weatherproof for Carports & Garages",
        desc: "Ruggedized UV-stabilized enclosures withstand severe Australian storms, driving rain, and intense summer sun safely without degrading.",
      },
    ],
    processTitle: "Our EV Charger Installation Process",
    processSubtitle:
      "Compliant with Australian Wiring Standard AS/NZS 3000:2018 Appendix P for electric vehicle charging equipment.",
    process: [
      {
        step: "01",
        title: "Switchboard Capacity & Mains Feed Audit",
        desc: "We verify your main service fuse rating, switchboard capacity, and earthing system to ensure your electrical setup can safely supply 32 amps continuous draw.",
        timeframe: "Initial Assessment",
      },
      {
        step: "02",
        title: "Charger Selection & Location Planning",
        desc: "We recommend the ideal station (Tesla Wall Connector, Ocular LTE, or Myenergi Zappi) and plan the neatest concealed conduit route to your parking bay.",
        timeframe: "Engineering Review",
      },
      {
        step: "03",
        title: "Dedicated Heavy-Duty Sub-Circuit Run",
        desc: "We install a dedicated 6mm² or 10mm² low-resistance copper sub-circuit protected by a Type A/B RCBO safety switch and lockable rotary isolator.",
        timeframe: "Installation Day",
      },
      {
        step: "04",
        title: "Wall Mounting & Solar CT Clamp Calibration",
        desc: "The charging unit is securely mounted, wired, and integrated with solar CT clamps for real-time surplus tracking and dynamic load shedding.",
        timeframe: "2 - 3 Hours",
      },
      {
        step: "05",
        title: "Live EV Vehicle Test & Safety Certificate",
        desc: "We conduct loop impedance testing, simulate EV communication handshakes, pair the station to your home Wi-Fi app, and issue compliance documentation.",
        timeframe: "Signoff & Handover",
      },
    ],
    whyChoosePoints: [
      {
        title: "Authorised Tesla & Multi-Brand Installers",
        desc: "Certified to install Tesla Wall Connector 3, Ocular, Myenergi Zappi, Schneider, and Wallbox Pulsar systems with full warranty protection.",
      },
      {
        title: "Level 2 ASP & A-Grade Master Electricians",
        desc: "Qualified to perform main switchboard upgrades, consumer mains cable enhancements, and three-phase conversions if needed.",
      },
      {
        title: "Zero-Compromise Safety Protocols",
        desc: "Strict DC fault protection (RDC-DD) and thermal overload safeguards to keep your family, vehicle, and home safe.",
      },
      {
        title: "Commercial Fleet & Workplace Deployment",
        desc: "Turnkey billing, RFID access control, and OCPP 1.6J/2.0.1 smart software management for offices, hotels, and strata complexes.",
      },
    ],
    packagesTitle: "Electric Vehicle Charging Solutions",
    packagesSubtitle:
      "High-speed residential wall connectors and commercial destination charging stations.",
    packages: [
      {
        name: "7.4kW Single-Phase Smart Home EV Charger",
        tagline: "The Everyday Australian Domestic Standard",
        idealFor: "Standard single-phase homes charging overnight (adds ~45km range/hr)",
        featured: true,
        specs: [
          "Up to 32A single-phase high-speed charging rate",
          "Tethered 5m or 7m heavy-duty Type 2 charging cable",
          "Wi-Fi and Bluetooth smartphone management app",
          "Solar surplus eco-mode charging option",
          "Dedicated RCBO safety switch & rotary isolator included",
          "Full 3-year hardware warranty + 10-year installation warranty",
        ],
      },
      {
        name: "22kW Three-Phase Rapid EV Wallbox",
        tagline: "Ultra-Fast Residential & Commercial Charging",
        idealFor:
          "Three-phase properties, commercial fleets, and dual-EV homes (adds ~120km range/hr)",
        specs: [
          "Full 32A three-phase output delivering maximum AC charging capacity",
          "Dynamic load balancing to eliminate mains fuse overloads",
          "RFID access card authorization for shared residential or workplace use",
          "Real-time kWh session metering & cost tracking",
          "IP65 waterproof & IK10 impact-resistant casing",
          "Certified for indoor garage or outdoor open-air car park installation",
        ],
      },
      {
        name: "Commercial Dual-Port Destination Station",
        tagline: "Smart Revenue & Fleet Infrastructure",
        idealFor: "Commercial premises, shopping centres, Airbnb rentals & office car parks",
        specs: [
          "Dual Type-2 sockets charging two vehicles simultaneously",
          "OCPP 1.6J / 2.0.1 cloud software for billing and user authentication",
          "MID-certified precision revenue-grade metering",
          "Pedestal pole or concrete ground bollard mounting options",
          "4G cellular modem connection for cloud fleet telematics",
          "Comprehensive scheduled maintenance & annual compliance testing",
        ],
      },
    ],
    recentInstallations: [
      {
        title: "Tesla Gen 3 Wall Connector Installation",
        location: "Duncraig, Perth WA",
        state: "WA",
        capacity: "7.4kW Fast Charger",
        details:
          "Neat concealed conduit run through garage cavity, dedicated 32A circuit breaker, and full Tesla smartphone app integration.",
        image: "/assets/reviews/electrician-mounting-inverter.jpg",
        tag: "Residential EV WA",
      },
      {
        title: "22kW Three-Phase Ocular IQ Station",
        location: "Castle Hill, Sydney NSW",
        state: "NSW",
        capacity: "22kW Three-Phase",
        details:
          "Fast AC destination charger for dual BYD & Porsche Taycan fleet with smart load management and automatic solar prioritization.",
        image: "/assets/banner/banner-electrical-technician.jpg",
        tag: "High-Speed EV NSW",
      },
      {
        title: "Commercial Dual-Port Workplace Charging",
        location: "Indooroopilly, Brisbane QLD",
        state: "QLD",
        capacity: "Dual 22kW Station",
        details:
          "Bollard-mounted commercial dual station with RFID card access for staff and smart integration with the company's 40kW rooftop solar system.",
        image: "/assets/commercial-solar.jpg",
        tag: "Commercial EV QLD",
      },
    ],
  },
  {
    id: "solar-battery",
    slug: "solar-battery",
    title: "Solar Battery",
    shortDesc:
      "Enjoy uninterrupted power, reduce your reliance on the grid, and lower your electricity bills.",
    tagline: "Store Excess Daytime Solar to Power Your Nights and Protect Against Blackouts",
    heroImage: "/assets/banner/banner-battery-storage.jpg",
    cardImage: "/assets/solutions-battery-visual.png",
    icon: BatteryCharging,
    badge: "Certified Clean Energy Battery Specialists",
    stats: {
      stat1Value: "24/7",
      stat1Label: "Solar Self-Sufficiency",
      stat2Value: "< 20ms",
      stat2Label: "Instant Blackout Backup",
      stat3Value: "10-Year",
      stat3Label: "Manufacturer Warranty",
    },
    benefitsTitle: "Benefits of Installing Solar Battery Storage",
    benefitsSubtitle:
      "Maximize your solar investment, achieve true evening self-reliance, and secure dependable blackout insurance.",
    benefits: [
      {
        title: "Round-the-Clock Solar Energy",
        desc: "Store cheap excess solar generated during peak midday sunlight and discharge it automatically in the evening when grid electricity tariffs are at their highest.",
      },
      {
        title: "Seamless Automatic Blackout Backup",
        desc: "When storms or grid faults knock out neighborhood power, your battery instantly switches on within milliseconds, keeping refrigerators, lights, and Wi-Fi running.",
      },
      {
        title: "Generous State Battery Rebates",
        desc: "Access government battery incentives including NSW Peak Demand Reduction Scheme (PDRS) discounts, slashing thousands off the total installed cost.",
      },
      {
        title: "Virtual Power Plant (VPP) Income",
        desc: "Opt-in to Australian Virtual Power Plant networks to earn passive credits on your power bill by automatically supporting the grid during extreme demand events.",
      },
      {
        title: "Safe LiFePO4 Thermal Stability",
        desc: "We prioritize Lithium Iron Phosphate chemistry, which is non-combustible, chemically stable in hot Australian climates, and rated for 6,000+ deep discharge cycles.",
      },
      {
        title: "Modular Expandability for Growing Families",
        desc: "Start with 5kWh to 10kWh and effortlessly stack additional battery modules as your household energy needs grow or when you purchase an electric vehicle.",
      },
    ],
    processTitle: "Our Solar Battery Installation Process",
    processSubtitle:
      "Fully compliant with AS/NZS 5139:2019 safety standards for battery energy storage systems.",
    process: [
      {
        step: "01",
        title: "Evening Consumption Audit & Backup Sizing",
        desc: "We analyze your smart meter interval data to calculate your exact kilowatt-hour night load and determine which circuits require emergency backup protection.",
        timeframe: "Comprehensive Analysis",
      },
      {
        step: "02",
        title: "Safe Location Assessment & Compliance Check",
        desc: "We identify an AS/NZS 5139 compliant mounting location (garage or shaded exterior wall) with proper clearances away from habitable rooms and windows.",
        timeframe: "Site Engineering",
      },
      {
        step: "03",
        title: "Backup Gateway & Inverter Integration",
        desc: "Our master electricians install the automatic transfer switch (ATS) backup gateway, rewiring critical lighting, refrigeration, and power circuits.",
        timeframe: "Installation Day",
      },
      {
        step: "04",
        title: "Battery Mounting & High-Voltage Interconnection",
        desc: "We securely mount the battery unit, install DC isolators, ground cables, and configure high-speed CAN-bus telemetry communication with your hybrid inverter.",
        timeframe: "4 - 6 Hours",
      },
      {
        step: "05",
        title: "Live Islanding Blackout Simulation & Handover",
        desc: "We physically drop the main grid breaker to demonstrate real-time automatic backup failover, configure your smartphone app, and provide full training.",
        timeframe: "Tested & Certified",
      },
    ],
    whyChoosePoints: [
      {
        title: "Certified Tesla Powerwall & Sungrow Installers",
        desc: "Accredited direct installation partners for the world's leading tier-1 battery manufacturers with full factory warranty backing.",
      },
      {
        title: "AS/NZS 5139 Battery Compliance Guarantee",
        desc: "100% adherence to strict Australian standards for thermal insulation, fire protection, and non-combustible bollards.",
      },
      {
        title: "Seamless Solar Retrofits or New Builds",
        desc: "We install AC-coupled batteries onto existing solar systems or design high-efficiency DC-coupled all-in-one solar and battery packages.",
      },
      {
        title: "Local Australian Support & Monitoring",
        desc: "Our engineering team actively monitors battery telemetry alerts to provide proactive maintenance before faults ever occur.",
      },
    ],
    packagesTitle: "Solar Battery Storage Solutions",
    packagesSubtitle:
      "Industry-leading home battery systems engineered for reliability, safety, and rapid payback.",
    packages: [
      {
        name: "9.6kWh – 12.8kWh Sungrow Modular High-Voltage Battery",
        tagline: "The Smartest High-Efficiency Solar Companion",
        idealFor: "Standard 3-4 bedroom homes with existing or new Sungrow solar systems",
        featured: true,
        specs: [
          "Modular 3.2kWh stackable Lithium Iron Phosphate (LiFePO4) design",
          "100% usable capacity with 6,000 cycle lifespan (approx. 15-20 years)",
          "Rapid sub-20ms emergency power supply (EPS) blackout backup",
          "Safe low-voltage to high-voltage internal conversion",
          "Direct integration with iSolarCloud mobile and desktop portal",
          "10-Year Comprehensive Manufacturer Replacement Warranty",
        ],
      },
      {
        name: "13.5kWh Tesla Powerwall 3 All-In-One",
        tagline: "The Ultimate Whole-Home Backup Benchmark",
        idealFor: "Premium homes demanding maximum continuous power and single-box elegance",
        specs: [
          "Integrated 11.5kW solar inverter with 6 MPPT solar inputs",
          "Massive 11.5kW continuous on-grid and backup power output",
          "Whole-home backup capable of starting large ducted air conditioning units",
          "Storm Watch feature automatically charges battery before severe weather hits",
          "Sleek architectural aesthetic suitable for indoor or outdoor mounting",
          "10-Year Comprehensive Tesla Warranty with unlimited cycle guarantee",
        ],
      },
      {
        name: "Alpha ESS Smile-G3 / Scalable Hybrid Storage",
        tagline: "Flexible Budget-Conscious Energy Freedom",
        idealFor: "Households looking for an affordable entry into solar battery storage",
        specs: [
          "Scalable from 5.0kWh up to 30.0kWh total capacity",
          "Built-in DC hybrid inverter with UPS uninterruptible power supply functionality",
          "German design and engineering with cobalt-free LiFePO4 cells",
          "VPP ready for additional electricity bill credit incentives",
          "Robust IP65 casing designed for harsh Australian weather conditions",
          "10-Year Performance Guarantee and 24/7 technical monitoring",
        ],
      },
    ],
    recentInstallations: [
      {
        title: "12.8kWh Sungrow High-Voltage Battery Retrofit",
        location: "Caversham, Perth WA",
        state: "WA",
        capacity: "12.8kWh Battery",
        details:
          "Coupled to an existing 10kW solar system, reducing household grid reliance to under 8% year-round with dedicated essential blackout circuits.",
        image: "/assets/reviews/battery-storage-garage.jpg",
        tag: "Residential Battery WA",
      },
      {
        title: "Dual Tesla Powerwall 3 Whole-Home Backup",
        location: "Hornsby, Sydney NSW",
        state: "NSW",
        capacity: "27kWh Total Storage",
        details:
          "Whole-home backup system powering 3-phase ducted air-con and EV charging through severe bushland grid outages.",
        image: "/assets/banner/banner-battery-storage.jpg",
        tag: "Whole-Home Backup NSW",
      },
      {
        title: "19.2kWh Modular Commercial Battery Storage",
        location: "Coorparoo, Brisbane QLD",
        state: "QLD",
        capacity: "19.2kWh Modular Battery",
        details:
          "Commercial energy storage system performing peak-demand shaving during high afternoon commercial electricity tariff spikes.",
        image: "/assets/banner/banner-13kw-battery.jpg",
        tag: "Commercial Battery QLD",
      },
    ],
  },
  {
    id: "all-domestic-electrical-work",
    slug: "all-domestic-electrical-work",
    title: "All Domestic Electrical Work",
    shortDesc:
      "From small repairs to complete home rewiring, we handle all types of domestic electrical needs with precision and care.",
    tagline:
      "Licensed Master Electricians for All Residential Installations, Repairs & Safety Upgrades",
    heroImage: "/assets/banner/banner-electrical-technician.jpg",
    cardImage: "/assets/reviews/smiling-solar-electrician.jpg",
    icon: Home,
    badge: "Licensed Master Electricians",
    stats: {
      stat1Value: "100%",
      stat1Label: "AS/NZS 3000 Compliant",
      stat2Value: "Lifetime",
      stat2Label: "Workmanship Warranty",
      stat3Value: "24/7",
      stat3Label: "Emergency Fault Dispatch",
    },
    benefitsTitle: "Benefits of Professional Domestic Electrical Work",
    benefitsSubtitle:
      "Safe, compliant, and energy-efficient electrical solutions delivered with craftsmanship and care for your family home.",
    benefits: [
      {
        title: "Guaranteed Electrical Safety & Code Compliance",
        desc: "All electrical work strictly adheres to the Australian Wiring Rules AS/NZS 3000:2018, eliminating dangerous shock hazards and electrical fire risks.",
      },
      {
        title: "Energy-Efficient LED Lighting Upgrades",
        desc: "Replace old halogen downlights with premium architectural LED fittings to slash your domestic lighting electricity consumption by up to 80%.",
      },
      {
        title: "Clean & Respectful Home Service",
        desc: "Our master electricians use protective boot covers, floor drop sheets, and HEPA vacuums, leaving your home spotless after every job.",
      },
      {
        title: "Fixed Upfront Pricing with Zero Surprises",
        desc: "We provide clear itemized quotes before picking up any tools. You will never encounter unexpected callout fees or hidden surcharges.",
      },
      {
        title: "Licensed A-Grade Electricians Only",
        desc: "Every technician entering your home is an accredited, police-checked, fully insured A-Grade master electrician.",
      },
      {
        title: "Official Certificate of Electrical Safety",
        desc: "Every completed project comes with official compliance paperwork required for home insurance and property settlement validation.",
      },
    ],
    processTitle: "Our Domestic Electrical Process",
    processSubtitle: "A stress-free customer experience from first phone call to complete signoff.",
    process: [
      {
        step: "01",
        title: "Rapid Consultation & Booking",
        desc: "Contact our friendly team to explain your electrical needs. We schedule a convenient arrival window with a 30-minute advance notice call.",
        timeframe: "Instant Scheduling",
      },
      {
        step: "02",
        title: "On-Site Diagnostic & Fixed-Price Quote",
        desc: "Our electrician inspects the installation, tests circuits with calibrated meters, and provides a clear, competitive fixed quote before work begins.",
        timeframe: "30 - 45 Minutes",
      },
      {
        step: "03",
        title: "Precision Installation & Clean Workmanship",
        desc: "We isolate power safely, run high-grade Australian-made copper cables through wall cavities, mount fittings flush, and conceal all conduits.",
        timeframe: "Completed on Schedule",
      },
      {
        step: "04",
        title: "Multi-Point Safety & Continuity Testing",
        desc: "We conduct insulation resistance, earth continuity, and polarity tests on every newly installed point to ensure 100% fault-free operation.",
        timeframe: "Pre-Handover Verification",
      },
      {
        step: "05",
        title: "Clean Up & Electrical Safety Certificate",
        desc: "We vacuum all dust, test appliances with you, walk you through the operation, and issue your official compliance documentation.",
        timeframe: "Job Complete",
      },
    ],
    whyChoosePoints: [
      {
        title: "Fully Licensed & Insured Across WA, NSW, and QLD",
        desc: "Holding master electrical contracting licenses across Western Australia (EC 14000+), New South Wales, and Queensland with $20M public liability.",
      },
      {
        title: "Lifetime Workmanship Guarantee",
        desc: "If any wiring or fitting installed by our team ever fails due to workmanship, we repair or replace it completely free of charge.",
      },
      {
        title: "Premium Australian Hardware Brands",
        desc: "We only install trusted, durable components from Clipsal, Hager, Schneider Electric, and Lumex.",
      },
      {
        title: "Rapid Emergency Response",
        desc: "Master electricians on standby for power outages, burning smells, tripping safety switches, and storm damage.",
      },
    ],
    packagesTitle: "Popular Domestic Electrical Services",
    packagesSubtitle:
      "From minor electrical repairs to comprehensive renovations and new home wiring.",
    packages: [
      {
        name: "Architectural LED Lighting Package",
        tagline: "Modern Ambience & High Energy Efficiency",
        idealFor: "Homeowners replacing outdated power-hungry halogen downlights",
        specs: [
          "Supply & installation of IC-4 rated dimmable LED downlights",
          "Multi-zone rotary or push-button trailing-edge dimmers",
          "Warm white, natural white, or cool daylight color temperature options",
          "External security sensor floodlights & ambient garden lighting",
          "Cuts lighting power consumption by up to 80%",
          "Includes safe disposal of old transformer units and halogen globes",
        ],
      },
      {
        name: "Interconnected Smoke Alarm Upgrade",
        tagline: "Mandatory Australian Safety Compliance",
        idealFor: "Rental properties, home buyers & families seeking maximum early warning",
        featured: true,
        specs: [
          "Compliant with latest AS 3786:2014 residential smoke alarm legislation",
          "Photoelectric interconnected alarms (when one sounds, they all sound)",
          "10-year sealed tamper-proof lithium battery backup",
          "Installed in all bedrooms, hallways, and living levels",
          "Official Smoke Alarm Compliance Certificate for rental inspections",
          "Zero false alarms from kitchen steam with advanced optical sensing",
        ],
      },
      {
        name: "Power Points & Appliance Dedicated Circuits",
        tagline: "Convenience & High-Load Safety",
        idealFor: "Kitchen renovations, home offices & heavy-load appliances",
        specs: [
          "Double GPOs with integrated fast-charging USB-A & USB-C ports",
          "Dedicated 32A circuits for modern induction cooktops and pyrolytic ovens",
          "Heavy-duty outdoor weatherproof IP66 sockets for patios and BBQs",
          "Ceiling fan supply & installation with remote wall controls",
          "Sub-board installation for backyard sheds, granny flats, and workshops",
          "Full circuit load testing and safety switch integration",
        ],
      },
    ],
    recentInstallations: [
      {
        title: "Full 4-Bedroom Architectural LED Renovation",
        location: "Cottesloe, Perth WA",
        state: "WA",
        capacity: "38 LED Downlights + Smart Dimmers",
        details:
          "Complete architectural lighting redesign with warm dimmable downlights, feature kitchen pendant wiring, and automated garden pathway illumination.",
        image: "/assets/reviews/family-solar-home.jpg",
        tag: "Residential Lighting WA",
      },
      {
        title: "Interconnected Smoke Alarm System & Induction Cooktop",
        location: "Baulkham Hills, Sydney NSW",
        state: "NSW",
        capacity: "Full AS 3786 Compliance",
        details:
          "Installed 6 interconnected photoelectric smoke alarms across two storeys and ran a dedicated 32A sub-circuit for a 7.4kW induction cooktop.",
        image: "/assets/reviews/smiling-solar-electrician.jpg",
        tag: "Domestic Electrical NSW",
      },
      {
        title: "Granny Flat Sub-Board & Power Fit-Out",
        location: "Clayfield, Brisbane QLD",
        state: "QLD",
        capacity: "12-Pole Sub-Board",
        details:
          "Complete electrical fit-out for newly constructed backyard secondary dwelling, including private sub-meter, RCBO switches, and split-system AC isolators.",
        image: "/assets/reviews/electrician-wiring-switchboard.jpg",
        tag: "Residential Fit-Out QLD",
      },
    ],
  },
  {
    id: "all-communications-work-for-domestic-commercial",
    slug: "all-communications-work-for-domestic-commercial",
    title: "All Communications Work for Domestic & Commercial",
    shortDesc:
      "We install and maintain communication systems including phone lines, data cabling, and networking solutions to keep you connected.",
    tagline:
      "ACMA-Licensed Structured Data Cabling, Wi-Fi Access Points & Commercial Communications",
    heroImage: "/assets/commercial-solar.jpg",
    cardImage: "/assets/reviews/electrician-testing-equipment.jpg",
    icon: Network,
    badge: "ACMA Licensed Master Cablers",
    stats: {
      stat1Value: "10 Gbps",
      stat1Label: "Cat6A High-Speed Bandwidth",
      stat2Value: "100%",
      stat2Label: "Fluke Certified Testing",
      stat3Value: "Zero",
      stat3Label: "Wi-Fi Dead Zone Guarantee",
    },
    benefitsTitle: "Benefits of Certified Communications & Data Cabling",
    benefitsSubtitle:
      "Unleash ultra-reliable, lightning-fast gigabit connectivity for home offices, streaming, smart home systems, and commercial enterprises.",
    benefits: [
      {
        title: "Blazing 10 Gbps Data Transfer Speeds",
        desc: "Future-proof your network with Cat6 and Cat6A structured cabling capable of handling ultra-high bandwidth demands for decades without signal degradation.",
      },
      {
        title: "Eliminate Wi-Fi Dead Zones Forever",
        desc: "Hardwired ceiling-mounted commercial Wi-Fi access points provide seamless, high-speed whole-property roaming with zero buffering or dropped Zoom calls.",
      },
      {
        title: "ACMA Open Cabler Certification",
        desc: "All cabling is performed strictly by Australian Communications and Media Authority (ACMA) licensed cablers holding structured and fibre endorsements.",
      },
      {
        title: "Fluke-Certified Performance Testing",
        desc: "Every data drop is certified with enterprise Fluke network testers, verifying zero packet loss, optimal wiremap, and pristine signal-to-noise ratios.",
      },
      {
        title: "Neat Central Server Racks & Patch Panels",
        desc: "Consolidate all incoming NBN lines, security camera NVRs, and Ethernet cables into a clean, wall-mounted or freestanding server rack with labeled patch panels.",
      },
      {
        title: "Seamless VoIP & Video Intercom Integration",
        desc: "High-clarity video doorbells, smart access control intercoms, and commercial multi-line VoIP telephone systems engineered for crystal-clear audio.",
      },
    ],
    processTitle: "Our Communications Installation Process",
    processSubtitle:
      "Strict compliance with AS/CA S008 and AS/CA S009 Australian telecommunications cabling standards.",
    process: [
      {
        step: "01",
        title: "Network Topology & Wi-Fi Heatmap Survey",
        desc: "We analyze your property's architectural floor plan, structural walls, and network bandwidth demands to map out optimal cable pathways and Wi-Fi access point locations.",
        timeframe: "Consultation & Audit",
      },
      {
        step: "02",
        title: "Concealed Cable Pathway Planning",
        desc: "We plan discreet, concealed cable routes through ceiling voids, wall cavities, and conduits to ensure zero unsightly exposed wiring.",
        timeframe: "Design Phase",
      },
      {
        step: "03",
        title: "Solid Copper Cat6/Cat6A Cable Installation",
        desc: "Our licensed cablers pull pure solid copper Australian-certified data cables, maintaining strict minimum bend radiuses and separation from 240V power lines.",
        timeframe: "Installation Day",
      },
      {
        step: "04",
        title: "Patch Panel Termination & Server Rack Setup",
        desc: "We punch down connections into high-density patch panels, terminate stylish Clipsal RJ45 wall plates, and install cable management organizers.",
        timeframe: "3 - 5 Hours",
      },
      {
        step: "05",
        title: "Fluke Certification & TCA1 Form Signoff",
        desc: "We test every port with certified digital network analyzers, provide you with full test printouts, and submit official Telecommunications Compliance Form TCA1.",
        timeframe: "Certified & Connected",
      },
    ],
    whyChoosePoints: [
      {
        title: "ACMA Open Registration Endorsement",
        desc: "Legally licensed and insured to work on Australian public telecommunications networks, structured cabling, optical fibre, and coaxial systems.",
      },
      {
        title: "Enterprise Brands: Ubiquiti UniFi, Cisco & Clipsal",
        desc: "We deploy industry-standard network gear built for maximum uptime, high throughput, and effortless cloud management.",
      },
      {
        title: "Strict Low-Voltage / 240V Separation",
        desc: "We adhere strictly to AS/CA S009 separation rules, preventing electromagnetic interference (EMI) and power surge bleed into data lines.",
      },
      {
        title: "Turnkey Domestic & Commercial Solutions",
        desc: "From a single home office Ethernet drop to full multi-floor commercial office structured fit-outs across WA, NSW, and QLD.",
      },
    ],
    packagesTitle: "Communications & Data Cabling Solutions",
    packagesSubtitle:
      "High-speed networking infrastructure designed for modern residences, home offices, and commercial facilities.",
    packages: [
      {
        name: "Home Office & Gaming Gigabit Cat6 Package",
        tagline: "Ultra-Low Latency & High-Speed Reliability",
        idealFor: "Remote workers, online gamers, and smart TV 4K/8K streaming setups",
        specs: [
          "Up to 4 x dedicated Cat6 gigabit data points terminated into sleek wall plates",
          "Concealed in-wall cabling connected directly to your NBN modem router",
          "Zero wireless latency, ping drops, or interference from microwave ovens",
          "Perfect for home offices, gaming PCs, and high-definition smart TVs",
          "Tested with digital cable analyzers for full 1,000 Mbps gigabit throughput",
          "Compliant TCA1 Australian Cabling Certificate included",
        ],
      },
      {
        name: "Whole-Home Ubiquiti UniFi Wi-Fi 6 Mesh System",
        tagline: "Enterprise-Grade Wireless Performance for Modern Living",
        idealFor: "Large two-story or sprawling homes with persistent Wi-Fi blackspots",
        featured: true,
        specs: [
          "2 to 4 x ceiling-mounted Ubiquiti UniFi Wi-Fi 6 / Wi-Fi 7 Access Points",
          "Hardwired Cat6 backhaul providing maximum wireless throughput",
          "Seamless single-SSID whole-property roaming without dropping connection",
          "Power-over-Ethernet (PoE) technology eliminating messy power adapters",
          "Dedicated guest network & parental control web filtering capabilities",
          "Cloud-managed gateway with full mobile smartphone telemetry dashboard",
        ],
      },
      {
        name: "Commercial Office Structured Cabling & Server Rack",
        tagline: "Robust Backbone for Modern Businesses",
        idealFor: "Commercial offices, medical practices, warehouses & retail fit-outs",
        specs: [
          "24 to 96+ Cat6A 10Gbps data drops for workstations, VoIP phones & printers",
          "Wall-mounted or freestanding 12RU to 42RU glass-door server rack",
          "Cat6A 24-port patch panels with horizontal brush cable management bars",
          "PoE Gigabit Network Switches with SFP+ 10G optical fibre uplink ports",
          "Comprehensive Fluke DTX/DSX Cable Certification test report for every port",
          "Dedicated 20A UPS surge-protected power circuit for communications equipment",
        ],
      },
    ],
    recentInstallations: [
      {
        title: "48-Drop Cat6A Commercial Office Fit-Out",
        location: "Osborne Park, Perth WA",
        state: "WA",
        capacity: "48 Cat6A Ports + 18RU Rack",
        details:
          "Complete structured cabling installation with high-density patch panels, PoE VoIP phone integration, and Fluke DTX certification across all lines.",
        image: "/assets/commercial-solar.jpg",
        tag: "Commercial Data WA",
      },
      {
        title: "Ubiquiti UniFi Wi-Fi 6 Multi-Level Deployment",
        location: "Parramatta, Sydney NSW",
        state: "NSW",
        capacity: "5 x Ceiling UniFi APs",
        details:
          "High-speed residential wireless network covering a 3-level residence and detached poolside cabana with zero signal loss or latency drops.",
        image: "/assets/reviews/electrician-testing-equipment.jpg",
        tag: "UniFi Wireless NSW",
      },
      {
        title: "Smart Intercom & Commercial Data Network",
        location: "New Farm, Brisbane QLD",
        state: "QLD",
        capacity: "24-Port Server Rack",
        details:
          "Installed high-speed data cabling for commercial medical suites, including secure video door access control and isolated patient guest Wi-Fi networks.",
        image: "/assets/banner/banner-enterprise-solar.jpg",
        tag: "Commercial Comms QLD",
      },
    ],
  },
  {
    id: "switchboard-upgrades",
    slug: "switchboard-upgrades",
    title: "Switchboard Upgrades",
    shortDesc:
      "Upgrade your switchboard to meet current safety standards, reduce fire risk, and support modern appliances and solar systems.",
    tagline: "Modern RCD Safety Switches, Surge Protection & AS/NZS 3000 Fire-Prevention Upgrades",
    heroImage: "/assets/banner/banner-enterprise-solar.jpg",
    cardImage: "/assets/reviews/electrician-wiring-switchboard.jpg",
    icon: ShieldCheck,
    badge: "Master Electrician Safety Experts",
    stats: {
      stat1Value: "< 30ms",
      stat1Label: "Life-Saving RCD Trip Speed",
      stat2Value: "100%",
      stat2Label: "Asbestos-Safe Removal",
      stat3Value: "Same Day",
      stat3Label: "Power Restored Safely",
    },
    benefitsTitle: "Benefits of Upgrading Your Switchboard",
    benefitsSubtitle:
      "Protect your family and property against electrocution and electrical house fires while preparing for solar, batteries, and EV charging.",
    benefits: [
      {
        title: "Instant Protection Against Fatal Electrocution",
        desc: "Modern Type A RCBO safety switches detect microscopic electrical leakages and trip within 30 milliseconds, cutting power before a fatal shock can occur.",
      },
      {
        title: "Eliminate Dangerous Ceramic Rewirable Fuses",
        desc: "Old ceramic fuses with exposed copper wire are a notorious fire hazard, frequently arcing and overheating under modern household power demands.",
      },
      {
        title: "Whole-Home Surge Protection Included",
        desc: "Protect expensive smart TVs, computers, heat pump appliances, and inverters against devastating lightning strikes and power grid voltage spikes.",
      },
      {
        title: "Solar, Battery & EV Charger Ready",
        desc: "Older switchboards lack the physical rail space and thermal ratings required to install solar inverters, home batteries, or high-draw EV car chargers.",
      },
      {
        title: "Safe Removal of Asbestos Backing Panels",
        desc: "Many pre-1990 Australian switchboard backing panels contain hazardous asbestos (Zelemite). We follow strict licensed containment and disposal protocols.",
      },
      {
        title: "Full Compliance with AS/NZS 3000:2018",
        desc: "Brings your entire electrical installation up to current Australian standards, satisfying home insurance requirements and preventing policy invalidation.",
      },
    ],
    processTitle: "Our Switchboard Upgrade Process",
    processSubtitle:
      "Seamless same-day turnaround with minimal power interruption to your daily routine.",
    process: [
      {
        step: "01",
        title: "Comprehensive Switchboard & Earthing Audit",
        desc: "We perform thermal imaging to detect hot spots, calculate total household load, inspect existing earthing electrodes, and check for asbestos backing boards.",
        timeframe: "30-Minute Inspection",
      },
      {
        step: "02",
        title: "Network Operator Coordination & Safe Isolation",
        desc: "We coordinate with your network distributor (Western Power, Ausgrid, Endeavour, or Energex) to isolate incoming service mains safely before work begins.",
        timeframe: "Power Isolation",
      },
      {
        step: "03",
        title: "Old Fuse Removal & Fire-Rated Enclosure Fitting",
        desc: "We strip out outdated ceramic fuses and install a heavy-duty, flame-retardant UV-stabilized enclosure equipped with insulated busbars.",
        timeframe: "Installation Phase",
      },
      {
        step: "04",
        title: "Individual RCBO Safety Switches & Surge Arrester",
        desc: "Every single light, power, oven, and air conditioning circuit is wired with its own dedicated RCBO safety switch and primary Type 2 surge diverter.",
        timeframe: "2 - 4 Hours",
      },
      {
        step: "05",
        title: "RCD Trip Time Testing & Certificate of Safety",
        desc: "We inject test currents to certify all switches trip under 30ms, restore power, label every circuit clearly, and issue your official compliance paperwork.",
        timeframe: "Power Safely Restored",
      },
    ],
    whyChoosePoints: [
      {
        title: "Premium European Switchgear (Hager & Schneider)",
        desc: "We refuse to install budget unbranded switches. We exclusively use Hager, Schneider Electric, or ABB circuit breakers known for bulletproof longevity.",
      },
      {
        title: "Same-Day Power Restoration Guarantee",
        desc: "We guarantee power will be fully tested and safely restored before our team leaves your home at the end of the day.",
      },
      {
        title: "Licensed Asbestos Handling Protocols",
        desc: "Strict adherence to Safe Work Australia codes of practice for non-friable asbestos switchboard panel removal and disposal.",
      },
      {
        title: "Clear, Professional Din-Rail Circuit Labeling",
        desc: "Every circuit breaker is permanently marked with clear printed labels, so you will never struggle in the dark to identify a tripped circuit.",
      },
    ],
    packagesTitle: "Switchboard Upgrade Packages",
    packagesSubtitle:
      "Engineered upgrades tailored to single-phase residences, large family homes, and commercial switchboards.",
    packages: [
      {
        name: "Standard Residential 12-Pole Safety Upgrade",
        tagline: "Essential Electrocution & Fire Protection",
        idealFor: "1-3 bedroom homes replacing outdated ceramic fuses",
        specs: [
          "High-impact fire-retardant surface or flush-mount enclosure",
          "Up to 8 x individual Hager / Schneider Type A RCBO safety switches",
          "Main switch isolation and consumer neutral link upgrades",
          "Verification of main earthing conductor and earth stake resistance",
          "Clear printed circuit identification labeling",
          "Complete RCD trip testing & official Certificate of Electrical Safety",
        ],
      },
      {
        name: "Solar & EV-Ready 24-Pole Comprehensive Upgrade",
        tagline: "The Future-Proofed Home Power Centre",
        idealFor:
          "Modern family homes with or planning solar, batteries, ducted AC, and EV charging",
        featured: true,
        specs: [
          "Spacious 24-pole enclosure with generous expansion room for future solar & batteries",
          "Individual RCBO safety switches for all power, lighting, and heavy appliance circuits",
          "Type 2 whole-home surge protection device (SPD) protecting against lightning spikes",
          "Dedicated sub-metering or solar inverter connection rail",
          "Safe removal and licensed containment of asbestos backing panel if present",
          "10-Year comprehensive switchboard workmanship warranty",
        ],
      },
      {
        name: "Commercial Three-Phase Switchboard Upgrade",
        tagline: "High-Capacity Industrial Reliability",
        idealFor: "Commercial buildings, retail shops, industrial workshops & warehouses",
        specs: [
          "Heavy-duty three-phase metal distribution board (IP65 rated options)",
          "Three-phase main isolation switch up to 100A - 200A capacity",
          "Individual 3-phase and single-phase RCBO protection across all machine circuits",
          "Commercial grade 40kA surge protection diversion system",
          "Full coordination with electrical supply authorities for metering compliance",
          "Comprehensive thermal imaging report & statutory safety signoff",
        ],
      },
    ],
    recentInstallations: [
      {
        title: "Ceramic Fuse to 24-Pole Hager RCBO Switchboard",
        location: "Caversham, Perth WA",
        state: "WA",
        capacity: "24-Pole Solar Ready",
        details:
          "Replaced hazardous 1970s ceramic fuse box with modern flame-retardant Hager RCBO switchboard, surge protector, and ready terminal for 10kW solar system.",
        image: "/assets/reviews/electrician-wiring-switchboard.jpg",
        tag: "Residential Upgrade WA",
      },
      {
        title: "3-Phase Commercial Switchboard & Surge Protection",
        location: "Ryde, Sydney NSW",
        state: "NSW",
        capacity: "36-Pole Three-Phase",
        details:
          "Complete commercial upgrade for an industrial retail showroom, installing heavy-duty surge arresters, dual EV charging breakers, and emergency stop circuits.",
        image: "/assets/banner/banner-enterprise-solar.jpg",
        tag: "Commercial Switchboard NSW",
      },
      {
        title: "Asbestos Removal & Switchboard Modernisation",
        location: "Chermside, Brisbane QLD",
        state: "QLD",
        capacity: "18-Pole Residential",
        details:
          "Safe licensed removal of deteriorated asbestos backing board, followed by installation of weather-tight IP65 external switchboard with individual RCBO protection.",
        image: "/assets/reviews/smiling-solar-electrician.jpg",
        tag: "Safety Modernisation QLD",
      },
    ],
  },
];
