import { DefaultLayout } from "@/components/layout";
import { ContactHero, RequestAccessForm } from "@/components/sections";
import { requestAccessData } from "@/data/accessData";

export default function RequestAccessPage() {
  return (
    <DefaultLayout>
      {/* Hero Section */}
      <ContactHero
        title={requestAccessData.hero.title}
        subtitle={requestAccessData.hero.subtitle}
      />

      {/* Request Access Form */}
      <RequestAccessForm
        sections={requestAccessData.form.sections}
        submitButton={requestAccessData.form.submitButton}
      />
    </DefaultLayout>
  );
}
