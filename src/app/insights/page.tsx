import { Metadata } from "next";
import { InsightsClient } from "@/components/insights/InsightsClient";

export const metadata: Metadata = {
  title: "Insights | Vornex Global",
  description: "Latest news, articles, and insights from our experts.",
};

export default function InsightsPage() {
  return <InsightsClient />;
}
