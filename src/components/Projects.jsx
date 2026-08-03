import { sendGAEvent } from "@next/third-parties/google";
import Image from "next/image";
import Link from "next/link";
import { Fade, Zoom } from "react-awesome-reveal";

const projects = [
  {
    id: "1",
    title: "Tech Solutions",
    image: "/assets/png/tech_solution.png",
    description:
      "A comprehensive portfolio website for service-based companies developed using Next.js. Utilizes modern libraries such as React-Awesome-Reveal, react-icons, react-count-up, react-syntax-highlighter, and react-typed.",
    technologies: ["Next.js", "Tailwind CSS", "Javascript", "Firebase"],
    liveLink: "https://solutions.agrawalpratham.in",
    codeLink: "https://github.com/agrawal-pratham/Tech-Solutions",
  },
  {
    id: "2",
    title: "Zostel Clone",
    image: "/assets/png/zostel_clone.png",
    description:
      "Trip planner with best places to visit and hotels for stay. Built LongStay and BookNow pages of the platform in under 1 week.",
    technologies: ["React.js", "HTML", "CSS", "Javascript"],
    codeLink: "https://github.com/agrawal-pratham/Project_Zostel",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="px-4 py-16 sm:py-20 sm:px-10 md:px-16 lg:px-20 min-h-screen bg-[var(--bg-main)] relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative">
        <Fade cascade triggerOnce direction="down">
          <h2 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-8 relative text-center after_style text-[var(--text-primary)]">
            Projects
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-12 sm:mb-16 text-center text-[var(--text-secondary)] max-w-2xl mx-auto">
            Explore a selection of my featured projects showcasing my web and platform development capabilities.
          </p>
        </Fade>

        <div className="space-y-10 sm:space-y-16">
          {projects.map((project) => (
            <div
              className="glass-card p-4 sm:p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 items-center"
              key={project.id}
            >
              <Zoom triggerOnce>
                <div className="relative overflow-hidden rounded-lg sm:rounded-xl group border border-[var(--border-color)]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={400}
                    className="w-full object-cover rounded-lg sm:rounded-xl duration-500 group-hover:scale-105"
                  />
                </div>
              </Zoom>

              <div className="flex flex-col items-start">
                <Fade cascade triggerOnce direction="left">
                  <h3 className="font-heading font-bold text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3 text-[var(--text-primary)]">
                    {project.title}
                  </h3>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className="text-[var(--text-secondary)] text-xs sm:text-sm md:text-base mb-5 sm:mb-8 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {project.liveLink && (
                      <Link
                        onClick={() => {
                          sendGAEvent({
                            event: "buttonClicked",
                            value: `Live Link - ${project.title}`,
                          });
                        }}
                        href={project.liveLink}
                        target="_blank"
                        className="btn btn--med btn--theme text-xs sm:text-sm"
                      >
                        Live Demo
                      </Link>
                    )}
                    <Link
                      onClick={() => {
                        sendGAEvent({
                          event: "buttonClicked",
                          value: `Code Link - ${project.title}`,
                        });
                      }}
                      href={project.codeLink}
                      target="_blank"
                      className="btn btn--med btn--theme-inv text-xs sm:text-sm"
                    >
                      View Source
                    </Link>
                  </div>
                </Fade>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
