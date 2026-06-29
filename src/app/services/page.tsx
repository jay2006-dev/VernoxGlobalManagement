import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Services | Vornex Global",
  description: "Explore our comprehensive suite of enterprise consulting services.",
};

const detailedServices = [
  {
    title: "Sales Solutions",
    desc: "End-to-end sales outsourcing and strategy. We build and manage high-performance sales teams dedicated to acquiring your ideal customers.",
    benefits: ["Increased Revenue", "Lower Acquisition Cost", "Predictable Pipeline"],
    img: "https://globalnaps.org/wp-content/uploads/2017/10/Finance-banking.jpg"
  },
  {
    title: "Business Consulting",
    desc: "Strategic guidance to overcome operational bottlenecks, optimize workflows, and scale your business efficiently.",
    benefits: ["Operational Efficiency", "Market Positioning", "Scalable Growth"],
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Leadership Development",
    desc: "We don't just build teams; we build leaders. Our training programs transform high-potential individuals into seasoned executives.",
    benefits: ["Strong Company Culture", "Lower Turnover", "Effective Management"],
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800"
  }
];

const faqs = [
  { q: "How do you measure success?", a: "We establish clear KPIs at the onset of every project, focusing on ROI, revenue growth, and market penetration." },
  { q: "Do you work with startups?", a: "While we primarily focus on enterprise and Fortune 500 companies, we do partner with well-funded startups ready to scale rapidly." },
  { q: "How long is a typical engagement?", a: "Our engagements typically start at 6 months to ensure we have enough time to implement strategies and measure meaningful results." },
  { q: "Can your services be customized for our specific industry?", a: "Absolutely. We tailor our consulting methodologies to fit the unique regulatory, operational, and competitive landscape of your specific sector." },
  { q: "Do you provide implementation support?", a: "Yes, we don't just hand over a strategy document. Our team works alongside yours to oversee the execution and ensure the strategies are implemented effectively." }
];

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-16 bg-background">
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden bg-muted/30">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center max-w-4xl">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">
            What We Do
          </span>
          <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 text-foreground tracking-tight">Our Services</h1>
          <p className="text-xl text-muted-foreground">
            A comprehensive suite of sales, marketing, and consulting solutions designed to elevate your business.
          </p>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-24 container mx-auto px-4 md:px-6 lg:px-8">
        <div className="space-y-24">
          {detailedServices.map((service, index) => (
            <div key={index} className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
              <div className="lg:w-1/2 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold font-heading">{service.title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{service.desc}</p>
                <ul className="space-y-3 pt-4">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:w-1/2 w-full">
                <div className="aspect-video rounded-3xl shadow-xl border border-border flex items-center justify-center overflow-hidden relative group">
                  <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/0 transition-colors z-10" />
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white text-black dark:bg-slate-950 dark:text-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <details key={index} className="bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/50 rounded-2xl p-6 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors group">
                <summary className="text-xl font-bold font-heading flex justify-between items-center text-black dark:text-white cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <ChevronDown className="w-5 h-5 text-black dark:text-white transition-transform group-open:rotate-180" />
                </summary>
                <p className="text-gray-700 dark:text-gray-300 mt-4 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background text-center px-4">
        <div className="max-w-4xl mx-auto bg-primary text-white rounded-[3rem] p-12 md:p-16 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/30 blur-[80px] rounded-full mix-blend-screen" />
          <div className="relative z-10">
            <h2 className="text-4xl font-bold font-heading mb-6">Ready to Transform?</h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">Schedule a consultation with our experts to discuss your specific needs.</p>
            <Link href="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-[#0B1F3A] font-bold h-14 px-8 rounded-full text-lg shadow-xl shadow-accent/20 hover:-translate-y-1 transition-transform">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
