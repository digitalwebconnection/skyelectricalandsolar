import type { LucideIcon } from "lucide-react";

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

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  content: {
    introduction: string;
    sections: {
      heading: string;
      paragraphs: string[];
      takeaway?: string;
    }[];
    conclusion: string;
  };
}

