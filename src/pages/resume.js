import PageLayout from "@/components/PageLayout";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

const RESUME_URL =
  "https://drive.google.com/file/d/1OVrswJHsqFC_02D2gdEcuPfqEBbmFOj8/view?usp=drive_link";

export default function ResumePage() {
  return (
    <PageLayout
      title="Resume | Pratham Agrawal"
      description="View or download Pratham Agrawal's resume — ServiceNow & AI Engineer with 4+ years of full-stack and enterprise platform experience."
      canonical="/resume"
    >
      {/* <!-- VERIFY: add a downloadable PDF to public/ for better UX and SEO --> */}
      <div className="px-4 py-12 sm:py-16 sm:px-10 md:px-16 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <Fade cascade triggerOnce direction="down">
            <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 relative text-center after_style text-[var(--text-primary)]">
              Resume
            </h1>
          </Fade>

          {/* Download CTA */}
          <Fade triggerOnce>
            <div className="glass-card p-6 sm:p-8 mb-8 text-center">
              <p className="text-[var(--text-secondary)] mb-5 text-sm sm:text-base">
                Download my full resume or explore the summary below.
              </p>
              <Link
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--bg btn--theme text-sm sm:text-base"
              >
                📄 Download Resume (Google Drive)
              </Link>
            </div>
          </Fade>

          {/* Resume Summary */}
          <Fade triggerOnce>
            <div className="glass-card p-6 sm:p-8 mb-6">
              <h2 className="font-heading text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-[var(--text-primary)]">
                Summary
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed text-sm sm:text-base">
                ServiceNow & AI Engineer with 4+ years of experience in full-stack development,
                cloud technologies, and AI-driven automation. Currently delivering enterprise-grade
                ServiceNow solutions across GenAI, Agentic AI, Now Assist Skills, and AI Agent
                Studio at Infosys. Previously led full-stack development projects using Next.js,
                Node.js, Firebase, and GCP.
              </p>
            </div>
          </Fade>

          {/* Experience */}
          <Fade triggerOnce>
            <div className="glass-card p-6 sm:p-8 mb-6">
              <h2 className="font-heading text-lg sm:text-xl md:text-2xl font-semibold mb-5 text-[var(--text-primary)]">
                Experience
              </h2>

              <div className="mb-6 pb-6 border-b border-[var(--border-color)]">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="font-heading text-base sm:text-lg font-bold text-[var(--text-primary)]">
                    Associate Consultant
                  </h3>
                  <span className="text-[10px] sm:text-xs font-mono text-[var(--text-secondary)] whitespace-nowrap">
                    Nov 2024 — Present
                  </span>
                </div>
                <p className="text-sm text-[var(--accent-primary)] font-semibold mb-2">
                  Infosys
                </p>
                <ul className="text-[var(--text-secondary)] text-xs sm:text-sm space-y-1.5">
                  <li>• Enterprise-grade ServiceNow solutions: GenAI, Agentic AI, Now Assist, AI Agent Studio</li>
                  <li>• Platform development: Glide APIs, Flow Designer, UI Builder, Integration Hub</li>
                  <li>• Testing & quality: ATF test suites, REST/SOAP integrations, ITIL practices</li>
                </ul>
              </div>

              <div>
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="font-heading text-base sm:text-lg font-bold text-[var(--text-primary)]">
                    System Software Engineer
                  </h3>
                  <span className="text-[10px] sm:text-xs font-mono text-[var(--text-secondary)] whitespace-nowrap">
                    Jun 2022 — Nov 2024
                  </span>
                </div>
                <p className="text-sm text-[var(--accent-primary)] font-semibold mb-2">
                  Krishworks Technology and Research Labs Pvt. Ltd.
                </p>
                <ul className="text-[var(--text-secondary)] text-xs sm:text-sm space-y-1.5">
                  <li>• Led Hopa Menu restaurant platform (Israeli market): Next.js migration, 30% performance boost, 10% engagement increase</li>
                  <li>• Managed SCORM-compliant LMS platform: 6 user interfaces, Twilio messaging, custom media players, WiPay &amp; Razorpay</li>
                  <li>• Tech stack: Next.js, React.js, Node.js, Express, Firebase, SCORM, Twilio, WiPay, GCP, AWS</li>
                </ul>
              </div>
            </div>
          </Fade>

          {/* Key Skills */}
          <Fade triggerOnce>
            <div className="glass-card p-6 sm:p-8 mb-6">
              <h2 className="font-heading text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-[var(--text-primary)]">
                Key Skills
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-2">
                    ServiceNow & AI
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {["ServiceNow", "GenAI", "Agentic AI", "Now Assist", "AI Agent Studio", "Moveworks", "Glide APIs", "Flow Designer"].map(
                      (tag) => (
                        <span key={tag} className="tech-tag">{tag}</span>
                      )
                    )}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-2">
                    Full-Stack & Cloud
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {["Next.js", "React", "Node.js", "Firebase", "GCP", "AWS", "Docker", "PostgreSQL"].map(
                      (tag) => (
                        <span key={tag} className="tech-tag">{tag}</span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Fade>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 justify-center mt-8">
            <Link href={RESUME_URL} target="_blank" className="btn btn--med btn--theme text-sm">
              Download Full Resume
            </Link>
            <Link href="/experience" className="btn btn--med btn--theme-inv text-sm">
              Detailed Experience
            </Link>
            <Link href="/about" className="btn btn--med btn--theme-inv text-sm">
              About Me
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
