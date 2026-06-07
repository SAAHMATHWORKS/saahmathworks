import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact — SAAH MATHWORKS",
  description: "Démarrez votre projet AI avec SAAH MATHWORKS. Réponse garantie sous 24h.",
};

export default function ContactPage() {
  return <ContactForm />;
}
