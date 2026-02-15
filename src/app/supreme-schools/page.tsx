import {
  SupremeNavbar,
  SupremeHero,
  SupremeForStudents,
  SupremeForTeachers,
  SupremeLeadership,
  SupremePlatformUsage,
  SupremeIntegrity,
  SupremeSupport,
  SupremeFooter,
} from "@/components/supreme";

export const metadata = {
  title: "Supreme Education Foundation School | AI Learning Hub - Lextorah",
  description:
    "The official academic support system for Supreme Education Foundation School. Lextorah AI assists teachers and improves student outcomes.",
};

export default function SupremeSchoolsPage() {
  return (
    <main>
      <SupremeNavbar />
      <SupremeHero />
      <SupremeForStudents />
      <SupremeForTeachers />
      <SupremeLeadership />
      <SupremePlatformUsage />
      <SupremeIntegrity />
      <SupremeSupport />
      <SupremeFooter />
    </main>
  );
}
