import PageLayout from "@/components/PageLayout";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

const experiences = [
  {
    role: "Associate Consultant",
    company: "Infosys",
    location: "Mumbai", // <!-- VERIFY: Infosys location — codebase says both Mumbai and Bangalore -->
    period: "Nov 2024 — Present",
    isCurrent: true,
    description: [
      "Building enterprise-grade ServiceNow solutions using GenAI, Agentic AI, Now Assist Skills, AI Agent Studio, and Moveworks. Collaborate closely with stakeholders to design and implement high-impact, AI-powered platform capabilities aligned with business goals.",
      // <!-- VERIFY: confirm team leadership of 4-member engineering team -->
      "Hands-on with Glide APIs, Flow Designer, UI Builder, Workspace, business rules, client scripts, UI policies, Playbooks, Service Portal, ATF test suites, REST/SOAP integrations, and Integration Hub — all aligned with ITIL best practices.",
    ],
    tags: [
      "ServiceNow", "GenAI", "Agentic AI", "Now Assist Skills",
      "AI Agent Studio", "Moveworks", "Glide APIs", "Flow Designer",
      "UI Builder", "Workspace", "Integration Hub", "ITIL",
    ],
    links: [
      { href: "/servicenow", label: "ServiceNow expertise" },
      { href: "/ai", label: "AI engineering" },
    ],
  },
  {
    role: "System Software Engineer",
    company: "Krishworks Technology and Research Labs Pvt. Ltd.",
    location: null,
    period: "Jun 2022 — Nov 2024",
    isCurrent: false,
    description: [
      "Led the development of Hopa Menu, a production-grade SaaS and NFC-based restaurant management and food ordering platform for the Israeli market using Next.js, Node.js, Firebase, and GCP, improving website performance by 30% and customer engagement by 10%. Successfully migrated the application from React.js to Next.js.",
      "Managed end-to-end development of an advanced SCORM-compliant LMS platform delivering personal development and mental health education. Engineered 6 specialized user interfaces (Students, Teachers, Parents, School Admin, Content Uploader, Super Admin), integrated Twilio Conversations for 1-on-1 and group chat, built custom audio/video players and PDF viewer, and integrated WiPay and Razorpay payment services.",
    ],
    tags: [
      "Next.js", "React.js", "Node.js", "Express.js", "Firebase",
      "SCORM", "Twilio", "WiPay", "Razorpay", "Redux", "Material UI", "GCP", "AWS", "Python",
    ],
    links: [
      { href: "/projects/restaurant-discovery-platform", label: "Hopa Menu case study" },
      { href: "/projects/scorm-lms-platform", label: "SCORM LMS case study" },
    ],
  },
];

export default function ExperiencePage() {
  return (
    <PageLayout
      title="Experience | Pratham Agrawal"
      description="Pratham Agrawal's professional experience — Associate Consultant at Infosys delivering ServiceNow AI solutions, and full-stack engineering at Krishworks."
      canonical="/experience"
    >
      <div className="px-4 py-12 sm:py-16 sm:px-10 md:px-16 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <Fade cascade triggerOnce direction="down">
            <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 relative text-center after_style text-[var(--text-primary)]">
              Professional Experience
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-[var(--text-secondary)] text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              From full-stack engineering to ServiceNow AI delivery — my professional
              journey across platforms, cloud, and enterprise AI.
            </p>
          </Fade>

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <Fade key={exp.role + exp.company} triggerOnce delay={idx * 100}>
                <div className="glass-card p-6 sm:p-8">
                  <div className="flex items-start sm:items-center justify-between gap-2 mb-3">
                    <h2 className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-[var(--text-primary)]">
                      {exp.role}
                    </h2>
                    {exp.isCurrent && (
                      <span className="px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-semibold rounded-full bg-[var(--badge-emerald-bg)] text-[var(--badge-emerald-text)] border border-[var(--badge-emerald-border)] whitespace-nowrap flex-shrink-0">
                        Current
                      </span>
                    )}
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold text-[var(--accent-primary)] mb-1">
                    {exp.company}{exp.location ? `, ${exp.location}` : ""}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-[var(--text-secondary)] mb-4 font-mono">
                    {exp.period}
                  </p>

                  {exp.description.map((para, pIdx) => (
                    <p
                      key={pIdx}
                      className="text-xs sm:text-sm md:text-base text-[var(--text-secondary)] mb-3 leading-relaxed"
                    >
                      {para}
                    </p>
                  ))}

                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-4">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="tech-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {exp.links && exp.links.length > 0 && (
                    <div className="flex flex-wrap gap-3 mt-5">
                      {exp.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="text-[var(--accent-primary)] text-xs sm:text-sm font-semibold hover:underline"
                        >
                          {link.label} →
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </Fade>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 justify-center mt-10">
            <Link href="/about" className="btn btn--med btn--theme text-sm">
              About Me
            </Link>
            <Link href="/projects" className="btn btn--med btn--theme-inv text-sm">
              Browse Projects
            </Link>
            <Link href="/resume" className="btn btn--med btn--theme-inv text-sm">
              View Resume
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
