import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./app/page"));
const NotFound = lazy(() => import("./app/not-found"));
const AboutPage = lazy(() => import("./app/about/page"));
const ParentsPage = lazy(() => import("./app/parents/page"));
const TeachersPage = lazy(() => import("./app/teachers/page"));
const LearnersPage = lazy(() => import("./app/learners/page"));
const ContactPage = lazy(() => import("./app/contact/page"));
const BookDemoPage = lazy(() => import("./app/book-demo/page"));
const RequestAccessPage = lazy(() => import("./app/request-access/page"));
const TermsOfUsePage = lazy(() => import("./app/terms-of-use/page"));
const PrivacyPolicyPage = lazy(() => import("./app/privacy-policy/page"));
const BasilSchoolsPage = lazy(() => import("./app/basil-schools/page"));
const ChrislandSchoolsPage = lazy(() => import("./app/chrisland-schools/page"));
const CoronaSchoolsPage = lazy(() => import("./app/corona-schools/page"));
const DansolSchoolsPage = lazy(() => import("./app/dansol-schools/page"));
const GrangeSchoolsPage = lazy(() => import("./app/grange-schools/page"));
const LagoonSchoolsPage = lazy(() => import("./app/lagoon-schools/page"));
const SupremeSchoolsPage = lazy(() => import("./app/supreme-schools/page"));
const UnilagSchoolsPage = lazy(() => import("./app/unilag-schools/page"));
const WhitesandsSchoolsPage = lazy(() => import("./app/whitesands-schools/page"));

export default function App() {
  return (
    <Suspense fallback={<div style={{ minHeight: "100vh" }} />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/parents" element={<ParentsPage />} />
        <Route path="/teachers" element={<TeachersPage />} />
        <Route path="/learners" element={<LearnersPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/book-demo" element={<BookDemoPage />} />
        <Route path="/request-access" element={<RequestAccessPage />} />
        <Route path="/terms-of-use" element={<TermsOfUsePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/basil-schools" element={<BasilSchoolsPage />} />
        <Route path="/chrisland-schools" element={<ChrislandSchoolsPage />} />
        <Route path="/corona-schools" element={<CoronaSchoolsPage />} />
        <Route path="/dansol-schools" element={<DansolSchoolsPage />} />
        <Route path="/grange-schools" element={<GrangeSchoolsPage />} />
        <Route path="/lagoon-schools" element={<LagoonSchoolsPage />} />
        <Route path="/supreme-schools" element={<SupremeSchoolsPage />} />
        <Route path="/unilag-schools" element={<UnilagSchoolsPage />} />
        <Route path="/whitesands-schools" element={<WhitesandsSchoolsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
