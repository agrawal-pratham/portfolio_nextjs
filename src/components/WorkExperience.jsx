import Image from "next/image";
import { Fade, JackInTheBox } from "react-awesome-reveal";

export default function WorkExperience() {
  return (
    <section
      id="work-experience"
      className="px-4 py-16 sm:py-20 sm:px-10 md:px-16 lg:px-20 min-h-screen bg-[var(--bg-main)] relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative">
        <Fade cascade triggerOnce direction="down">
          <h2 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-8 relative text-center after_style text-[var(--text-primary)]">
            Work Experience
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-12 sm:mb-16 text-center text-[var(--text-secondary)] max-w-2xl mx-auto">
            Discover my professional journey and the key engineering roles I've undertaken.
          </p>
        </Fade>

        <div className="space-y-12 sm:space-y-16 md:space-y-20">
          {/* ========================================================= */}
          {/* LATEST EXPERIENCE: Left = Details, Right = Vector Image   */}
          {/* ========================================================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-14 items-center">
            {/* Left: Text details */}
            <Fade cascade triggerOnce direction="left">
              <div className="glass-card p-5 sm:p-6 md:p-8">
                <div className="flex items-start sm:items-center justify-between gap-2 mb-3">
                  <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-[var(--text-primary)]">
                    Associate Consultant
                  </h3>
                  <span className="px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-semibold rounded-full bg-[var(--badge-emerald-bg)] text-[var(--badge-emerald-text)] border border-[var(--badge-emerald-border)] whitespace-nowrap flex-shrink-0">
                    Current
                  </span>
                </div>
                <h4 className="text-sm sm:text-base font-semibold text-[var(--accent-primary)] mb-1">
                  Infosys, Bangalore
                </h4>
                <p className="text-[10px] sm:text-xs text-[var(--text-secondary)] mb-3 sm:mb-4 font-mono">
                  Nov 2024 - Present
                </p>
                <p className="text-xs sm:text-sm md:text-base text-[var(--text-primary)] mb-2 sm:mb-3 leading-relaxed">
                  Building enterprise-grade ServiceNow solutions using GenAI, Agentic AI,
                  Now Assist Skills, AI Agent Studio, and Moveworks. Collaborate closely
                  with stakeholders to design and implement high-impact, AI-powered platform
                  capabilities aligned with business goals.
                </p>
                <p className="text-xs sm:text-sm md:text-base text-[var(--text-secondary)] mb-4 sm:mb-6 leading-relaxed">
                  Hands-on with Glide APIs, Flow Designer, UI Builder, Workspace,
                  business rules, client scripts, UI policies, Playbooks, Service
                  Portal, ATF test suites, REST/SOAP integrations, and Integration Hub
                  aligned with ITIL best practices.
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {[
                    "ServiceNow",
                    "GenAI",
                    "Agentic AI",
                    "Now Assist Skills",
                    "AI Agent Studio",
                    "Moveworks",
                    "Glide APIs",
                    "Flow Designer",
                    "UI Builder",
                    "Workspace",
                    "Integration Hub",
                    "ITIL",
                  ].map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Fade>

            {/* Right: Vector image — hidden on mobile */}
            <JackInTheBox fraction={0.3} triggerOnce>
              <div className="hidden md:flex items-center justify-center">
                <div className="glass-card p-6 lg:p-8 rounded-2xl w-full flex items-center justify-center">
                  <Image
                    height={340}
                    width={340}
                    src="/assets/svg/work_exp.svg"
                    alt="ServiceNow & AI Consultancy Illustration"
                    className="w-full max-w-xs lg:max-w-sm opacity-95"
                  />
                </div>
              </div>
            </JackInTheBox>
          </div>

          {/* ========================================================= */}
          {/* PREVIOUS EXPERIENCE: Left = Vector Image, Right = Details */}
          {/* ========================================================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-14 items-center">
            {/* Left: Vector image — hidden on mobile */}
            <JackInTheBox fraction={0.3} triggerOnce>
              <div className="hidden md:flex items-center justify-center">
                <div className="glass-card p-6 lg:p-8 rounded-2xl w-full flex items-center justify-center">
                  <Image
                    height={340}
                    width={340}
                    src="/assets/svg/fullstack_dev.svg"
                    alt="Full Stack Development Illustration"
                    className="w-full max-w-xs lg:max-w-sm opacity-95"
                  />
                </div>
              </div>
            </JackInTheBox>

            {/* Right: Text details */}
            <Fade cascade triggerOnce direction="right">
              <div className="glass-card p-5 sm:p-6 md:p-8">
                <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-[var(--text-primary)] mb-1">
                  System Software Engineer
                </h3>
                <h4 className="text-sm sm:text-base font-semibold text-[var(--accent-primary)] mb-1">
                  Krishworks Technology and Research Labs Pvt. Ltd.
                </h4>
                <p className="text-[10px] sm:text-xs text-[var(--text-secondary)] mb-3 sm:mb-4 font-mono">
                  Jun 2022 - Nov 2024
                </p>
                <p className="text-xs sm:text-sm md:text-base text-[var(--text-primary)] mb-2 sm:mb-3 leading-relaxed">
                  Led the development of a production-grade restaurant discovery
                  platform for the Israeli market using Next.js, Node.js, Firebase,
                  and GCP, improving website performance by 30% and customer
                  engagement by 10%. Successfully migrated the application from
                  React.js to Next.js.
                </p>
                <p className="text-xs sm:text-sm md:text-base text-[var(--text-secondary)] mb-4 sm:mb-6 leading-relaxed">
                  Managed end-to-end development of an advanced LMS portal for
                  Jamaican teenage students, emphasizing mental health and personal
                  development. Improved UI designs for usability and accessibility.
                  Implemented real-time analytics and integrated Razorpay and
                  WiPay payment services.
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {[
                    "Next.js",
                    "ReactJS",
                    "Node.js",
                    "Firebase",
                    "Python",
                    "AWS",
                    "Google Cloud Platform",
                    "Razorpay",
                    "WiPay",
                  ].map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
}
