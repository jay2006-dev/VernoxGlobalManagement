import { Metadata } from "next";
import { ContactClient } from "@/components/contact/ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | Vornex Global",
  description: "Get in touch with our team.",
};

export default function ContactPage() {
  return <ContactClient />;
}
