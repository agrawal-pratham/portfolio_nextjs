const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const width = 1200;
const height = 630;

const pages = [
  {
    fileName: 'home.png',
    badge: 'agrawalpratham.in • Portfolio',
    badgeColor: '#10b981',
    title: 'Pratham Agrawal',
    subtitle: 'ServiceNow & AI Engineer',
    desc1: 'Specializing in GenAI, Agentic AI, Now Assist, AI Agent Studio & Glide APIs.',
    desc2: 'Associate Consultant at Infosys • 4+ Years Experience • Mumbai, India',
    pills: ['ServiceNow', 'GenAI', 'Agentic AI', 'Now Assist', 'Next.js'],
    portraitType: 'person'
  },
  {
    fileName: 'about.png',
    badge: 'agrawalpratham.in • About',
    badgeColor: '#38bdf8',
    title: 'About Pratham Agrawal',
    subtitle: 'ServiceNow Developer & AI Engineer',
    desc1: 'B.Sc. Computer Science • Associate Consultant at Infosys.',
    desc2: 'Passionate about intelligent automation, LLM workflows, and modern web apps.',
    pills: ['Background', 'Infosys', 'Krishworks', 'SIES College', 'Full-Stack'],
    portraitType: 'person'
  },
  {
    fileName: 'experience.png',
    badge: 'agrawalpratham.in • Career',
    badgeColor: '#a855f7',
    title: 'Work Experience',
    subtitle: 'Enterprise Architecture & Cloud Systems',
    desc1: 'Associate Consultant at Infosys (4+ Years) & Ex-Krishworks Technologies.',
    desc2: 'Delivering ServiceNow Now Assist, Agent Studio, and high-impact web apps.',
    pills: ['Infosys', 'ServiceNow', 'Krishworks', 'Enterprise IT', 'Consulting'],
    portraitType: 'person'
  },
  {
    fileName: 'projects.png',
    badge: 'agrawalpratham.in • Showcase',
    badgeColor: '#f59e0b',
    title: 'Featured Projects',
    subtitle: 'SaaS Platforms, AI Agents & Web Systems',
    desc1: 'Production platforms built with Next.js, Node.js, Firebase, and ServiceNow.',
    desc2: 'Proven measurable impact on performance, user engagement, and workflow speed.',
    pills: ['SaaS', 'Case Studies', 'Next.js', 'ServiceNow', 'Full-Stack'],
    portraitType: 'person'
  },
  {
    fileName: 'servicenow.png',
    badge: 'agrawalpratham.in • Expertise',
    badgeColor: '#10b981',
    title: 'ServiceNow Architecture',
    subtitle: 'Now Assist, Agent Studio & Glide APIs',
    desc1: 'Custom workflow automation, Flow Designer, UI Builder, and Integration Hub.',
    desc2: 'Deep enterprise ITSM & ITIL alignment with secure, high-scale execution.',
    pills: ['Now Assist', 'Agent Studio', 'Glide APIs', 'Flow Designer', 'ITSM'],
    portraitType: 'person'
  },
  {
    fileName: 'ai.png',
    badge: 'agrawalpratham.in • AI Engineering',
    badgeColor: '#8b5cf6',
    title: 'Artificial Intelligence & GenAI',
    subtitle: 'Agentic AI, LLMs & Moveworks',
    desc1: 'Autonomous agentic workflows, prompt architecture, and enterprise AI copilots.',
    desc2: 'Bridging generative AI models with ServiceNow enterprise operations.',
    pills: ['Agentic AI', 'GenAI', 'Moveworks', 'LLMs', 'Automation'],
    portraitType: 'person'
  },
  {
    fileName: 'resume.png',
    badge: 'agrawalpratham.in • CV',
    badgeColor: '#06b6d4',
    title: 'Resume & Credentials',
    subtitle: 'Pratham Agrawal — ServiceNow & AI Engineer',
    desc1: 'Comprehensive summary of experience, enterprise achievements, and skills.',
    desc2: 'Associate Consultant at Infosys • Mumbai, Maharashtra, India.',
    pills: ['Infosys', 'Experience', 'Technical Skills', 'Education', 'Achievements'],
    portraitType: 'person'
  },
  {
    fileName: 'restaurant-discovery-platform.png',
    badge: 'agrawalpratham.in • Case Study',
    badgeColor: '#f97316',
    title: 'Restaurant Discovery Platform',
    subtitle: 'SaaS & NFC Food Ordering System',
    desc1: 'Engineered for Israeli F&B market: digital menus, live orders.',
    desc2: 'React to Next.js migration: +30% speed and +10% engagement.',
    pills: ['Next.js', 'Node.js', 'Express', 'Firebase', 'GCP', 'Tailwind'],
    portraitType: 'project-zostel'
  },
  {
    fileName: 'scorm-lms-platform.png',
    badge: 'agrawalpratham.in • Case Study',
    badgeColor: '#ec4899',
    title: 'SCORM-Based LMS Platform',
    subtitle: '6-Portal EdTech & E-Learning System',
    desc1: 'SCORM player, Twilio real-time messaging & multi-portal auth.',
    desc2: 'WiPay & Razorpay payments with real-time student analytics.',
    pills: ['React.js', 'SCORM', 'Twilio', 'WiPay', 'Node.js', 'Redux'],
    portraitType: 'project-tech'
  }
];

function escapeXml(unsafe) {
  return unsafe.replace(/[<>&'"]/g, function (c) {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
    }
  });
}

async function run() {
  const outDir = path.join(__dirname, '../public/assets/og');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  // Pre-load person portrait
  const portraitHeight = 520;
  const personBuffer = await sharp('public/assets/png/me_bg_remove.png')
    .resize(null, portraitHeight, { fit: 'inside' })
    .toBuffer();
  const personMeta = await sharp(personBuffer).metadata();

  // Pre-load project images if available
  let zostelBuffer = null;
  if (fs.existsSync('public/assets/png/zostel_clone.png')) {
    zostelBuffer = await sharp('public/assets/png/zostel_clone.png')
      .resize(460, 290, { fit: 'cover' })
      .toBuffer();
  }

  let techBuffer = null;
  if (fs.existsSync('public/assets/png/tech_solution.png')) {
    techBuffer = await sharp('public/assets/png/tech_solution.png')
      .resize(460, 290, { fit: 'cover' })
      .toBuffer();
  }

  for (const p of pages) {
    let pillOffset = 80;
    const pillElements = p.pills.map((pill) => {
      const pillWidth = pill.length * 9.5 + 28;
      const el = `
        <rect x="${pillOffset}" y="470" width="${pillWidth}" height="36" rx="18" fill="#1e293b" stroke="#334155" stroke-width="1" />
        <text x="${pillOffset + pillWidth / 2}" y="493" font-family="Segoe UI, -apple-system, sans-serif" font-size="14" font-weight="500" fill="#e2e8f0" text-anchor="middle">${escapeXml(pill)}</text>
      `;
      pillOffset += pillWidth + 12;
      return el;
    }).join('\n');

    const badgeWidth = p.badge.length * 8.5 + 32;

    const svg = `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0a0e17" />
          <stop offset="45%" stop-color="#101726" />
          <stop offset="100%" stop-color="#182234" />
        </linearGradient>
        <radialGradient id="glow" cx="85%" cy="30%" r="65%">
          <stop offset="0%" stop-color="${p.badgeColor}" stop-opacity="0.22" />
          <stop offset="100%" stop-color="${p.badgeColor}" stop-opacity="0" />
        </radialGradient>
      </defs>

      <!-- Background -->
      <rect width="${width}" height="${height}" fill="url(#bg)" />
      <rect width="${width}" height="${height}" fill="url(#glow)" />

      <!-- Inner Border Box -->
      <rect x="36" y="36" width="1128" height="558" rx="20" fill="none" stroke="#2a374d" stroke-width="1.5" />

      <!-- Badge -->
      <rect x="76" y="76" width="${badgeWidth}" height="36" rx="18" fill="#162032" stroke="${p.badgeColor}" stroke-width="1" stroke-opacity="0.6" />
      <text x="${76 + badgeWidth / 2}" y="99" font-family="Segoe UI, -apple-system, sans-serif" font-size="14" font-weight="600" fill="${p.badgeColor}" text-anchor="middle">${escapeXml(p.badge)}</text>

      <!-- Title -->
      <text x="76" y="180" font-family="Segoe UI, -apple-system, sans-serif" font-size="46" font-weight="700" fill="#f8fafc">
        ${escapeXml(p.title)}
      </text>

      <!-- Subtitle -->
      <text x="76" y="240" font-family="Segoe UI, -apple-system, sans-serif" font-size="28" font-weight="600" fill="#94a3b8">
        ${escapeXml(p.subtitle)}
      </text>

      <!-- Descriptions -->
      <text x="76" y="330" font-family="Segoe UI, -apple-system, sans-serif" font-size="20" font-weight="400" fill="#cbd5e1">
        ${escapeXml(p.desc1)}
      </text>
      <text x="76" y="366" font-family="Segoe UI, -apple-system, sans-serif" font-size="20" font-weight="400" fill="#94a3b8">
        ${escapeXml(p.desc2)}
      </text>

      <!-- Pills -->
      ${pillElements}
    </svg>
    `;

    const composites = [];

    if (p.portraitType === 'person') {
      composites.push({
        input: personBuffer,
        left: 1200 - personMeta.width - 50,
        top: 630 - personMeta.height, // anchors cleanly to bottom
      });
    } else if (p.portraitType === 'project-zostel' && zostelBuffer) {
      // Rounded card overlay for project screenshot
      const roundedZostel = await sharp(zostelBuffer)
        .composite([{
          input: Buffer.from(`
            <svg width="460" height="290">
              <rect width="460" height="290" rx="16" fill="#fff" />
            </svg>
          `),
          blend: 'dest-in'
        }])
        .toBuffer();

      composites.push({
        input: roundedZostel,
        left: 710,
        top: 170,
      });
    } else if (p.portraitType === 'project-tech' && techBuffer) {
      const roundedTech = await sharp(techBuffer)
        .composite([{
          input: Buffer.from(`
            <svg width="460" height="290">
              <rect width="460" height="290" rx="16" fill="#fff" />
            </svg>
          `),
          blend: 'dest-in'
        }])
        .toBuffer();

      composites.push({
        input: roundedTech,
        left: 710,
        top: 170,
      });
    }

    await sharp(Buffer.from(svg))
      .composite(composites)
      .png({ quality: 95 })
      .toFile(path.join(outDir, p.fileName));

    console.log(`Generated ${p.fileName}`);
  }

  // Remove test file if exists
  const testFile = path.join(outDir, 'test_home.png');
  if (fs.existsSync(testFile)) fs.unlinkSync(testFile);

  console.log('All 9 OG images generated successfully!');
}

run().catch(console.error);
