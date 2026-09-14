import PageLayout from "@/components/PageLayout";
import Link from "next/link";
import { Fade, Slide } from "react-awesome-reveal";

const skills = [
  { name: "ServiceNow", icon: "https://upload.wikimedia.org/wikipedia/commons/5/57/ServiceNow_logo.svg" },
  { name: "GenAI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "Agentic AI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
  { name: "Now Assist Skills", icon: "https://upload.wikimedia.org/wikipedia/commons/5/57/ServiceNow_logo.svg" },
  { name: "AI Agent Studio", icon: "https://upload.wikimedia.org/wikipedia/commons/5/57/ServiceNow_logo.svg" },
  { name: "Moveworks", icon: "https://upload.wikimedia.org/wikipedia/commons/5/57/ServiceNow_logo.svg" },
  { name: "Glide APIs", icon: "https://upload.wikimedia.org/wikipedia/commons/5/57/ServiceNow_logo.svg" },
  { name: "Flow Designer", icon: "https://upload.wikimedia.org/wikipedia/commons/5/57/ServiceNow_logo.svg" },
  { name: "UI Builder", icon: "https://upload.wikimedia.org/wikipedia/commons/5/57/ServiceNow_logo.svg" },
  { name: "ITIL", icon: "https://upload.wikimedia.org/wikipedia/commons/5/57/ServiceNow_logo.svg" },
  { name: "JavaScript", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "React", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg" },
  { name: "Node.js", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" },
  { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg" },
  { name: "Firebase", icon: "https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png" },
  { name: "GCP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" },
  { name: "AWS", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: "HTML", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" },
  { name: "CSS", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" },
  { name: "Git", icon: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" },
  { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
];

export default function AboutPage() {
  return (
    <PageLayout
      title="About Pratham Agrawal | ServiceNow & AI Engineer"
      description="Learn about Pratham Agrawal — ServiceNow & AI Engineer at Infosys, specializing in GenAI, Agentic AI, and full-stack development."
      canonical="/about"
      jsonLdType="ProfilePage"
    >
      <div className="px-4 py-12 sm:py-16 sm:px-10 md:px-16 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <Fade cascade triggerOnce direction="down">
            <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 relative text-center after_style text-[var(--text-primary)]">
              About Pratham Agrawal
            </h1>
          </Fade>

          {/* Introduction */}
          <Slide direction="left" triggerOnce>
            <div className="glass-card p-6 sm:p-8 mb-8">
              <h2 className="font-heading text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-[var(--text-primary)]">
                Who I Am
              </h2>
              <p className="text-[var(--text-secondary)] mb-4 leading-relaxed text-sm sm:text-base">
                I&apos;m an{" "}
                <strong className="text-[var(--accent-primary)]">
                  Associate Consultant at Infosys
                </strong>{" "}
                {/* <!-- VERIFY: Infosys location — codebase says both Mumbai (Hero/About) and Bangalore (WorkExperience) --> */}
                with 4+ years of experience spanning full-stack development, cloud
                technologies, and AI-driven automation. My work sits at the intersection of{" "}
                <Link href="/servicenow" className="text-[var(--accent-primary)] hover:underline">
                  ServiceNow platform engineering
                </Link>{" "}
                and{" "}
                <Link href="/ai" className="text-[var(--accent-primary)] hover:underline">
                  enterprise AI
                </Link>
                , where I design and deliver intelligent workflows that create real business value.
              </p>
              <p className="text-[var(--text-secondary)] mb-4 leading-relaxed text-sm sm:text-base">
                Currently, I deliver enterprise-grade ServiceNow solutions across GenAI,
                Agentic AI, Now Assist Skills, and AI Agent Studio. I collaborate closely
                with stakeholders to design and implement high-impact, AI-powered platform
                capabilities aligned with business goals.
              </p>
            </div>
          </Slide>

          {/* Current Role */}
          <Fade triggerOnce>
            <div className="glass-card p-6 sm:p-8 mb-8">
              <h2 className="font-heading text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-[var(--text-primary)]">
                Current Role
              </h2>
              <p className="text-[var(--text-secondary)] mb-4 leading-relaxed text-sm sm:text-base">
                At Infosys, I focus on building enterprise-grade ServiceNow solutions that leverage
                the latest in generative AI and agentic architectures. My hands-on work spans Glide
                APIs, Flow Designer, UI Builder, Workspace, business rules, client scripts, UI
                policies, Playbooks, Service Portal, ATF test suites, REST/SOAP integrations,
                Integration Hub, and Moveworks — all aligned with ITIL best practices.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed text-sm sm:text-base">
                I work across the full spectrum of ServiceNow AI capabilities including AI Agent
                Studio, Now Assist Skills, and enterprise AI integrations, architecting scalable
                intelligent workflows that drive measurable outcomes.
              </p>
            </div>
          </Fade>

          {/* Career Background */}
          <Fade triggerOnce>
            <div className="glass-card p-6 sm:p-8 mb-8">
              <h2 className="font-heading text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-[var(--text-primary)]">
                Career Background
              </h2>
              <p className="text-[var(--text-secondary)] mb-4 leading-relaxed text-sm sm:text-base">
                Earlier in my career at Krishworks Technology and Research Labs, I led the development
                of <strong className="text-[var(--accent-primary)]">Hopa Menu</strong>, a production-grade{" "}
                <Link
                  href="/projects/restaurant-discovery-platform"
                  className="text-[var(--accent-primary)] hover:underline"
                >
                  restaurant discovery platform
                </Link>{" "}
                for the Israeli market using Next.js, Node.js, Firebase, and GCP, improving website
                performance by 30% and customer engagement by 10%. I also managed end-to-end
                development of an advanced{" "}
                <Link
                  href="/projects/scorm-lms-platform"
                  className="text-[var(--accent-primary)] hover:underline"
                >
                  SCORM-compliant learning management system (LMS)
                </Link>{" "}
                delivering personal development and mental health education across 6 stakeholder interfaces.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed text-sm sm:text-base">
                These experiences shaped my ability to lead projects from architecture through
                deployment, balancing technical depth with stakeholder collaboration.
              </p>
            </div>
          </Fade>

          {/* Philosophy */}
          <Fade triggerOnce>
            <div className="glass-card p-6 sm:p-8 mb-8">
              <h2 className="font-heading text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-[var(--text-primary)]">
                Philosophy
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed text-sm sm:text-base">
                I thrive in collaborative environments, always learning new technologies and staying
                current with the latest in AI, cloud, and web development. I believe the best
                engineering happens when deep technical expertise meets a clear understanding of
                business goals — and I bring that mindset to every project.
              </p>
            </div>
          </Fade>

          {/* Skills Grid */}
          <Fade triggerOnce>
            <div className="mb-8">
              <h2 className="font-heading text-lg sm:text-xl md:text-2xl font-semibold mb-6 text-center text-[var(--text-primary)]">
                Technical Skills
              </h2>
              <div className="grid grid-cols-4 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-2 sm:gap-2.5">
                <Fade direction="up" triggerOnce cascade damping={0.04}>
                  {skills.map((skill) => (
                    <div key={skill.name} className="skill-badge">
                      <div className="icon-box">
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          width={28}
                          height={28}
                        />
                      </div>
                      <span className="mt-1.5 sm:mt-2 text-[10px] sm:text-xs font-semibold text-center leading-tight">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </Fade>
              </div>
            </div>
          </Fade>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/experience" className="btn btn--med btn--theme text-sm">
              View Experience
            </Link>
            <Link href="/servicenow" className="btn btn--med btn--theme-inv text-sm">
              ServiceNow Expertise
            </Link>
            <Link href="/ai" className="btn btn--med btn--theme-inv text-sm">
              AI Engineering
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
