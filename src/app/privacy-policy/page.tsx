import { Metadata } from "next";
import { DefaultLayout } from "@/components/layout";
import { LegalHero, PrivacyContent } from "@/components/sections";
import { privacyPolicyData } from "@/data/privacyData";

export const metadata: Metadata = {
  title: "Privacy Policy | Lextorah Education",
  description:
    "Read Lextorah Education's Privacy Policy. Learn how we collect, use, store, disclose, and protect your personal information when you use our services.",
};

export default function PrivacyPolicyPage() {
  return (
    <DefaultLayout>
      {/* Hero Section */}
      <LegalHero
        title={privacyPolicyData.title}
        lastUpdated={privacyPolicyData.lastUpdated}
      />

      {/* Content */}
      <PrivacyContent sections={privacyPolicyData.sections} />
    </DefaultLayout>
  );
}
