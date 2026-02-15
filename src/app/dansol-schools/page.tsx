import React from "react";
import {
  DansolNavbar,
  DansolHero,
  DansolForStudents,
  DansolForTeachers,
  DansolLeadership,
  DansolPlatformUsage,
  DansolIntegrity,
  DansolSupport,
  DansolFooter,
} from "@/components/dansol";

export const metadata = {
  title: "Lextorah | Dansol High School",
  description:
    "AI-powered personalized learning for students at Dansol High School. Get homework help, exam prep, and 24/7 learning support.",
};

const DansolSchoolsPage: React.FC = () => {
  return (
    <>
      <DansolNavbar />
      <main>
        <DansolHero />
        <DansolForStudents />
        <DansolForTeachers />
        <DansolLeadership />
        <DansolPlatformUsage />
        <DansolIntegrity />
        <DansolSupport />
      </main>
      <DansolFooter />
    </>
  );
};

export default DansolSchoolsPage;
