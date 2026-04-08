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
  { label: "Contact", href: "#contact", id: "contact" },
]

export const heroData = {
  title: [
    "I craft",
    "cinematic interfaces",
    "for products that want to feel unforgettable.",
  ],
  description:
    "Frontend engineering, interaction design, and motion-led product surfaces built to help ambitious brands and products feel more distinct.",
  primaryCta: { label: "Start a project", href: "#contact" },
  secondaryCta: { label: "Explore projects", href: "#projects" },
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
    "I focus on product interfaces that feel premium at first glance, then keep earning trust through clarity, structure, and production-ready frontend execution.",
  spotlight:
    "The best work happens where visual direction, interaction design, and serious frontend craft are treated as one discipline instead of separate layers.",
  stats: [
    { value: "4", label: "Flagship case studies" },
    { value: "3D + Motion", label: "Experience design bias" },
    { value: "End-to-end", label: "Build ownership" },
  ],
  paragraphs: [
    "I care about interfaces that catch attention quickly but never lose usability once the motion settles and the details need to carry the experience.",
    "That usually means working across product positioning, layout systems, interaction design, and frontend architecture together so the final result feels cohesive.",
    "My goal is simple: make the work feel intentional, modern, and strong enough to ship without becoming fragile after launch.",
  ],
  practices: [
    {
      title: "Clear visual hierarchy",
      text: "Every section should guide attention fast and keep the message readable before any effect starts competing with the content.",
    },
    {
      title: "Motion with purpose",
      text: "Animation should reinforce structure, depth, and confidence instead of becoming decoration that weakens the product story.",
    },
    {
      title: "Frontend built to ship",
      text: "The final build has to stay modular, responsive, and maintainable because premium UI only matters when the engineering holds up.",
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
  { label: "Next.js", group: "Frontend" },
  { label: "Framer Motion", group: "Motion" },
  { label: "Three.js", group: "Motion" },
  { label: "WebGL", group: "Motion" },
  { label: "GSAP", group: "Motion" },
  { label: "Tailwind CSS", group: "Frontend" },
  { label: "TypeScript", group: "Frontend" },
  { label: "Node.js", group: "Backend" },
  { label: "Prisma", group: "Backend" },
  { label: "GraphQL", group: "Backend" },
  { label: "MongoDB", group: "Backend" },
  { label: "PostgreSQL", group: "Backend" },
  { label: "OpenAI API", group: "AI" },
  { label: "Design Systems", group: "Design" },
  { label: "UI/UX", group: "Design" },
  { label: "3D Modeling", group: "Motion" },
  { label: "Interaction Design", group: "Design" },
]

export const experienceData = [
  {
    year: "2024",
    title: "Wandrly Product Build",
    body: "Built a modern trip-planning product shaped around itinerary depth, collaboration roles, and a more complete planning workspace.",
  },
  {
    year: "2025",
    title: "AI Tooling Experiments",
    body: "Explored developer-facing AI workflows and contextual assistance patterns through prototypes like DevCompanion.",
  },
  {
    year: "2026",
    title: "Commerce and Dashboard Systems",
    body: "Focused on structured interface systems across storefronts, internal dashboards, and support workflow products.",
  },
  {
    year: "2027+",
    title: "Motion-Driven Frontend Craft",
    body: "Continuing to push deeper into motion-led frontend systems, immersive presentation, and premium product UI craft.",
  },
]

export const commandPaletteLinks = [
  { label: "Jump to Projects", href: "#projects" },
  { label: "Jump to Skills", href: "#skills" },
  { label: "Jump to Timeline", href: "#timeline" },
  { label: "Contact Rishu", href: "#contact" },
  { label: "Open Resume", href: resumeUrl, external: true },
]

export const contactData = {
  eyebrow: "Start a conversation",
  title: "Let's build something sharp, modern, and hard to ignore.",
  description:
    "Share the brief and I will help shape the right direction, interaction approach, and frontend scope for the build.",
  responsePromise: "Replies within 24 hours for serious project inquiries.",
  availability: "Available for freelance frontend, portfolio, SaaS, and product UI work.",
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
