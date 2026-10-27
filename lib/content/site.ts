/**
 * Verified content record.
 *
 * Primary source: assets/Al_Shahriar_Sowan_Resume_Professional...pdf
 * Project details were checked against the live sites and public repositories
 * (October 2026). Nothing here is invented.
 *
 * Naming note: the resume header reads "Al Shahriar Sowan" and also notes the
 * alternate spelling "Al Shahriar Sayon" (used on email, GitHub and portfolio).
 * The primary display name is kept as "Al Shahriar Sowan".
 *
 * Version note: the resume lists Seed Code CLI v8.2.5; the public repo and
 * installer page currently show v9.1.1. No version number is printed on the
 * site for that reason. The resume describes Seed Code Chat as Next.js /
 * TypeScript / Tailwind, while its public repo describes a vanilla JavaScript
 * frontend; the site therefore makes no framework claim for that project.
 */

export const profile = {
  name: "Al Shahriar Sowan",
  alternateName: "Al Shahriar Sayon",
  role: "AI Tools & Software Developer",
  resumeTitle: "Junior AI Tools & Software Developer",
  location: {
    short: "Gazipur, Bangladesh",
    full: "Board Bazar, Gazipur, Bangladesh",
  },
  availability: "Open to junior & internship roles",
  email: "alshahriarsayon425@gmail.com",
  summary:
    "Junior AI tools developer with hands-on IT deployment experience across 6 City Bank PLC branches. Built and released Seed Code CLI, a multi-provider AI coding assistant backed by 987 passing tests, plus a unified AI chat web app. Studying Computer Science & Technology at Dhaka Polytechnic Institute; open to junior and internship roles.",
  bio: [
    "I'm Al Shahriar Sowan, a junior AI tools and software developer based in Gazipur, Bangladesh. I build developer tools and interfaces around LLMs — a coding CLI with an autonomous agent mode, a unified chat app, and a local-first AI runtime.",
    "Most of the work sits where models meet tools: multi-provider integrations, tool calling, agent workflows and the interfaces that make them usable. The output is practical — a CLI that plans and verifies its own work, a chat app that keeps provider choice open, and a runtime that gives local models memory and retrieval.",
    "I'm studying Computer Science & Technology at Dhaka Polytechnic Institute, currently in my third semester. Alongside my studies, I worked on operating-system deployment and network setup for a six-branch bank rollout. I'm open to junior and internship roles.",
  ],
  links: {
    github: "https://github.com/Alshahriar-07",
    linkedin: "https://www.linkedin.com/in/alshahriarsowan",
    portfolio: "https://alshahriarsayon.vercel.app",
  },
  resume: {
    /**
     * The original PDF lives in assets/ and is never modified.
     * A byte-identical copy is served from public/ for the download action.
     */
    sourceFile: "assets/Al_Shahriar_Sowan_Resume_Professional...pdf",
    publicPath: "/Al-Shahriar-Sowan-Resume.pdf",
    downloadName: "Al-Shahriar-Sowan-Resume.pdf",
  },
  metaDescription:
    "Al Shahriar Sowan is an AI tools and software developer from Gazipur, Bangladesh, building developer tools and AI interfaces including Seed Code CLI and Seed Code Chat.",
} as const;

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const siteSections = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Experience", href: "#experience" },
  { label: "Studio", href: "#studio" },
  { label: "Contact", href: "#contact" },
] as const;

export type ShowcaseProject = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  facts: ReadonlyArray<{ label: string; value: string }>;
  status: string;
  statusDetail: string;
  liveUrl?: string;
  repoUrl: string;
  preview: {
    src: string;
    alt: string;
    domain: string;
    caption: string;
  };
  layout: "wide" | "preview-left" | "preview-right";
};

export const showcaseProjects: ShowcaseProject[] = [
  {
    slug: "seedcode-cli",
    name: "Seed Code CLI",
    category: "AI coding agent / CLI",
    summary:
      "A terminal-based AI coding assistant with two modes. Chat Mode answers and explains; Agent Mode inspects a project, plans, edits, runs commands and verifies the result — with project memory and permission gates around every tool.",
    facts: [
      { label: "Built with", value: "Python · PowerShell installer" },
      { label: "Modes", value: "Chat · Agent" },
      { label: "Release", value: "Windows installer" },
    ],
    status: "Live",
    statusDetail: "Public release",
    liveUrl: "https://seedcode-cli.vercel.app",
    repoUrl: "https://github.com/Alshahriar-07/seedcode-cli",
    preview: {
      src: "/projects/seedcode-cli.webp",
      alt: "Seed Code CLI installer page with a PowerShell install command and Windows download options",
      domain: "seedcode-cli.vercel.app",
      caption: "Live interface · Oct 2026",
    },
    layout: "wide",
  },
  {
    slug: "seedcode-chat",
    name: "Seed Code Chat",
    category: "AI chat / web + Android",
    summary:
      "One interface for multiple AI providers and models. Streaming replies, markdown and code rendering, conversation history and model controls — shipped as a web app with an Android build alongside it.",
    facts: [
      { label: "Platforms", value: "Web · Android" },
      { label: "Providers", value: "Multi-provider" },
      { label: "Interface", value: "Streaming chat" },
    ],
    status: "Live",
    statusDetail: "Web app and Android build",
    liveUrl: "https://seedcode-chat.vercel.app",
    repoUrl: "https://github.com/Alshahriar-07/seedcode-chat",
    preview: {
      src: "/projects/seedcode-chat.webp",
      alt: "Seed Code Chat interface with a sidebar, model selector and empty chat state",
      domain: "seedcode-chat.vercel.app",
      caption: "Live interface · Oct 2026",
    },
    layout: "preview-left",
  },
  {
    slug: "intllm",
    name: "IntLLM",
    category: "Local AI runtime",
    summary:
      "A local-first AI runtime built around Ollama models. Layered memory, opt-in live retrieval, browser and tool access, and an OpenAI-compatible local API sit around the model instead of replacing it.",
    facts: [
      { label: "Built with", value: "Python · FastAPI · pgvector" },
      { label: "Models", value: "Local via Ollama" },
      { label: "Interface", value: "Web UI · local API" },
    ],
    status: "Live",
    statusDetail: "v1.0.2 production release",
    liveUrl: "https://intllm.vercel.app",
    repoUrl: "https://github.com/Alshahriar-07/INTLLM",
    preview: {
      src: "/projects/intllm.webp",
      alt: "IntLLM landing page with local AI headline, download actions and terminal install command",
      domain: "intllm.vercel.app",
      caption: "Live interface · Oct 2026",
    },
    layout: "preview-right",
  },
  {
    slug: "dorkey",
    name: "Dorkey",
    category: "Typing tool / browser",
    summary:
      "A free browser typing test with 15-, 30-, 60- and 120-second runs, 35 passages, live WPM, CPM, accuracy and error tracking, plus a rank for every session.",
    facts: [
      { label: "Built with", value: "HTML · CSS · Vanilla JS" },
      { label: "Modes", value: "15 / 30 / 60 / 120 s" },
      { label: "Storage", value: "Browser-only results" },
    ],
    status: "Live",
    statusDetail: "Free public web tool",
    liveUrl: "https://dorkey.vercel.app",
    repoUrl: "https://github.com/Alshahriar-07/Dorkey",
    preview: {
      src: "/projects/dorkey.webp",
      alt: "Dorkey typing test landing page with a live practice session preview",
      domain: "dorkey.vercel.app",
      caption: "Live interface · Oct 2026",
    },
    layout: "wide",
  },
];

export const secondaryProjects = [
  {
    name: "OneClickMC",
    description:
      "Windows Minecraft modpack installer with version checks, verified downloads and a backup-and-rollback path. Phase 1 is in development.",
    status: "In development",
    repoUrl: "https://github.com/Alshahriar-07/OneClickMC",
  },
  {
    name: "Hmouse",
    description:
      "Windows cursor control using a webcam and hand gestures, built with Python, MediaPipe and OpenCV.",
    status: "Built",
    repoUrl: "https://github.com/Alshahriar-07/Hmouse",
  },
] as const;

export const expertise = [
  {
    name: "AI tools & agents",
    description:
      "Multi-provider LLM integration, tool calling and agent workflows. I build around the model — routing requests, giving it tools, and keeping state across a task.",
    tags: [
      "LLM integration",
      "Tool calling",
      "Agent workflows",
      "Task orchestration",
      "OpenRouter",
      "Ollama",
    ],
  },
  {
    name: "Software & web",
    description:
      "The product layer around the model: CLI surfaces, chat interfaces, APIs, authentication and deployment. Python and Supabase appear across the work; TypeScript, Next.js, Node.js and Tailwind are current learning work.",
    tags: ["Python", "HTML / CSS", "Supabase", "API integration", "Git / GitHub", "Vercel"],
  },
  {
    name: "Systems & deployment",
    description:
      "Windows installation, configuration and deployment testing from a six-branch bank rollout — plus the networking and troubleshooting that comes with putting machines into service.",
    tags: [
      "Windows",
      "Networking",
      "Deployment testing",
      "Troubleshooting",
      "GitHub Releases",
    ],
  },
  {
    name: "Linux & privacy",
    description:
      "Hands-on use of privacy-focused and rolling-release systems — Tails, Kali and Arch — plus familiarity with Tor network access.",
    tags: ["Kali Linux", "Arch Linux", "Tails", "Tor network access"],
  },
] as const;

export const currentlyLearning = [
  "TypeScript",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "System design",
  "Agent and tool-calling layers",
] as const;

export const studio = {
  name: "Eagox Studio",
  url: "https://eagoxstudio.vercel.app",
  urlLabel: "eagoxstudio.vercel.app",
  description:
    "Eagox Studio is the independent label I design, build and release my software under. It runs across everything in this portfolio: the same practice behind a terminal coding agent, a multi-provider chat app, a local AI runtime and a browser typing test.",
  note: "A solo practice based in Gazipur, Bangladesh.",
} as const;

export const independentWork = {
  title: "Independent software practice",
  org: "Eagox Studio",
  period: "Ongoing",
  type: "Independent",
  context: "Solo product work",
  points: [
    "Designed and released Seed Code CLI, a multi-provider AI coding assistant with Chat and Agent modes.",
    "Built Seed Code Chat, a unified AI chat interface for the web and Android.",
    "Developed IntLLM, a local-first runtime around Ollama, and Dorkey, a browser typing test.",
  ],
} as const;

/**
 * The rest of the resume, kept as a structured record for the experience and
 * education sections.
 *
 * Skills note: the PDF lays its skills table out in columns, and a few rows sit
 * between labelled groups. The grouping below follows the labels as printed;
 * "Windows OS installation..." is listed under Systems & IT.
 */
export const resumeFacts = {
  skills: [
    {
      group: "AI & LLM",
      note: "Used in projects",
      items: [
        "LLM integration (multi-provider)",
        "Tool calling",
        "AI agent workflows",
        "Task orchestration",
        "Local models (Ollama)",
        "OpenRouter",
      ],
    },
    {
      group: "Systems & IT",
      items: [
        "Python",
        "HTML",
        "CSS",
        "Supabase (database and authentication)",
        "API integration",
        "Git",
        "GitHub",
        "GitHub Releases",
        "VS Code",
        "Vercel",
        "Windows OS installation and configuration",
        "Deployment testing",
        "Networking",
        "Troubleshooting",
      ],
    },
    {
      group: "Linux & Privacy",
      items: [
        "Hands-on use of Kali Linux, Arch Linux and Tails (privacy-focused OS)",
        "Familiar with Tor network access",
      ],
    },
    {
      group: "Currently learning",
      items: [
        "TypeScript",
        "Next.js",
        "Node.js",
        "Tailwind CSS",
        "System design",
        "Agent and tool-calling layers around LLMs",
      ],
    },
  ],
  experience: [
    {
      title: "Junior System Deployment Engineer (Contract)",
      company: "TriTech Computers",
      client: "City Bank PLC",
      period: "May 2026 – Oct 2026",
      type: "Contract",
      context: "6 branches",
      points: [
        "Installed and configured customized operating systems on computers across 6 City Bank PLC branches under a contract agreement, testing each machine to confirm a successful deployment.",
        "Connected deployed computers to the client's secure network environment and verified connectivity.",
        "Troubleshot setup issues during the rollout so machines were ready for use.",
      ],
    },
  ],
  education: [
    {
      credential: "Diploma in Engineering, Computer Science & Technology",
      institution: "Dhaka Polytechnic Institute, Tejgaon, Dhaka",
      detail: "Currently in 3rd semester",
      period: "Sept 2025 – Present",
    },
    {
      credential: "Secondary School Certificate (SSC)",
      institution: "Hashil Higher Secondary School, Mymensingh Board",
      detail: "GPA 4.72 / 5.00",
      period: "2025",
    },
  ],
} as const;
