const resumeUrl = new URL("../../asset/Rishu-Resume.pdf", import.meta.url).href
const ecommerceImage = new URL("../../asset/ecommerce.png", import.meta.url).href
const helpdeskImage = new URL("../../asset/helpdesk.png", import.meta.url).href
const wandrlyImage = new URL("../../asset/wandrly.png", import.meta.url).href
const devcompanionImage = new URL("../../asset/devcompanion.png", import.meta.url).href

export const siteMeta = {
  name: "Rishu Raj",
  brand: "Rishu.dev",
  role: "Creative Frontend Engineer and Full-Stack Product Builder",
  location: "New Delhi, India",
  email: "rishut681@gmail.com",
  phone: "+91 8882905323",
  resumeUrl,
  github: "https://github.com/Rishut681",
  linkedin: "https://www.linkedin.com/in/rishu-raj-322637253/",
  availability: "Available for premium freelance projects and product collaborations",
}

export const navItems = [
  { label: "Home", href: "#home", id: "home" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Timeline", href: "#timeline", id: "timeline" },
  { label: "Testimonials", href: "#testimonials", id: "testimonials" },
  { label: "Contact", href: "#contact", id: "contact" },
]

export const heroData = {
  eyebrow: "Museum-grade portfolio experience",
  title: [
    "I craft",
    "cinematic interfaces",
    "for products that want to feel unforgettable.",
  ],
  trustLine:
    "Strategy, motion, 3D atmosphere, and production-ready frontend execution in one end-to-end workflow.",
  description:
    "This portfolio is designed like a digital exhibition: scroll-driven storytelling, tactile interactions, and premium UI systems shaped to convert freelance clients who care about both taste and implementation depth.",
  quickStats: [
    { value: "4", label: "Featured product stories" },
    { value: "3D", label: "Interactive stage layers" },
    { value: "60fps", label: "Targeted motion performance" },
  ],
  proofStrip: ["Next.js", "GSAP ScrollTrigger", "Three.js", "Framer Motion", "React Spring"],
  primaryCta: { label: "Start a project", href: "#contact" },
  secondaryCta: { label: "Explore projects", href: "#projects" },
  resumeCta: { label: "Resume", href: resumeUrl },
  floatingCards: [
    { title: "Narrative-led", body: "Case studies unfold like product stories, not stacked screenshots." },
    { title: "Motion systems", body: "Every interaction is designed to feel deliberate, elastic, and alive." },
    { title: "Built to ship", body: "Beautiful interfaces backed by scalable frontend architecture." },
  ],
}

export const aboutData = {
  eyebrow: "Creative engineering",
  title: "I design like a storyteller and build like an owner.",
  description:
    "The work lives in the overlap between bold visual direction and dependable implementation, so the final result feels distinctive without becoming fragile.",
  spotlight:
    "I care most about interfaces that earn attention fast, then keep proving their value through clarity, motion discipline, and real frontend depth.",
  stats: [
    { value: "4", label: "Flagship case studies" },
    { value: "3D + Motion", label: "Experience design bias" },
    { value: "End-to-end", label: "Build ownership" },
  ],
  paragraphs: [
    "I like product surfaces that feel immersive from the first second but still communicate value clearly. That balance matters more than decoration.",
    "Most of my best work happens where experience design, frontend systems, and product thinking overlap: landing pages, SaaS experiences, interactive tools, and branded portfolio environments.",
    "My process is collaborative and highly visual, but the build quality stays serious. Motion, performance, maintainability, and accessibility are part of the design conversation from the start.",
  ],
  competencies: [
    "Immersive product interfaces",
    "3D-enhanced web experiences",
    "High-conversion landing systems",
    "React architecture",
    "Applied AI product UX",
    "Performance-focused implementation",
  ],
  practices: [
    {
      title: "Narrative before ornament",
      text: "Every screen should guide attention, explain value, and create momentum before any visual effect starts asking for attention.",
    },
    {
      title: "Motion with product purpose",
      text: "Animations should reinforce hierarchy, depth, and trust, not just make a layout feel busy or expensive.",
    },
    {
      title: "Build quality that survives launch",
      text: "The final interface has to stay modular, performant, and editable, because premium visuals only matter when the foundation is serious.",
    },
  ],
}

export const projectsData = [
  {
    id: "wandrly",
    title: "Wandrly",
    category: "AI Travel Platform",
    summary:
      "A full product workspace for intelligent trip planning with collaboration, budgeting, packing, journaling, and public sharing.",
    role: "Full-stack product build, AI workflow design, app architecture",
    problem:
      "Travel planning breaks down when itinerary generation, budgeting, route review, documents, and collaboration all live in separate tools.",
    solution:
      "Wandrly unifies AI trip generation, route review, maps, budget tracking, packing, documents, journals, public sharing, and role-based collaboration inside one coherent product.",
    impact:
      "This is the strongest product case study because it shows real SaaS thinking: multi-role workflows, AI integration, modern auth, shareability, and deep feature architecture.",
    metrics: [
      { value: "AI", label: "Trip generation" },
      { value: "Roles", label: "Owner, editor, viewer" },
      { value: "Workspace", label: "Unified planning system" },
    ],
    tech: ["Next.js 15", "TypeScript", "Prisma", "PostgreSQL", "NextAuth", "OpenAI", "Leaflet"],
    githubLink: "https://github.com/Rishu-tripzygo/TripPlanner",
    liveDemoLink: "https://trip-planner-wandrly.vercel.app",
    image: wandrlyImage,
    accent: "cyan",
    theme: ["#63e6ff", "#0d2230"],
    beforeAfter: {
      beforeLabel: "Fragmented planning",
      afterLabel: "Unified trip workspace",
    },
  },
  {
    id: "devcompanion",
    title: "DevCompanion",
    category: "AI Developer Tool",
    summary:
      "A code-mentor prototype pairing an editor-centric frontend with backend AI assistance and snapshot-aware workflows.",
    role: "Product concept, full-stack architecture, tooling UX",
    problem:
      "Developers often leave their working context to ask for help, which breaks focus and makes mentorship feel disconnected from the code itself.",
    solution:
      "DevCompanion blends a Monaco-driven editing experience with AI-assisted backend services so guidance can happen closer to the work.",
    impact:
      "It proves applied AI product thinking beyond chat wrappers by focusing on contextual workflows and interface clarity.",
    metrics: [
      { value: "Monaco", label: "Editor foundation" },
      { value: "AI", label: "Mentor prototype" },
      { value: "Split", label: "Client + server architecture" },
    ],
    tech: ["Next.js", "Express", "Monaco", "MongoDB", "OpenAI-ready"],
    githubLink: "https://github.com/Rishut681/DevCompanion",
    liveDemoLink: "",
    image: devcompanionImage,
    accent: "metal",
    theme: ["#d9c5a0", "#1d1712"],
    beforeAfter: {
      beforeLabel: "Tool switching",
      afterLabel: "Contextual assistance",
    },
  },
  {
    id: "ecommerce",
    title: "Nexa Commerce",
    category: "Full-Stack Commerce",
    summary:
      "A MERN commerce build focused on trust, merchandising clarity, and admin-side management flexibility.",
    role: "Frontend architecture, product UX, backend integration",
    problem:
      "The store experience needed stronger purchase confidence, a cleaner cart journey, and a better foundation for scaling operations.",
    solution:
      "I designed a polished storefront flow with authentication, cart logic, responsive browsing, and admin-facing management capability.",
    impact:
      "This case study demonstrates commercial UX thinking and shows I can move between buyer experience and operational tooling.",
    metrics: [
      { value: "MERN", label: "Full-stack delivery" },
      { value: "Auth", label: "Secure user flows" },
      { value: "Responsive", label: "Commerce-ready UI" },
    ],
    tech: ["React", "Node", "MongoDB", "JWT", "Styled Components", "Framer Motion"],
    githubLink: "https://github.com/Rishut681/E-commerce",
    liveDemoLink: "https://nexa-ecommerce.vercel.app/",
    image: ecommerceImage,
    accent: "ember",
    theme: ["#ff8d57", "#2b1713"],
    beforeAfter: {
      beforeLabel: "Generic storefront",
      afterLabel: "Branded shopping flow",
    },
  },
  {
    id: "helpdesk",
    title: "Helpdesk System",
    category: "Workflow Dashboard",
    summary:
      "A routed support operations app with dashboard views, auth screens, ticket management flows, and persistent local-state behavior.",
    role: "Frontend system design, workflow UX, application structure",
    problem:
      "Internal tools often feel unfinished or static, even though support teams need clarity, state, and usable task flows.",
    solution:
      "I built a multi-screen helpdesk experience with dashboard summaries, ticket creation, detail views, status handling, and simulated backend persistence.",
    impact:
      "It shows system-level UI thinking with multiple pages, CRUD flows, and app-state design instead of only marketing surfaces.",
    metrics: [
      { value: "CRUD", label: "Ticket workflows" },
      { value: "Routed", label: "Multi-screen app" },
      { value: "Persistent", label: "Local data layer" },
    ],
    tech: ["React", "Vite", "React Router", "CSS", "localStorage"],
    githubLink: "https://github.com/Rishut681/Helpdesk_app",
    liveDemoLink: "https://helpdesksite.netlify.app/",
    image: helpdeskImage,
    accent: "lime",
    theme: ["#b8cf65", "#172014"],
    beforeAfter: {
      beforeLabel: "Static assignment UI",
      afterLabel: "Interactive support workflow",
    },
  },
]

export const skillsData = [
  { label: "React", group: "Frontend" },
  { label: "TypeScript", group: "Frontend" },
  { label: "Three.js", group: "Motion" },
  { label: "GSAP", group: "Motion" },
  { label: "Framer Motion", group: "Motion" },
  { label: "Prisma", group: "Backend" },
  { label: "Node.js", group: "Backend" },
  { label: "Next.js", group: "Frontend" },
  { label: "MongoDB", group: "Backend" },
  { label: "PostgreSQL", group: "Backend" },
  { label: "OpenAI", group: "AI" },
  { label: "NextAuth", group: "Backend" },
  { label: "Tailwind", group: "Frontend" },
  { label: "UI Systems", group: "Design" },
]

export const workflowPillars = [
  {
    title: "Design with conviction",
    text: "Every section should feel intentionally art-directed instead of assembled from familiar portfolio templates.",
  },
  {
    title: "Animate with meaning",
    text: "Motion should reveal hierarchy, reinforce depth, and reward interaction without becoming visual noise.",
  },
  {
    title: "Build for delivery",
    text: "The codebase has to stay modular, editable, and resilient enough for real production work after the visual wow fades.",
  },
]

export const experienceData = [
  {
    year: "2026",
    title: "Wandrly Product Build",
    body: "Built a modern AI travel product with collaboration roles, shareable trip workspaces, and real planning utilities beyond itinerary generation.",
  },
  {
    year: "2025",
    title: "AI Tooling Experiments",
    body: "Explored developer-facing AI product interfaces and workflow design through prototypes like DevCompanion.",
  },
  {
    year: "2025",
    title: "Commerce and Dashboard Systems",
    body: "Focused on structured UX systems across storefronts, admin logic, and support workflow interfaces.",
  },
  {
    year: "Ongoing",
    title: "Motion-Driven Frontend Craft",
    body: "Pushing deeper into interactive storytelling, 3D atmosphere, and premium web presentation systems.",
  },
]

export const testimonialData = [
  {
    quote:
      "Rishu combines strong visual instinct with real implementation depth. The work never feels like surface-level design.",
    name: "Founder Perspective",
    role: "Product-led startup",
  },
  {
    quote:
      "What stands out is the ability to translate ambitious ideas into interfaces that still feel coherent and usable.",
    name: "Creative Collaborator",
    role: "Design and build workflow",
  },
  {
    quote:
      "There is a clear sense of craft in the motion, but the structure underneath is equally thoughtful.",
    name: "Client Feedback",
    role: "Premium web experience brief",
  },
]

export const commandPaletteLinks = [
  { label: "Jump to Projects", href: "#projects" },
  { label: "Jump to Skills", href: "#skills" },
  { label: "Jump to Timeline", href: "#timeline" },
  { label: "Jump to Testimonials", href: "#testimonials" },
  { label: "Contact Rishu", href: "#contact" },
  { label: "Open Resume", href: resumeUrl, external: true },
]

export const contactData = {
  eyebrow: "High-trust contact",
  title: "Let's build something sharp, immersive, and impossible to ignore.",
  description:
    "Whether you need a portfolio, SaaS marketing site, product interface, or a custom interactive web experience, I can help shape it from concept to polished build.",
  responsePromise: "Typical response time: within 24 hours.",
  availability: "Open to freelance, collaborations, and high-upside product work.",
  serviceFocus: [
    "Premium portfolio and personal brand experiences",
    "Interactive product marketing sites",
    "Motion-led frontend implementation",
    "AI-assisted product experiences",
  ],
}

export const contactFormConfig = {
  serviceId: "service_ig7k8e8",
  templateId: "template_1daujbk",
  publicKey: "sDCF2m2kH6koizTOF",
}

export const budgetMarks = [
  { value: 1500, label: "$1.5k" },
  { value: 3000, label: "$3k" },
  { value: 6000, label: "$6k" },
  { value: 10000, label: "$10k+" },
]

export const footerData = {
  kicker: "Freelance-ready",
  title: "Available to shape the next version of your digital presence.",
  blurb:
    "For teams and founders who want more than a good-looking page: stronger narrative, richer interaction, and production-grade delivery.",
}
