"use client";

import { StickyGather } from "@/components/sticky-gather";
import {
  Shield,
  Lock,
  Eye,
  Key,
  Server,
  FileCheck,
  AlertTriangle,
  Fingerprint,
  Globe,
} from "lucide-react";

const items = [
  { icon: Shield, label: "SOC 2 aligned", description: "Governance-ready practices. No certification claimed.", color: "#2dd4bf" },
  { icon: Lock, label: "AES-256", description: "Encryption at rest and in transit for all data.", color: "#3b82f6" },
  { icon: Eye, label: "Audit Trail", description: "Append-only audit log of every read, write, and approval.", color: "#8b5cf6" },
  { icon: Key, label: "Access Control", description: "Role-based permissions with department isolation.", color: "#fbbf24" },
  { icon: Server, label: "Data Residency", description: "Multi-region deployment is not available yet.", color: "#ef4444" },
  { icon: FileCheck, label: "Compliance Export", description: "Audit trail export on demand for review.", color: "#f97316" },
  { icon: AlertTriangle, label: "Anomaly Detection", description: "Unusual access patterns flagged in real-time.", color: "#ec4899" },
  { icon: Fingerprint, label: "MFA Enforcement", description: "Multi-factor authentication on all admin actions.", color: "#14b8a6" },
  { icon: Globe, label: "Edge Security", description: "DDoS protection and rate limiting at the edge.", color: "#06b6d4" },
];

export function SecurityGather() {
  return (
    <StickyGather
      tag="How security is built"
      heading={<>Nine layers of <span className="text-primary">trust.</span></>}
      subheading="The security controls come together in one set of rules you can review."
      centerLabel="TruthBoundary"
      centerDescription="Security core"
      items={items}
    />
  );
}
