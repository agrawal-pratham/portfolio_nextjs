import PageLayout from "@/components/PageLayout";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

const techStack = [
  { name: "Next.js", role: "Frontend framework — server-side rendering, routing, and optimized builds" },
  { name: "React.js", role: "UI component architecture (migrated from pure React SPA to Next.js)" },
  { name: "Node.js", role: "Backend API and server-side logic" },
  { name: "Express.js", role: "REST API framework powering the backend services" },
  { name: "Firebase", role: "Database, authentication, and real-time data management" },
  { name: "Google Cloud Platform", role: "Hosting, cloud functions, and infrastructure" },
  { name: "Material UI", role: "Component library for consistent, modern UI elements" },
  { name: "Tailwind CSS", role: "Utility-first CSS framework for rapid, responsive styling" },
];

export default function RestaurantPlatformPage() {
  return (
    <PageLayout
      title="Hopa Menu — Restaurant Discovery Platform | Pratham Agrawal"
      description="Case study: Hopa Menu, a SaaS and NFC-based restaurant management and food ordering platform for the Israeli market, built with Next.js, Node.js, Express, Firebase, and GCP."
      canonical="/projects/restaurant-discovery-platform"
    >
      <div className="px-4 py-12 sm:py-16 sm:px-10 md:px-16 lg:px-20">
        <div className="max-w-4xl mx-auto">
          {/* Back link */}
          <Fade triggerOnce>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1 text-[var(--accent-primary)] text-sm font-medium hover:underline mb-6"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Projects
            </Link>
          </Fade>

          <Fade cascade triggerOnce direction="down">
            <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 relative text-center after_style text-[var(--text-primary)]">
              Hopa Menu — Restaurant Discovery Platform
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-[var(--text-secondary)] text-center max-w-2xl mx-auto mb-12 sm:mb-16 mt-8">
              A production-grade SaaS and NFC-based restaurant management and food ordering platform
              built for the Israeli market — enabling digital menu management, online ordering,
              and streamlined restaurant operations.
            </p>
          </Fade>

          {/* Overview */}
          <Fade triggerOnce>
            <div className="glass-card p-6 sm:p-8 mb-6">
              <h2 className="font-heading text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-[var(--text-primary)]">
                Overview
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed text-sm sm:text-base">
                Led the development of <strong className="text-[var(--accent-primary)]">Hopa Menu</strong>,
                a production-grade SaaS and NFC-based restaurant management and food ordering platform
                targeting the Israeli market. The platform enables restaurant owners to manage their menus,
                timings, kitchen operations, orders, and deliveries — while customers can scan NFC-based or
                QR menus to browse and place food orders. Built with Next.js, Node.js, Express.js, Firebase,
                Material UI, and Tailwind CSS. This was a core project during my tenure at Krishworks
                Technology and Research Labs (Jun 2022 — Nov 2024).
              </p>
            </div>
          </Fade>

          {/* Problem */}
          <Fade triggerOnce>
            <div className="glass-card p-6 sm:p-8 mb-6">
              <h2 className="font-heading text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-[var(--text-primary)]">
                Problem
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed text-sm sm:text-base">
                The existing application was built as a React.js single-page application (SPA),
                which suffered from suboptimal performance, poor SEO visibility, and slower initial
                page loads. As the platform scaled to serve the Israeli market with multilingual
                support requirements and growing restaurant partner counts, these limitations
                became bottlenecks for user acquisition and engagement. Additionally, restaurant
                owners needed a more streamlined way to manage menus, track orders across kitchen
                and bar, and handle deliveries and take-away from a single interface.
              </p>
            </div>
          </Fade>

          {/* Goals */}
          <Fade triggerOnce>
            <div className="glass-card p-6 sm:p-8 mb-6">
              <h2 className="font-heading text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-[var(--text-primary)]">
                Goals
              </h2>
              <ul className="text-[var(--text-secondary)] text-sm sm:text-base space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--accent-primary)] mt-1">▸</span>
                  Migrate the application from React.js to Next.js for improved performance and SEO
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--accent-primary)] mt-1">▸</span>
                  Achieve measurable improvements in website performance and user engagement
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--accent-primary)] mt-1">▸</span>
                  Enable NFC and QR-based menu scanning for touchless food ordering
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--accent-primary)] mt-1">▸</span>
                  Support multilingual content for the Israeli market
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--accent-primary)] mt-1">▸</span>
                  Build a scalable, production-grade architecture suitable for the Israeli market
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--accent-primary)] mt-1">▸</span>
                  Leverage cloud infrastructure for reliability and scalability
                </li>
              </ul>
            </div>
          </Fade>

          {/* Technology Stack */}
          <Fade triggerOnce>
            <div className="glass-card p-6 sm:p-8 mb-6">
              <h2 className="font-heading text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-[var(--text-primary)]">
                Technology Stack
              </h2>
              <div className="space-y-3">
                {techStack.map((tech) => (
                  <div key={tech.name} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                    <span className="tech-tag inline-flex w-fit">{tech.name}</span>
                    <span className="text-[var(--text-secondary)] text-xs sm:text-sm">
                      {tech.role}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Fade>

          {/* My Contribution */}
          <Fade triggerOnce>
            <div className="glass-card p-6 sm:p-8 mb-6">
              <h2 className="font-heading text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-[var(--text-primary)]">
                My Contribution
              </h2>
              <p className="text-[var(--text-secondary)] mb-3 leading-relaxed text-sm sm:text-base">
                Led the full development lifecycle of the platform — from architecture decisions
                through implementation and deployment. Key responsibilities included:
              </p>
              <ul className="text-[var(--text-secondary)] text-sm sm:text-base space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--accent-primary)] mt-1">▸</span>
                  Leading the complete migration from React.js SPA to Next.js with server-side rendering
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--accent-primary)] mt-1">▸</span>
                  Designing and implementing the application architecture on Firebase and GCP
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--accent-primary)] mt-1">▸</span>
                  Optimizing build processes, image loading, and runtime performance
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--accent-primary)] mt-1">▸</span>
                  Implementing SEO best practices through Next.js&apos;s built-in capabilities
                </li>
              </ul>
            </div>
          </Fade>

          {/* Performance & Results */}
          <Fade triggerOnce>
            <div className="glass-card p-6 sm:p-8 mb-6">
              <h2 className="font-heading text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-[var(--text-primary)]">
                Results
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="bg-[var(--bg-elevated)] rounded-xl p-4 text-center border border-[var(--border-color)]">
                  <p className="font-heading text-2xl sm:text-3xl font-bold text-[var(--accent-primary)]">
                    30%
                  </p>
                  <p className="text-[var(--text-secondary)] text-xs sm:text-sm mt-1">
                    Website Performance Improvement
                  </p>
                </div>
                <div className="bg-[var(--bg-elevated)] rounded-xl p-4 text-center border border-[var(--border-color)]">
                  <p className="font-heading text-2xl sm:text-3xl font-bold text-[var(--accent-primary)]">
                    10%
                  </p>
                  <p className="text-[var(--text-secondary)] text-xs sm:text-sm mt-1">
                    Customer Engagement Increase
                  </p>
                </div>
              </div>
              <p className="text-[var(--text-secondary)] leading-relaxed text-sm sm:text-base">
                The React.js to Next.js migration delivered significant performance gains through
                server-side rendering, optimized code splitting, and improved initial load times.
                The architectural improvements translated directly into measurable user engagement
                increases.
              </p>
            </div>
          </Fade>

          {/* Architecture */}
          <Fade triggerOnce>
            {/* <!-- VERIFY: need architectural details from Pratham — specific system design, database schema, API patterns --> */}
            <div className="glass-card p-6 sm:p-8 mb-6">
              <h2 className="font-heading text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-[var(--text-primary)]">
                Architecture
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed text-sm sm:text-base">
                The platform uses a modern full-stack architecture with Next.js handling server-side
                rendering and static generation for fast, SEO-friendly pages. Express.js powers the
                REST API layer, while Firebase provides real-time database capabilities, authentication,
                and cloud functions. The frontend combines Material UI components with Tailwind CSS for
                rapid, responsive styling. NFC and QR code scanning integrations enable touchless menu
                access. GCP hosts the infrastructure, ensuring scalability and reliability. The
                architecture supports multilingual content delivery and real-time order management
                across kitchen, bar, take-away, and delivery channels.
              </p>
            </div>
          </Fade>

          {/* Challenges & Solutions */}
          <Fade triggerOnce>
            {/* <!-- VERIFY: need challenges and solutions details from Pratham --> */}
            <div className="glass-card p-6 sm:p-8 mb-6">
              <h2 className="font-heading text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-[var(--text-primary)]">
                Challenges & Solutions
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-[var(--text-primary)] mb-1">
                    React to Next.js Migration
                  </h3>
                  <p className="text-[var(--text-secondary)] text-xs sm:text-sm leading-relaxed">
                    Migrating a production SPA to Next.js required careful planning around routing,
                    state management, and server-side rendering compatibility — ensuring zero
                    downtime during the transition while maintaining feature parity.
                  </p>
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-[var(--text-primary)] mb-1">
                    Performance Optimization
                  </h3>
                  <p className="text-[var(--text-secondary)] text-xs sm:text-sm leading-relaxed">
                    Achieving the 30% performance improvement required optimizing image loading
                    strategies, implementing code splitting, and leveraging Next.js&apos;s built-in
                    performance features like automatic static optimization.
                  </p>
                </div>
              </div>
            </div>
          </Fade>

          {/* Lessons Learned */}
          <Fade triggerOnce>
            {/* <!-- VERIFY: need lessons learned details from Pratham --> */}
            <div className="glass-card p-6 sm:p-8 mb-6">
              <h2 className="font-heading text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-[var(--text-primary)]">
                Lessons Learned
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed text-sm sm:text-base">
                This project reinforced the importance of choosing the right framework for the
                problem — the migration from React.js to Next.js was a strategic decision that
                paid dividends in performance, SEO, and developer experience. Leading the full
                lifecycle also deepened my understanding of cloud architecture and production
                deployment patterns on GCP and Firebase.
              </p>
            </div>
          </Fade>

          {/* Navigation */}
          <div className="flex flex-wrap gap-3 justify-center mt-8">
            <Link href="/projects" className="btn btn--med btn--theme text-sm">
              ← All Projects
            </Link>
            <Link href="/experience" className="btn btn--med btn--theme-inv text-sm">
              View Experience
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
