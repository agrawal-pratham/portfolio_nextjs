import PageLayout from "@/components/PageLayout";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

const techStack = [
  { name: "React.js", role: "Frontend UI component architecture and responsive mobile-first views" },
  { name: "Node.js", role: "Backend runtime powering API services, user management, and business logic" },
  { name: "Firebase", role: "Real-time database, authentication, and cloud infrastructure" },
  { name: "SCORM", role: "Standardized e-learning runtime for interactive modules and progress tracking" },
  { name: "Twilio Conversations", role: "Real-time 1-on-1 and group messaging supporting text and media files" },
  { name: "Redux & Context API", role: "Structured global state management across 6 user roles" },
  { name: "Material UI", role: "Accessible, consistent design system components" },
  { name: "WiPay & Razorpay", role: "Secure payment gateways for student subscriptions and premium course access" },
];

const stakeholderInterfaces = [
  {
    role: "Students",
    description:
      "Access interactive SCORM-compliant courses, take part in classroom activities, engage with teachers and peers via chat, and track personal development milestones.",
  },
  {
    role: "Facilitators (Teachers)",
    description:
      "Manage student batches, monitor individual and aggregate progress, review scores, conduct 1-on-1 and group discussions, and view performance analytics.",
  },
  {
    role: "Parents",
    description:
      "Self-register on behalf of students, subscribe to courses via WiPay, and follow their child's learning journey and personal development growth.",
  },
  {
    role: "School Admin",
    description:
      "Allocate students to teachers in batches, oversee school-wide participation, manage enrollment, and generate institutional progress reports.",
  },
  {
    role: "Content Uploader",
    description:
      "Author and upload standardized SCORM learning modules, configure media resources, and maintain curriculum integrity.",
  },
  {
    role: "Super Admin",
    description:
      "Comprehensive platform oversight, user role provisioning, system analytics, platform configuration, and transaction monitoring.",
  },
];

export default function ScormLmsPage() {
  return (
    <PageLayout
      title="SCORM-Based LMS Platform | Pratham Agrawal"
      description="Case study: An advanced SCORM-compliant learning management system delivering personal development and mental health education, built with React, Node.js, Firebase, Twilio, and WiPay."
      canonical="/projects/scorm-lms-platform"
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
              SCORM-Based Learning Management System
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-[var(--text-secondary)] text-center max-w-2xl mx-auto mb-12 sm:mb-16 mt-8">
              A comprehensive e-learning platform delivering personal development training and
              mental health education to teenage students across 6 distinct stakeholder interfaces.
            </p>
          </Fade>

          {/* Overview */}
          <Fade triggerOnce>
            <div className="glass-card p-6 sm:p-8 mb-6">
              <h2 className="font-heading text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-[var(--text-primary)]">
                Overview
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed text-sm sm:text-base mb-4">
                Led the end-to-end development of an advanced, production-grade learning management
                system (LMS) specifically engineered to deliver interactive courses on personal
                development and mental health for teenage students. The application engages and empowers
                young learners through structured curriculum delivered by specialized educators.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed text-sm sm:text-base">
                The platform bridges schools, educators, students, and parents into a unified
                educational ecosystem, combining standardized SCORM learning modules, real-time
                communication, custom multimedia players, and secure multi-currency payment processing.
              </p>
            </div>
          </Fade>

          {/* 6 Stakeholder Interfaces */}
          <Fade triggerOnce>
            <div className="glass-card p-6 sm:p-8 mb-6">
              <h2 className="font-heading text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-[var(--text-primary)]">
                Multi-Interface Architecture (6 Stakeholders)
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed text-sm sm:text-base mb-6">
                To serve the diverse needs of the educational network, the platform incorporates 6
                dedicated, role-tailored user interfaces with granular permissions and specialized dashboards:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {stakeholderInterfaces.map((item) => (
                  <div
                    key={item.role}
                    className="p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-color)]"
                  >
                    <h3 className="font-heading text-sm sm:text-base font-bold text-[var(--accent-primary)] mb-1.5">
                      {item.role}
                    </h3>
                    <p className="text-[var(--text-secondary)] text-xs sm:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Fade>

          {/* Key Features */}
          <Fade triggerOnce>
            <div className="glass-card p-6 sm:p-8 mb-6">
              <h2 className="font-heading text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-[var(--text-primary)]">
                Key Platform Features
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-[var(--text-secondary)]">
                <div>
                  <h3 className="font-semibold text-[var(--text-primary)] mb-1">
                    Standardized SCORM Content Integration
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed">
                    Embedded full SCORM compliance to deliver interactive, standardized e-learning
                    packages. This enables modular lesson progression, interactive quizzes, and
                    detailed score reporting across courses.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-[var(--text-primary)] mb-1">
                    Twilio Conversations Real-Time Chat
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed">
                    Integrated Twilio Conversations supporting 1-on-1 messaging between students and
                    teachers, as well as collaborative group chats for student batches. Supports both
                    text messaging and multimedia file sharing with safety and moderation controls.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-[var(--text-primary)] mb-1">
                    Custom Media Players &amp; PDF Viewer
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed">
                    Engineered proprietary custom audio and video players alongside an integrated PDF
                    viewer, giving instructors granular control over how proprietary educational
                    content is consumed and protected.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-[var(--text-primary)] mb-1">
                    WiPay &amp; Razorpay Payment Gateways
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed">
                    Integrated the WiPay payment gateway alongside Razorpay, enabling parents and
                    schools to securely purchase subscriptions and unlock premium course features
                    with frictionless digital transactions.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-[var(--text-primary)] mb-1">
                    Real-Time Progress &amp; Statistical Analytics
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed">
                    Facilitators have a comprehensive view of each student&apos;s journey, receiving
                    real-time statistical reports detailing course completion rates, assessment
                    scores, engagement metrics, and individual areas for improvement.
                  </p>
                </div>
              </div>
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
                My Contribution &amp; Responsibilities
              </h2>
              <p className="text-[var(--text-secondary)] mb-3 leading-relaxed text-sm sm:text-base">
                Led the technical architecture and end-to-end full-stack implementation:
              </p>
              <ul className="text-[var(--text-secondary)] text-sm sm:text-base space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--accent-primary)] mt-1">▸</span>
                  Architected and engineered the frontend UI components in React.js and Material UI,
                  prioritizing accessibility, intuitive UX, and mobile responsiveness for students.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--accent-primary)] mt-1">▸</span>
                  Implemented structured state management using Redux and React Context API to manage
                  complex multi-role data flows, authentication states, and session contexts.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--accent-primary)] mt-1">▸</span>
                  Integrated SCORM packages and built runtime listeners to record learner progress,
                  interactions, and test completions to the Firebase database.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--accent-primary)] mt-1">▸</span>
                  Developed real-time messaging using Twilio Conversations with support for text and
                  media exchanges between students, teachers, and peer cohorts.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--accent-primary)] mt-1">▸</span>
                  Integrated WiPay and Razorpay payment processing for seamless transaction flows and
                  subscription management.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--accent-primary)] mt-1">▸</span>
                  Built real-time reporting dashboards for teachers and administrators to evaluate
                  student learning outcomes and curriculum efficacy.
                </li>
              </ul>
            </div>
          </Fade>

          {/* Navigation */}
          <div className="flex flex-wrap gap-3 justify-center mt-8">
            <Link href="/projects" className="btn btn--med btn--theme text-sm">
              ← All Projects
            </Link>
            <Link
              href="/projects/restaurant-discovery-platform"
              className="btn btn--med btn--theme-inv text-sm"
            >
              Hopa Menu Case Study →
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
