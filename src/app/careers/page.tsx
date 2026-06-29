import { Metadata } from "next";
import { CareersClient } from "@/components/careers/CareersClient";

export const metadata: Metadata = {
  title: "Careers | Vornex Global",
  description: "Join our team and build a rewarding career in consulting and leadership.",
};

export default function CareersPage() {
  return <CareersClient />;
}
