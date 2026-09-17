import PageLayout from "@/components/PageLayout";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

const sections = [
  {
    title: "AI Agent Studio & Now Assist",
    content:
      "At Infosys, I architect and deploy AI-powered agents using ServiceNow's AI Agent Studio and Now Assist Skills. This involves designing conversational AI flows that automate complex enterprise processes — from incident resolution to service request fulfillment. The work directly leverages generative AI capabilities within the ServiceNow platform, bridging the gap between traditional ITSM and modern AI-driven automation.",
    tags: ["AI Agent Studio", "Now Assist", "GenAI", "Agentic AI"],
    crossLink: { href: "/ai", label: "See full AI engineering work →" },
  },
  {
    title: "Glide APIs & Platform Scripting",
    content:
      "Deep expertise in ServiceNow's Glide API framework for server-side scripting, enabling custom business logic, data transformations, and complex integrations. My scripting work spans business rules, client scripts, UI policies, and script includes — all following best practices for performance, maintainability, and security within the ServiceNow platform.",
    tags: ["Glide APIs", "Business Rules", "Client Scripts", "UI Policies"],
  },
  {
    title: "Flow Designer & Workflow Automation",
    content:
      "I design and implement automated workflows using Flow Designer, creating no-code and low-code automation solutions that streamline enterprise operations. This includes building complex multi-step flows with conditional branching, parallel processing, and integration with external systems — reducing manual effort and improving process consistency across the organization.",
    tags: ["Flow Designer", "Workflow Automation", "IntegrationHub"],
  },
  {
    title: "Integration Hub & Enterprise Integrations",
    content:
      "Building enterprise-grade integrations using Integration Hub, REST/SOAP APIs, and custom integration patterns. My integration work connects ServiceNow with external enterprise systems, enabling bidirectional data flow, event-driven automation, and real-time synchronization across the technology landscape.",
    tags: ["Integration Hub", "REST", "SOAP", "Enterprise Integration"],
  },
  {
    title: "UI Builder & Workspace",
    content:
      "Developing modern, responsive user interfaces using UI Builder and configuring Workspace experiences tailored to specific user roles and workflows. This includes building custom components, designing intuitive navigation patterns, and optimizing the user experience within the ServiceNow platform for both technical and non-technical users.",
    tags: ["UI Builder", "Workspace", "Service Portal", "Playbooks"],
  },
  {
    title: "Testing & Quality Assurance (ATF)",
    content:
      "Implementing comprehensive test automation using ServiceNow's Automated Test Framework (ATF). I build and maintain test suites that validate platform configurations, integrations, and custom applications — ensuring reliability across deployments and reducing regression risk in complex enterprise environments.",
    tags: ["ATF", "Test Automation", "Quality Assurance"],
  },
  {
    title: "Moveworks Integration",
    content:
      "Working with Moveworks to deliver AI-powered conversational IT support that integrates with the ServiceNow platform. This involves configuring and optimizing AI-driven resolution paths that leverage natural language understanding to automate employee support requests and improve mean time to resolution.",
    tags: ["Moveworks", "AI Support", "Conversational AI"],
  },
];

export default function ServiceNowPage() {
  return (
    <PageLayout
      title="Pratham Agrawal | ServiceNow Developer & AI Engineer"
      description="Pratham Agrawal's ServiceNow expertise — AI Agent Studio, Now Assist, Glide APIs, Flow Designer, Integration Hub, and enterprise workflow automation."
      canonical="/servicenow"
    >
      <div className="px-4 py-12 sm:py-16 sm:px-10 md:px-16 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <Fade cascade triggerOnce direction="down">
            <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 relative text-center after_style text-[var(--text-primary)]">
              ServiceNow Developer & AI Engineer
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-[var(--text-secondary)] text-center max-w-2xl mx-auto mb-12 sm:mb-16 mt-8">
              Building enterprise-grade ServiceNow solutions using GenAI, Agentic AI,
              Now Assist Skills, AI Agent Studio, and Moveworks — all aligned with ITIL
              best practices.
            </p>
          </Fade>

          {/* Overview Card */}
          <Fade triggerOnce>
            <div className="glass-card p-6 sm:p-8 mb-8">
              <h2 className="font-heading text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-[var(--text-primary)]">
                Enterprise ServiceNow Solutions
              </h2>
              <p className="text-[var(--text-secondary)] mb-4 leading-relaxed text-sm sm:text-base">
                As an Associate Consultant at Infosys, I deliver comprehensive ServiceNow
                platform solutions that span the full lifecycle — from requirements gathering
                and architecture to implementation, testing, and deployment. My work focuses
                on building intelligent, scalable platform capabilities that align with
                business goals and ITIL best practices.
              </p>
              {/* <!-- VERIFY: confirm team leadership of 4-member engineering team --> */}
              <p className="text-[var(--text-secondary)] leading-relaxed text-sm sm:text-base">
                I collaborate closely with stakeholders to design and implement high-impact,
                AI-powered platform capabilities. My expertise spans the full spectrum of
                ServiceNow development — from core platform configuration and scripting to
                cutting-edge AI integrations using GenAI, Agentic AI, and conversational AI.
              </p>
            </div>
          </Fade>

          {/* Expertise Sections */}
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
            <Link href="/ai" className="btn btn--med btn--theme text-sm">
              AI Engineering →
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
