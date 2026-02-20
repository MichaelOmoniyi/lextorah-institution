import { Link } from "react-router-dom";
import { DefaultLayout } from "@/components/layout";

const pageLinks = [
  { label: "For Parents", href: "/parents", description: "Supporting your child's learning journey" },
  { label: "For Teachers", href: "/teachers", description: "Empower your teaching with AI tools" },
  { label: "For Learners", href: "/learners", description: "Personalized learning support" },
  { label: "About Us", href: "/about", description: "Learn about Lextorah's mission" },
  { label: "Contact Us", href: "/contact", description: "Get in touch with our team" },
  { label: "Book a Demo", href: "/book-demo", description: "See Lextorah in action" },
  { label: "Request Access", href: "/request-access", description: "Join the Lextorah community" },
];

const legalLinks = [
  { label: "Terms of Use", href: "/terms-of-use" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

export default function Home() {
  return (
    <DefaultLayout>
      <section className="bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] py-16 px-8 md:px-6 text-center text-white min-h-[60vh] flex items-center justify-center">
        <div className="max-w-[800px] mx-auto">
          <div className="inline-block py-1 px-4 bg-white/15 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
            AI-Powered Learning Support
          </div>
          <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-extrabold mb-6 leading-[1.1]">
            Welcome to <span className="bg-gradient-to-br from-[#CCFBF1] to-[#A7F3D0] bg-clip-text text-transparent">Lextorah</span>
          </h1>
          <p className="text-[clamp(1rem,2.5vw,1.25rem)] leading-relaxed text-white/90 max-w-[600px] mx-auto mb-8">
            Empowering students, teachers, and parents with Ms. Lexi® — your intelligent AI tutor 
            for personalized, responsible, and effective learning support.
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/book-demo" className="inline-flex items-center justify-center py-4 px-8 bg-white text-[var(--primary)] text-base font-semibold rounded-lg no-underline transition-all duration-200 shadow-md hover:-translate-y-0.5 hover:shadow-lg hover:text-[var(--primary-dark)]">
              Book a Demo
            </Link>
            <Link to="/about" className="inline-flex items-center justify-center py-4 px-8 bg-transparent text-white text-base font-semibold rounded-lg no-underline border-2 border-white/50 transition-all duration-200 hover:bg-white/10 hover:border-white hover:text-white">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-8 md:px-6 bg-[var(--background-light)]">
        <div className="max-w-[1100px] mx-auto text-center">
          <h2 className="text-[clamp(1.75rem,4vw,2.25rem)] font-bold text-[var(--text-primary)] mb-2">Explore Our Platform</h2>
          <p className="text-base text-[var(--text-secondary)] mb-12">
            Discover how Lextorah can support your educational journey
          </p>
          
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 mb-12 max-md:grid-cols-1">
            {pageLinks.map((link, index) => (
              <Link key={index} to={link.href} className="group bg-white rounded-xl p-8 text-left no-underline border border-[var(--border-color)] transition-all duration-200 relative overflow-hidden hover:border-[var(--primary)] hover:shadow-lg hover:-translate-y-1 max-md:p-6">
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">{link.label}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-normal mb-2">{link.description}</p>
                <span className="text-xl text-[var(--primary)] transition-all duration-200 group-hover:translate-x-1">→</span>
              </Link>
            ))}
          </div>

          <div className="flex justify-center gap-6 pt-8 border-t border-[var(--border-color)] max-md:flex-col max-md:gap-2">
            {legalLinks.map((link, index) => (
              <Link key={index} to={link.href} className="text-sm text-[var(--text-muted)] no-underline transition-colors duration-200 hover:text-[var(--primary)]">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
