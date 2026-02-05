import { Metadata } from "next";
import { DefaultLayout } from "@/components/layout";
import {
  ContactHero,
  ContactCards,
  ContactForm,
  StayConnected,
  BrandBanner,
} from "@/components/sections";
import {
  contactHeroContent,
  contactCards,
  contactFormData,
  stayConnectedData,
  brandBannerData,
} from "@/data/contact";

export const metadata: Metadata = {
  title: "Contact Us | Lextorah Education - Get in Touch",
  description:
    "Get in touch with Lextorah Education. We're here to support your learning journey and answer any questions about our programmes, pathways, and partnerships.",
};

export default function ContactPage() {
  return (
    <DefaultLayout>
      {/* Hero Section */}
      <ContactHero
        title={contactHeroContent.title}
        subtitle={contactHeroContent.subtitle}
      />

      {/* Contact Cards */}
      <ContactCards cards={contactCards} />

      {/* Contact Form */}
      <ContactForm
        title={contactFormData.title}
        subtitle={contactFormData.subtitle}
        fields={contactFormData.fields}
        submitButton={contactFormData.submitButton}
      />

      {/* Stay Connected */}
      <StayConnected
        title={stayConnectedData.title}
        subtitle={stayConnectedData.subtitle}
        socialLinks={stayConnectedData.socialLinks}
      />

      {/* Brand Banner */}
      <BrandBanner
        title={brandBannerData.title}
        tagline={brandBannerData.tagline}
      />
    </DefaultLayout>
  );
}
