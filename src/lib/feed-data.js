const SITE_URL = "https://agrawalpratham.in";

const feedMetadata = {
  title: "Pratham Agrawal | ServiceNow & AI Engineer",
  description:
    "Engineering insights, enterprise case studies, and technical publications from Pratham Agrawal — ServiceNow & AI Engineer at Infosys specializing in GenAI, Agentic AI, AI Agent Studio, Now Assist, Glide APIs, and full-stack development.",
  id: SITE_URL,
  link: SITE_URL,
  language: "en",
  image: `${SITE_URL}/assets/og/home.png`,
  favicon: `${SITE_URL}/favicon-32x32.png`,
  copyright: `All rights reserved ${new Date().getFullYear()}, Pratham Agrawal`,
  updated: new Date("2026-03-01T00:00:00Z"),
  feedLinks: {
    rss2: `${SITE_URL}/rss.xml`,
    atom: `${SITE_URL}/atom.xml`,
    json: `${SITE_URL}/feed.json`,
  },
  author: {
    name: "Pratham Agrawal",
    email: "pratham@agrawalpratham.in",
    link: SITE_URL,
  },
};

const feedItems = [
  {
    title: "AI Engineering & Enterprise Agentic Systems",
    id: `${SITE_URL}/ai`,
    link: `${SITE_URL}/ai`,
    description:
      "Deep dive into enterprise GenAI, autonomous AI agents, ServiceNow Now Assist Skills, and AI Agent Studio integrations for automated workflows.",
    content: `
      <h2>Generative AI & Agentic Workflows in Enterprise IT</h2>
      <p>Pratham Agrawal designs and implements production-grade generative AI and agentic systems within enterprise architectures. Leveraging large language models (LLMs) and ServiceNow AI Agent Studio, this work bridges traditional ITSM with autonomous multi-step reasoning.</p>
      <h3>Key Focus Areas:</h3>
      <ul>
        <li><strong>GenAI & LLM Applications:</strong> Production-ready enterprise AI automating complex workflows, generating context-aware summaries, and augmenting human decision-making.</li>
        <li><strong>Agentic AI & Autonomous Systems:</strong> Multi-step autonomous agents that break down complex enterprise incidents, call internal APIs, and execute resolutions with safety guardrails.</li>
        <li><strong>ServiceNow AI (Now Assist & AI Agent Studio):</strong> Native platform conversational AI skills, GenAI skills customization, and agent deployment across enterprise catalog and incident workflows.</li>
        <li><strong>Enterprise AI Integration:</strong> Event-driven architecture connecting AI models with ITSM, ERP, and CRM platforms via REST/SOAP APIs and webhooks.</li>
      </ul>
      <p><a href="${SITE_URL}/ai">Explore the full AI Engineering profile →</a></p>
    `,
    author: [feedMetadata.author],
    date: new Date("2025-01-20T09:00:00Z"),
    image: `${SITE_URL}/assets/og/ai.png`,
    category: [
      { name: "Artificial Intelligence" },
      { name: "Generative AI" },
      { name: "Agentic AI" },
      { name: "Now Assist" },
      { name: "ServiceNow" },
    ],
  },
  {
    title: "ServiceNow Enterprise Architecture & Platform Engineering",
    id: `${SITE_URL}/servicenow`,
    link: `${SITE_URL}/servicenow`,
    description:
      "Enterprise-grade ServiceNow platform development covering Glide APIs, Flow Designer, Integration Hub, UI Builder, and Automated Test Framework (ATF).",
    content: `
      <h2>Enterprise ServiceNow Development & Process Automation</h2>
      <p>Specialized platform architecture, backend scripting, and automated workflow design developed by Pratham Agrawal as an Associate Consultant at Infosys.</p>
      <h3>Core Competencies:</h3>
      <ul>
        <li><strong>Glide API Scripting:</strong> Advanced server-side business rules, script includes, client scripts, and secure GlideRecord / GlideAjax implementations.</li>
        <li><strong>Flow Designer & Integration Hub:</strong> Complex multi-step flows, spoke configurations, and bi-directional REST/SOAP enterprise integrations.</li>
        <li><strong>Workspace & UI Builder:</strong> Custom workspace experiences, Service Portal widgets, and role-based interface design.</li>
        <li><strong>Quality & Test Automation:</strong> Automated Test Framework (ATF) test suites preventing regression across platform upgrades and patch cycles.</li>
      </ul>
      <p><a href="${SITE_URL}/servicenow">Read detailed ServiceNow technical competencies →</a></p>
    `,
    author: [feedMetadata.author],
    date: new Date("2024-11-20T10:00:00Z"),
    image: `${SITE_URL}/assets/og/servicenow.png`,
    category: [
      { name: "ServiceNow" },
      { name: "Glide APIs" },
      { name: "Flow Designer" },
      { name: "ITSM" },
      { name: "Integration Hub" },
    ],
  },
  {
    title: "Case Study: Hopa Menu — NFC & SaaS Restaurant Management Platform",
    id: `${SITE_URL}/projects/restaurant-discovery-platform`,
    link: `${SITE_URL}/projects/restaurant-discovery-platform`,
    description:
      "Production-grade SaaS and NFC-based restaurant management and food ordering platform engineered for the Israeli market, built with Next.js, Node.js, Express, Firebase, and GCP.",
    content: `
      <h2>Hopa Menu: Modernizing F&B Operations with Next.js & GCP</h2>
      <p>A full-stack, contactless digital menu and ordering platform built for high-throughput restaurant environments in Israel.</p>
      <h3>Impact & Technical Achievements:</h3>
      <ul>
        <li><strong>30% Performance Boost:</strong> Migrated legacy React SPA to Next.js with server-side rendering and edge optimizations.</li>
        <li><strong>10% Increase in Customer Engagement:</strong> Instant NFC table scanning and streamlined checkout flows.</li>
        <li><strong>Scalable Cloud Architecture:</strong> Powered by Node.js, Express, Firebase real-time database, Google Cloud Platform, and Tailwind CSS.</li>
      </ul>
      <p><a href="${SITE_URL}/projects/restaurant-discovery-platform">Read the comprehensive case study →</a></p>
    `,
    author: [feedMetadata.author],
    date: new Date("2024-05-15T12:00:00Z"),
    image: `${SITE_URL}/assets/og/restaurant-discovery-platform.png`,
    category: [
      { name: "Case Study" },
      { name: "Next.js" },
      { name: "Full Stack" },
      { name: "Firebase" },
      { name: "Google Cloud Platform" },
    ],
  },
  {
    title: "Case Study: SCORM-Based LMS & Educational Platform",
    id: `${SITE_URL}/projects/scorm-lms-platform`,
    link: `${SITE_URL}/projects/scorm-lms-platform`,
    description:
      "Enterprise e-learning architecture engineered across 6 dedicated user interfaces, featuring SCORM compliance, Twilio messaging, WiPay and Razorpay payment gateways.",
    content: `
      <h2>Scalable E-Learning Platform with Role-Based Interfaces</h2>
      <p>A comprehensive SCORM-compliant learning management system delivering personal development and mental health education.</p>
      <h3>System Architecture:</h3>
      <ul>
        <li><strong>6 Dedicated Role Interfaces:</strong> Tailored portals for Students, Teachers, Parents, School Admins, Content Uploaders, and Super Admins.</li>
        <li><strong>Real-Time Communication:</strong> Twilio Conversations integration for 1-on-1 and group student-facilitator discussions with multimedia support.</li>
        <li><strong>Global Payment Gateways:</strong> Seamless multi-currency subscription processing via WiPay and Razorpay.</li>
        <li><strong>Interactive E-Learning:</strong> Embedded SCORM runtime tracking student milestones, completion rates, and performance analytics.</li>
      </ul>
      <p><a href="${SITE_URL}/projects/scorm-lms-platform">Read the LMS platform case study →</a></p>
    `,
    author: [feedMetadata.author],
    date: new Date("2024-02-10T11:00:00Z"),
    image: `${SITE_URL}/assets/og/scorm-lms-platform.png`,
    category: [
      { name: "Case Study" },
      { name: "E-Learning" },
      { name: "SCORM" },
      { name: "React" },
      { name: "Twilio" },
      { name: "Payment Gateways" },
    ],
  },
  {
    title: "Professional Career & Engineering History at Infosys & Krishworks",
    id: `${SITE_URL}/experience`,
    link: `${SITE_URL}/experience`,
    description:
      "Detailed career history of Pratham Agrawal as an Associate Consultant at Infosys and System Software Engineer at Krishworks Technology Labs.",
    content: `
      <h2>Career Trajectory & Technical Leadership</h2>
      <p>Pratham Agrawal has over 4 years of professional experience across IT consulting, enterprise ServiceNow engineering, and modern web application development.</p>
      <h3>Professional Timeline:</h3>
      <ul>
        <li><strong>Infosys (Nov 2024 — Present):</strong> Associate Consultant leading ServiceNow AI transformations, GenAI solutions, Now Assist skills, and complex integration projects.</li>
        <li><strong>Krishworks Technology (Jun 2022 — Nov 2024):</strong> System Software Engineer spearheading core SaaS products including Hopa Menu and the SCORM LMS platform.</li>
      </ul>
      <p><a href="${SITE_URL}/experience">View detailed career history and accomplishments →</a></p>
    `,
    author: [feedMetadata.author],
    date: new Date("2024-11-01T08:00:00Z"),
    image: `${SITE_URL}/assets/og/experience.png`,
    category: [
      { name: "Career" },
      { name: "Infosys" },
      { name: "ServiceNow" },
      { name: "Consulting" },
    ],
  },
  {
    title: "About Pratham Agrawal — ServiceNow Developer & AI Engineer",
    id: `${SITE_URL}/about`,
    link: `${SITE_URL}/about`,
    description:
      "Background narrative, technical skills matrix, educational foundation, and engineering philosophy of Pratham Agrawal.",
    content: `
      <h2>About Pratham Agrawal</h2>
      <p>Based in Mumbai, India, Pratham Agrawal is a ServiceNow & AI Engineer passionate about intelligent automation, LLM workflows, and modern web applications.</p>
      <h3>Technical Mastery:</h3>
      <ul>
        <li><strong>ServiceNow:</strong> AI Agent Studio, Now Assist, Glide APIs, Flow Designer, Integration Hub, UI Builder, ATF, Service Portal.</li>
        <li><strong>AI & ML:</strong> GenAI, Agentic AI, Prompt Engineering, Moveworks, LLM Orchestration, LangChain concepts.</li>
        <li><strong>Web Engineering:</strong> Next.js, React, Node.js, Express, Firebase, GCP, REST APIs, Tailwind CSS.</li>
      </ul>
      <p><a href="${SITE_URL}/about">Learn more about Pratham Agrawal →</a></p>
    `,
    author: [feedMetadata.author],
    date: new Date("2024-01-01T00:00:00Z"),
    image: `${SITE_URL}/assets/og/about.png`,
    category: [
      { name: "About" },
      { name: "Biography" },
      { name: "Skills" },
      { name: "Portfolio" },
    ],
  },
];

module.exports = {
  feedMetadata,
  feedItems,
};
