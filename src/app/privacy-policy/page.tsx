import { DefaultLayout } from "@/components/layout";
import { LegalHero, PrivacyContent } from "@/components/sections";
import { privacyPolicyData } from "@/data/privacyData";

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
