import { useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import skills from "@/lib/skills";

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section
      id="about"
      className="px-4 py-16 sm:py-20 sm:px-10 md:px-16 lg:px-20 min-h-screen bg-[var(--bg-main)] relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative">
        <Fade cascade triggerOnce direction="down">
          <h2 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-8 relative text-center after_style text-[var(--text-primary)]">
            About Me
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-10 sm:mb-14 text-center text-[var(--text-secondary)] max-w-2xl mx-auto">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </p>
        </Fade>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-20">
          {/* Bio */}
          <div>
            <Slide cascade triggerOnce direction="left">
              <h3 className="font-heading text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-4 sm:mb-5 text-[var(--text-primary)]">
                Who I Am
              </h3>
              <div
                className={`duration-500 ${isExpanded
                    ? ""
                    : "line-clamp-[10] sm:line-clamp-[14] md:line-clamp-none overflow-hidden"
                  }`}
              >
                <p className="text-[var(--text-secondary)] mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                  I'm an{" "}
                  <strong className="text-[var(--accent-primary)]">
                    Associate Consultant at Infosys, Mumbai
                  </strong>{" "}
                  with 4+ years of experience in full-stack development, cloud
                  technologies, and AI-driven automation. I deliver enterprise-grade
                  ServiceNow solutions across GenAI, Agentic AI, Now Assist
                  Skills, and AI Agent Studio.
                </p>
                <p className="text-[var(--text-secondary)] mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                  My hands-on work spans Glide APIs, Flow Designer, UI Builder,
                  Workspace, business rules, client scripts, UI policies,
                  Playbooks, Service Portal, ATF test suites, REST/SOAP
                  integrations, Integration Hub, and Moveworks — all aligned
                  with ITIL best practices. I collaborate closely with
                  stakeholders to design and implement high-impact, AI-powered
                  platform capabilities aligned with business goals.
                </p>
                <p className="text-[var(--text-secondary)] mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                  Earlier in my career, I led the development of a
                  production-grade restaurant discovery platform using Next.js,
                  Node.js, Firebase, and GCP, and built a Learning Management
                  System portal focused on accessibility and real-time
                  analytics.
                </p>
                <p className="text-[var(--text-secondary)] mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  I thrive in collaborative environments,
                  always learning new technologies and staying current with the
                  latest in AI, cloud, and web development.
                </p>
              </div>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-[var(--accent-primary)] text-sm underline underline-offset-4 hover:opacity-80 transition-colors block md:hidden mb-4"
              >
                {isExpanded ? "Collapse" : "Read More"}
              </button>
              <a
                href="#work-experience"
                className="btn btn--med btn--theme inline-flex mt-1 sm:mt-2 text-sm"
              >
                See My Experience
              </a>
            </Slide>
          </div>

          {/* Skills */}
          <div>
            <Fade triggerOnce>
              <h3 className="font-heading text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-4 sm:mb-5 text-[var(--text-primary)]">
                My Skills
              </h3>
            </Fade>
            <div className="grid grid-cols-4 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-2.5">
              <Fade direction="up" triggerOnce cascade damping={0.04}>
                {skills.map((skill) => (
                  <div key={skill.name} className="skill-badge">
                    <div className="icon-box">
                      <img
                        src={skill.icon}
                        alt={`${skill.name} icon`}
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
        </div>
      </div>
    </section>
  );
}
