import PageLayout from "@/components/PageLayout";
import Image from "next/image";
import Link from "next/link";
import { Fade, Zoom } from "react-awesome-reveal";

const projects = [
  {
    title: "Hopa Menu — Restaurant Discovery Platform",
    slug: "restaurant-discovery-platform",
    image: null,
    description:
      "A production-grade SaaS and NFC-based restaurant management and food ordering platform for the Israeli market. Enables digital menu management, online ordering, and streamlined restaurant operations. Improved website performance by 30% and customer engagement by 10% through a full migration from React.js to Next.js.",
    technologies: ["Next.js", "Node.js", "Express.js", "Firebase", "GCP", "Material UI", "Tailwind CSS"],
    hasDetailPage: true,
  },
  {
    title: "Tech Solutions",
    image: "/assets/png/tech_solution.png",
    description:
      "A comprehensive portfolio website for service-based companies developed using Next.js. Utilizes modern libraries such as React-Awesome-Reveal, react-icons, react-count-up, react-syntax-highlighter, and react-typed.",
    technologies: ["Next.js", "Tailwind CSS", "Javascript", "Firebase"],
    liveLink: "https://solutions.agrawalpratham.in",
    codeLink: "https://github.com/agrawal-pratham/Tech-Solutions",
    hasDetailPage: false,
    // <!-- VERIFY: create detail page for Tech Solutions in future phase? -->
  },
  {
    title: "Zostel Clone",
    image: "/assets/png/zostel_clone.png",
    description:
      "A trip planner featuring best places to visit and hotels for stay. Built the LongStay and BookNow pages of the platform in under 1 week.",
    technologies: ["React.js", "HTML", "CSS", "Javascript"],
    codeLink: "https://github.com/agrawal-pratham/Project_Zostel",
    hasDetailPage: false,
  },
  {
    title: "SCORM-Based LMS Platform",
    slug: "scorm-lms-platform",
    image: null,
    description:
      "A comprehensive SCORM-compliant learning management system delivering personal development and mental health education. Engineered across 6 dedicated user interfaces (Students, Teachers, Parents, School Admin, Content Uploader, Super Admin) with Twilio Conversations real-time messaging, WiPay and Razorpay payments, and real-time student analytics.",
    technologies: ["React.js", "Node.js", "Firebase", "SCORM", "Twilio", "WiPay", "Redux", "Material UI"],
    hasDetailPage: true,
  },
];

export default function ProjectsPage() {
  return (
    <PageLayout
      title="Projects | Pratham Agrawal"
      description="Explore Pratham Agrawal's portfolio of projects — restaurant discovery platforms, portfolio sites, and full-stack web applications."
      canonical="/projects"
      jsonLdType="CollectionPage"
    >
      <div className="px-4 py-12 sm:py-16 sm:px-10 md:px-16 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <Fade cascade triggerOnce direction="down">
            <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 relative text-center after_style text-[var(--text-primary)]">
              Projects
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-[var(--text-secondary)] text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              Explore a selection of my featured projects showcasing web and platform
              development capabilities across full-stack, cloud, and AI.
            </p>
          </Fade>

          <div className="space-y-8 sm:space-y-12">
            {projects.map((project, idx) => (
              <Fade key={project.title} triggerOnce delay={idx * 80}>
                <div className="glass-card p-4 sm:p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 items-center">
                  {/* Image */}
                  {project.image ? (
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
                  ) : (
                    <div className="flex items-center justify-center rounded-lg sm:rounded-xl border border-[var(--border-color)] bg-[var(--bg-elevated)] min-h-[200px]">
                      <span className="text-[var(--text-secondary)] text-sm">
                        {project.hasDetailPage ? "View case study →" : "Screenshot coming soon"}
                      </span>
                    </div>
                  )}

                  {/* Details */}
                  <div className="flex flex-col items-start">
                    <h2 className="font-heading font-bold text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3 text-[var(--text-primary)]">
                      {project.title}
                    </h2>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p className="text-[var(--text-secondary)] text-xs sm:text-sm md:text-base mb-5 sm:mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {project.hasDetailPage && (
                        <Link
                          href={`/projects/${project.slug}`}
                          className="btn btn--med btn--theme text-xs sm:text-sm"
                        >
                          View Case Study
                        </Link>
                      )}
                      {project.liveLink && (
                        <Link
                          href={project.liveLink}
                          target="_blank"
                          className="btn btn--med btn--theme text-xs sm:text-sm"
                        >
                          Live Demo
                        </Link>
                      )}
                      {project.codeLink && (
                        <Link
                          href={project.codeLink}
                          target="_blank"
                          className="btn btn--med btn--theme-inv text-xs sm:text-sm"
                        >
                          View Source
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
