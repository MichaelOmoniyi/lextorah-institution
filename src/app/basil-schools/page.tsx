import React from "react";
import {
  BasilNavbar,
  BasilHero,
  BasilForStudents,
  BasilForTeachers,
  BasilLeadership,
  BasilPlatformUsage,
  BasilIntegrity,
  BasilSupport,
  BasilFooter,
} from "@/components/basil";

export const metadata = {
  title: "Lextorah | Basil Secondary School",
  description:
    "AI-powered personalized learning for students at Basil Secondary School. Get homework help, exam prep, and 24/7 learning support.",
};

const BasilSchoolsPage: React.FC = () => {
  return (
    <>
      <BasilNavbar />
      <main>
        <BasilHero />
        <BasilForStudents />
        <BasilForTeachers />
        <BasilLeadership />
        <BasilPlatformUsage />
        <BasilIntegrity />
        <BasilSupport />
      </main>
      <BasilFooter />
    </>
  );
};

export default BasilSchoolsPage;
