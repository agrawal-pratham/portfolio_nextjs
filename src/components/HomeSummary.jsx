import Link from "next/link";
import { Fade } from "react-awesome-reveal";

const sections = [
  {
    title: "About Me",
    description:
      "Associate Consultant at Infosys with 4+ years of experience across full-stack development, cloud technologies, and AI-driven automation.",
    href: "/about",
    cta: "Learn more about me",
  },
  {
    title: "ServiceNow Expertise",
    description:
      "Building enterprise-grade ServiceNow solutions — AI Agent Studio, Now Assist, Glide APIs, Flow Designer, Integration Hub, and more.",
    href: "/servicenow",
    cta: "Explore ServiceNow work",
  },
  {
    title: "AI Engineering",
    description:
      "Specializing in GenAI, Agentic AI, and AI-powered workflows — where ServiceNow meets enterprise intelligence.",
    href: "/ai",
    cta: "Explore AI expertise",
  },
  {
    title: "Professional Experience",
    description:
      "From full-stack engineering at Krishworks to ServiceNow AI delivery at Infosys — a journey across platforms, cloud, and enterprise AI.",
    href: "/experience",
    cta: "View experience",
  },
  {
    title: "Projects",
    description:
      "Production-grade platforms, portfolio sites, and full-stack applications — explore featured work and case studies.",
    href: "/projects",
    cta: "Browse projects",
  },
];

export default function HomeSummary() {
  return (
    <section className="px-4 py-16 sm:py-20 sm:px-10 md:px-16 lg:px-20 bg-[var(--bg-main)]">
      <div className="max-w-6xl mx-auto">
        <Fade cascade triggerOnce direction="down">
          <h2 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-8 relative text-center after_style text-[var(--text-primary)]">
            Explore
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-12 sm:mb-16 text-center text-[var(--text-secondary)] max-w-2xl mx-auto">
            Discover my expertise, experience, and the projects I&apos;ve built across
            ServiceNow, AI, and full-stack development.
          </p>
        </Fade>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <Fade cascade triggerOnce direction="up" damping={0.08}>
            {sections.map((section) => (
              <Link
                key={section.title}
                href={section.href}
                className="glass-card p-5 sm:p-6 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <h3 className="font-heading text-base sm:text-lg font-bold mb-2 text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                    {section.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] text-xs sm:text-sm leading-relaxed mb-4">
                    {section.description}
                  </p>
                </div>
                <span className="text-[var(--accent-primary)] text-xs sm:text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  {section.cta}
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </Link>
            ))}
          </Fade>
        </div>
      </div>
    </section>
  );
}
