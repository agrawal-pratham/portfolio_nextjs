import PageLayout from "@/components/PageLayout";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

const sections = [
  {
    title: "Generative AI & LLM Applications",
    content:
      "I design and implement generative AI solutions within enterprise environments, leveraging large language models to automate complex workflows, generate intelligent responses, and augment human decision-making. My approach emphasizes practical, production-ready AI that integrates seamlessly with existing enterprise platforms — particularly ServiceNow — rather than standalone proof-of-concept demonstrations.",
    tags: ["GenAI", "LLM", "Enterprise AI"],
  },
  {
    title: "Agentic AI & AI Agents",
    content:
      "Building autonomous and semi-autonomous AI agents that can reason, plan, and execute multi-step tasks within enterprise contexts. My work with Agentic AI focuses on creating agent architectures that can break down complex problems, interact with enterprise systems through APIs, and deliver outcomes with minimal human intervention — while maintaining appropriate guardrails and oversight mechanisms.",
    tags: ["Agentic AI", "AI Agents", "Autonomous Systems"],
  },
  {
    title: "ServiceNow AI — Now Assist & AI Agent Studio",
    content:
      "Where my ServiceNow platform expertise meets AI engineering. I build and deploy intelligent capabilities using ServiceNow's native AI tooling — Now Assist Skills for conversational AI, AI Agent Studio for autonomous agent creation, and platform-integrated GenAI for intelligent automation. This intersection of deep platform knowledge and AI engineering is what sets my work apart.",
    tags: ["Now Assist", "AI Agent Studio", "ServiceNow AI"],
    crossLink: { href: "/servicenow", label: "See full ServiceNow expertise →" },
  },
  {
    title: "AI-Powered Workflow Automation",
    content:
      "Architecting intelligent workflows that combine traditional process automation with AI-driven decision-making. This includes building flows that use natural language processing to classify and route requests, machine learning models to predict outcomes, and generative AI to draft responses — all within enterprise-grade platforms that demand reliability, auditability, and scalability.",
    tags: ["Workflow Automation", "Intelligent Automation", "NLP"],
  },
  {
    title: "Enterprise AI Integration",
    content:
      "Integrating AI capabilities across enterprise technology landscapes — connecting AI models with CRM, ITSM, and ERP systems through REST APIs, webhooks, and event-driven architectures. My integration work ensures AI doesn't exist in silos but instead amplifies the value of existing enterprise investments, particularly within ServiceNow ecosystems.",
    tags: ["Enterprise Integration", "REST APIs", "Event-Driven"],
  },
];

export default function AIPage() {
  return (
    <PageLayout
      title="Pratham Agrawal | Generative AI & Agentic AI Engineer"
      description="Pratham Agrawal builds enterprise AI solutions — Generative AI, Agentic AI, AI Agents, Now Assist, AI Agent Studio, and LLM-powered workflows."
      canonical="/ai"
    >
      <div className="px-4 py-12 sm:py-16 sm:px-10 md:px-16 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <Fade cascade triggerOnce direction="down">
            <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 relative text-center after_style text-[var(--text-primary)]">
              AI Engineer — Generative AI & Agentic AI
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-[var(--text-secondary)] text-center max-w-2xl mx-auto mb-12 sm:mb-16 mt-8">
              Specializing in enterprise AI at the intersection of ServiceNow, Generative AI,
              and Agentic AI — building intelligent systems that transform how organizations operate.
            </p>
          </Fade>

          {/* Differentiator Card */}
          <Fade triggerOnce>
            <div className="glass-card p-6 sm:p-8 mb-8 border-l-4 border-l-[var(--accent-primary)]">
              <h2 className="font-heading text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-[var(--text-primary)]">
                The Differentiator: ServiceNow × Enterprise AI
              </h2>
              <p className="text-[var(--text-secondary)] mb-4 leading-relaxed text-sm sm:text-base">
                What distinguishes my AI engineering work is the deep integration with
                enterprise platforms — specifically ServiceNow. Rather than building AI in
                isolation, I embed intelligent capabilities directly into the platforms where
                enterprise work actually happens. This means AI that&apos;s not just technically
                impressive, but operationally valuable from day one.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed text-sm sm:text-base">
                The combination of{" "}
                <Link href="/servicenow" className="text-[var(--accent-primary)] hover:underline">
                  ServiceNow platform expertise
                </Link>{" "}
                + Generative AI + Agentic AI creates a unique capability to deliver end-to-end
                intelligent automation within enterprise environments — from conversational AI
                for employee support to autonomous agents that resolve issues independently.
              </p>
            </div>
          </Fade>

          {/* AI Expertise Sections */}
          {sections.map((section, idx) => (
            <Fade key={section.title} triggerOnce delay={idx * 50}>
              <div className="glass-card p-6 sm:p-8 mb-6">
                <h2 className="font-heading text-base sm:text-lg md:text-xl font-semibold mb-3 text-[var(--text-primary)]">
                  {section.title}
                </h2>
                <p className="text-[var(--text-secondary)] mb-4 leading-relaxed text-sm sm:text-base">
                  {section.content}
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {section.tags.map((tag) => (
                    <span key={tag} className="tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                {section.crossLink && (
                  <Link
                    href={section.crossLink.href}
                    className="inline-block mt-4 text-[var(--accent-primary)] text-sm font-semibold hover:underline"
                  >
                    {section.crossLink.label}
                  </Link>
                )}
              </div>
            </Fade>
          ))}

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 justify-center mt-8">
            <Link href="/servicenow" className="btn btn--med btn--theme text-sm">
              ServiceNow Expertise →
            </Link>
            <Link href="/experience" className="btn btn--med btn--theme-inv text-sm">
              View Experience
            </Link>
            <Link href="/projects" className="btn btn--med btn--theme-inv text-sm">
              Browse Projects
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
