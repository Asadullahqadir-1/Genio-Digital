import { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  path: string;
}

export interface FeatureCardProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  bullets?: string[];
  className?: string;
}

export interface SectionProps {
  id?: string;
  className?: string;
}