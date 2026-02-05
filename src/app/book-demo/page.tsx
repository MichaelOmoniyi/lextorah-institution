import { Metadata } from "next";
import DefaultLayout from "@/components/layout/DefaultLayout";
import { BookDemoHero, BookDemoForm } from "@/components/sections";
import { bookDemoData } from "@/data/bookingData";

export const metadata: Metadata = {
  title: "Book a Demo | Lextorah Education",
  description:
    "Request a demo of Ms. Lexi, Lextorah's AI tutoring platform for learner support, personalised learning, and academic performance.",
};

export default function BookDemoPage() {
  return (
    <DefaultLayout>
      <BookDemoHero
        title={bookDemoData.hero.title}
        subtitle={bookDemoData.hero.subtitle}
        description={bookDemoData.hero.description}
      />
      <BookDemoForm
        sections={bookDemoData.form.sections}
        submitButton={bookDemoData.form.submitButton}
      />
    </DefaultLayout>
  );
}
