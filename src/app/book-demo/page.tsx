import DefaultLayout from "@/components/layout/DefaultLayout";
import { BookDemoHero, BookDemoForm } from "@/components/sections";
import { bookDemoData } from "@/data/bookingData";

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
