import { Hero } from "@/components/home/Hero";
import { TrustedCompanies } from "@/components/home/TrustedCompanies";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { IndustriesPreview } from "@/components/home/IndustriesPreview";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { Statistics } from "@/components/home/Statistics";
import { Testimonials } from "@/components/home/Testimonials";
import { CTA } from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedCompanies />
      <AboutPreview />
      <ServicesPreview />
      <WhyChooseUs />
      <IndustriesPreview />
      <ProcessTimeline />
      <Statistics />
      <Testimonials />
      <CTA />
    </>
  );
}
