import { sendGAEvent } from "@next/third-parties/google";
import Image from "next/image";
import Link from "next/link";
import { Fade, Slide } from "react-awesome-reveal";

export default function Hero() {
  return (
    <section className="bg-custom-gradient text-[var(--text-primary)] min-h-screen flex items-center relative overflow-hidden">
      <div className="flex mx-4 mt-24 sm:mt-28 md:mt-0 sm:mx-10 md:mx-16 lg:mx-20 flex-col-reverse justify-between gap-6 sm:gap-8 w-full md:flex-row py-6 md:py-0">
        {/* Left: Text */}
        <div className="flex-1 my-auto text-center md:text-left">
          <Slide direction="left" duration={1000} damping={0.5} cascade triggerOnce>
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--tag-border)] bg-[var(--tag-bg)] text-[var(--tag-text)] text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
              <span className="glow-dot"></span>
              Open to opportunities
            </div>

            <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
              Hi, I'm{" "}
              <span className="text-gradient">Pratham Agrawal</span>
            </h1>

            <div className="mb-2 sm:mb-3 flex flex-col sm:flex-row items-center md:items-start gap-1 sm:gap-1.5 justify-center md:justify-start">
              <span className="text-sm sm:text-base md:text-lg font-semibold text-[var(--text-primary)]">
                Associate Consultant
              </span>
              <span className="hidden sm:block text-[var(--text-secondary)]">·</span>
              <span className="text-sm sm:text-base md:text-lg text-[var(--accent-primary)] font-medium">
                Infosys, Mumbai
              </span>
            </div>

            <p className="text-sm sm:text-base md:text-lg text-[var(--text-secondary)] mb-6 sm:mb-8 max-w-xl leading-relaxed mx-auto md:mx-0">
              Associate Consultant with 4+ years of experience in full-stack development,
              cloud technologies, and AI-driven automation. Currently delivering
              enterprise-grade ServiceNow solutions across GenAI, Agentic AI, Now Assist
              Skills, and AI Agent Studio, architecting scalable intelligent workflows.
            </p>

            <div className="flex flex-col xs:flex-row flex-wrap gap-3 justify-center md:justify-start">
              <Link
                onClick={() => {
                  sendGAEvent({ event: "buttonClicked", value: "Resume" });
                }}
                href="https://drive.google.com/file/d/1OVrswJHsqFC_02D2gdEcuPfqEBbmFOj8/view?usp=drive_link"
                target="_blank"
                className="btn btn--bg btn--theme text-sm sm:text-base"
              >
                View Resume
              </Link>
              <Link
                href="#about"
                className="btn btn--bg btn--theme-inv text-sm sm:text-base"
              >
                Learn More
              </Link>
            </div>

            {/* Stat strip */}
            <div className="flex flex-wrap gap-6 sm:gap-8 mt-8 sm:mt-10 justify-center md:justify-start">
              {[
                { label: "Years Experience", value: "4+" },
                { label: "Specialization", value: "ServiceNow & AI" },
              ].map((s) => (
                <div key={s.label} className="text-center md:text-left">
                  <p className="font-heading text-xl sm:text-2xl font-bold text-[var(--text-primary)]">{s.value}</p>
                  <p className="text-[10px] sm:text-xs text-[var(--text-secondary)] uppercase tracking-wider mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </Slide>
        </div>

        {/* Right: Image */}
        <div className="flex-shrink-0 w-[45%] max-w-[200px] sm:max-w-[220px] md:max-w-[280px] my-auto mx-auto md:mx-0">
          <Fade triggerOnce delay={400}>
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-[var(--accent-primary)] opacity-10 blur-2xl scale-105 -z-10" />
              <Image
                onDragStart={(e) => { e.preventDefault(); return false; }}
                priority={true}
                height={500}
                width={500}
                src="/assets/png/me.jpg"
                className="rounded-2xl border border-[var(--border-color)] shadow-[var(--shadow-card)] animate-float w-full h-auto"
                alt="Pratham Agrawal — Associate Consultant at Infosys"
              />
            </div>
          </Fade>
        </div>
      </div>

      {/* Mouse scroll indicator */}
      <div className="home-hero__mouse-scroll-cont animate-bounce">
        <div className="mouse"></div>
      </div>
    </section>
  );
}
