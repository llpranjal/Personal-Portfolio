// Everything on the site lives here. Numbers in `featured` are copied from
// each repository's README; keep them in sync if a README changes.

export type Link = { label: string; href: string };

export type Bar = {
  label: string;
  /** Plotted length. For a range, [low, high]. */
  value: number | [number, number];
  /** Text shown next to the bar. */
  display: string;
  /** The reference case the measured result is compared against. */
  baseline?: boolean;
};

export type BarGroup = {
  title: string;
  bars: Bar[];
};

export type Featured = {
  id: string;
  name: string;
  summary: string;
  points: string[];
  stack: string[];
  repo: string;
  result: string;
  groups: BarGroup[];
  caveat: string;
};

export type Role = {
  org: string;
  role: string;
  place: string;
  dates: string;
  points: string[];
};

export type SmallProject = {
  name: string;
  summary: string;
  stack: string[];
  repo: string;
};

export const PROFILE = {
  name: "Pranjal Kattel",
  email: "kattelpranjal01@gmail.com",
  lead: "I build systems software and data tools, then measure what they actually do.",
  intro:
    "Computer Science and Mathematics at the University of Maryland, graduating December 2026. Most recently a software engineer intern at Microsoft, working on Azure Storage reliability.",
  links: [
    { label: "GitHub", href: "https://github.com/llpranjal" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/pranjalkattel/" },
    { label: "Email", href: "mailto:kattelpranjal01@gmail.com" },
  ] satisfies Link[],
  instagram: { label: "Instagram", href: "https://www.instagram.com/pranjal.k05/" },
};

export const FEATURED: Featured[] = [
  {
    id: "mini-git",
    name: "mini-git",
    summary:
      "A small version-control system in Rust that writes Git's real loose-object format. Real Git can read repositories it creates, and it can read objects Git writes.",
    points: [
      "Ten commands, from init and add to diff, checkout, and branch, over SHA-1-addressed, zlib-compressed objects.",
      "113 tests, including 11 interoperability tests where Git reads its objects and git fsck --strict accepts the repository.",
    ],
    stack: ["Rust", "Cargo", "SHA-1", "zlib"],
    repo: "https://github.com/llpranjal/mini-git",
    result: "55.42× less storage than copying the directory",
    groups: [
      {
        title: "Storage for 4,000 file versions (200 files, 20 commits, 5% churn)",
        bars: [
          { label: "Directory-copy baseline", value: 13.08 * 1024, display: "13.08 MiB", baseline: true },
          { label: "mini-git object store", value: 241.8, display: "241.8 KiB" },
        ],
      },
    ],
    caveat:
      "Deduplication and compression combined, on a synthetic, text-heavy workload. Not a general compression claim.",
  },
  {
    id: "order-book",
    name: "Limit order book",
    summary:
      "Two C++17 price-time-priority order books, one a map of FIFO queues and one an array of price levels with pooled orders, compared on speed and memory.",
    points: [
      "Limit, market, and cancel orders: best price first, FIFO within a level, trades at the resting price.",
      "A differential test runs 50 seeds of 20,000 operations and compares trades, best prices, and resting orders after every step.",
    ],
    stack: ["C++17", "CMake"],
    repo: "https://github.com/llpranjal/limit-order-book",
    result: "2.2–2.3× faster adds and cancels, paid for in reserved memory",
    groups: [
      {
        title: "Mean speed-up of the array book over the map book (2,001-tick range)",
        bars: [
          { label: "Map book", value: 1, display: "1.00×", baseline: true },
          { label: "Array book, add", value: 2.2, display: "2.20×" },
          { label: "Array book, cancel", value: 2.34, display: "2.34×" },
        ],
      },
      {
        title: "Reserved price-level storage in the array book",
        bars: [
          { label: "2,001 ticks", value: 31, display: "≈31 KiB", baseline: true },
          { label: "200,001 ticks", value: 3125, display: "3,125 KiB" },
        ],
      },
    ],
    caveat:
      "Timings depend on hardware, compiler, and workload. Storage is the level arrays only, not total process memory.",
  },
  {
    id: "kv-cache",
    name: "PagedAttention KV-cache simulator",
    summary:
      "A C++17 request-level simulator comparing contiguous KV-cache reservations with fixed-size blocks allocated on demand, modeled on vLLM's PagedAttention.",
    points: [
      "Models request arrivals, one decoded token per step, FIFO admission with output headroom, and cache release on completion.",
      "12 seeded comparisons across ShareGPT-like, long-context, and bursty workloads; every request completed under both policies.",
    ],
    stack: ["C++17", "CMake", "Python"],
    repo: "https://github.com/llpranjal/vllm-paged-attention-simulator",
    result: "95.9–97.2% less internal waste, up to 1.19× simulated throughput",
    groups: [
      {
        title: "Average internal waste, contiguous allocation = 100",
        bars: [
          { label: "Contiguous reservation", value: 100, display: "100", baseline: true },
          { label: "Paged blocks", value: [2.8, 4.1], display: "2.8–4.1" },
        ],
      },
      {
        title: "Simulated throughput, generated tokens per step",
        bars: [
          { label: "Contiguous reservation", value: 1, display: "1.00×", baseline: true },
          { label: "Paged blocks, best case", value: 1.19, display: "up to 1.19×" },
        ],
      },
    ],
    caveat:
      "A reduction in wasted capacity, not in total KV-cache memory. Workloads are synthetic, and no GPU or attention kernel is modeled.",
  },
  {
    id: "market-making",
    name: "Options market-making simulator",
    summary:
      "A Python simulation of a market maker quoting one European call, comparing inventory skew and delta hedging on the same seeded price paths.",
    points: [
      "Black-Scholes pricing and Greeks, distance-based fill probabilities, delta-band hedging, and P&L split into spread, delta, gamma, theta, and hedge costs.",
      "Vectorized over 4,000 paths with NumPy; tests cover determinism, pricing identities, and finite-difference Greeks.",
    ],
    stack: ["Python", "NumPy", "SciPy"],
    repo: "https://github.com/llpranjal/options-market-making-simulator",
    result: "Skew plus a tight hedge cut P&L spread by 76% for a 4% lower mean",
    groups: [
      {
        title: "Standard deviation of P&L over 4,000 paths (mean P&L in brackets)",
        bars: [
          { label: "Constant spread", value: 17.06, display: "17.06 (14.31)", baseline: true },
          { label: "Inventory skew", value: 9.79, display: "9.79 (13.69)" },
          { label: "Skew and tight hedge", value: 4.02, display: "4.02 (13.72)" },
        ],
      },
    ],
    caveat:
      "One run of one model: seed 7, 25% volatility, no adverse selection. It doesn't show a generally best strategy.",
  },
];

export const EXPERIENCE: Role[] = [
  {
    org: "Microsoft",
    role: "Software Engineer Intern, Azure Storage",
    place: "Redmond, WA",
    dates: "May – Aug 2026",
    points: [
      "Built a reliability-triage pipeline over Kusto telemetry that ranks recurring storage I/O latency anomalies and infrastructure faults.",
      "Built diagnostic agents that turn the top-ranked failures into daily reports with root cause, severity, evidence, owner, and next steps, with schema and identity checks before anything is published.",
    ],
  },
  {
    org: "App Dev Club at UMD",
    role: "Software Engineer",
    place: "College Park, MD",
    dates: "Sep 2024 – May 2025",
    points: [
      "Built a full-stack data-quality platform for U.S. News & World Report covering 200K records across 2,200 institutions, with weighted z-score and Isolation Forest signals in a React front end over a Flask analysis service.",
      "Added on-demand analysis with cached notebook execution, outlier views, MAD heatmaps, and PDF reports for analysts reviewing ranking and survey data.",
    ],
  },
  {
    org: "National Institutes of Health",
    role: "Data Intern",
    place: "Gaithersburg, MD",
    dates: "May – Aug 2024",
    points: [
      "Deployed a Flask microservice with REST endpoints over a 20K-node Neo4j biomedical graph, with an LLM layer proposing missing ontology-field values across 15+ schemas.",
      "Contributed to the Bento terminology service: a Dockerized Neo4j development environment and Swagger API documentation.",
    ],
  },
];

export const OTHER_PROJECTS: SmallProject[] = [
  {
    name: "LocalApply",
    summary:
      "A Chrome extension that fills job applications from a profile stored in the browser, with a field-by-field preview and undo. No backend; adapters for Greenhouse, Lever, Ashby, and Workday.",
    stack: ["TypeScript", "Chrome extensions"],
    repo: "https://github.com/llpranjal/filly",
  },
  {
    name: "FindMyPhone",
    summary:
      "A macOS command-line tool that finds a nearby Bluetooth device by filtering noisy signal strength into warmer and colder. 26 deterministic checks.",
    stack: ["Swift", "Bluetooth LE"],
    repo: "https://github.com/llpranjal/FindMyPhone",
  },
  {
    name: "AlgoVisualizer",
    summary:
      "A terminal visualizer for merge, quick, heap, and bubble sort, with adjustable size and speed and a correctness test mode.",
    stack: ["C++17", "CMake"],
    repo: "https://github.com/llpranjal/AlgoVisualizer",
  },
  {
    name: "Face recognition prototype",
    summary:
      "An early webcam experiment: OpenCV face detection with a saved Keras classifier drawing names and confidence over each face.",
    stack: ["Python", "OpenCV", "Keras"],
    repo: "https://github.com/llpranjal/Facial-Attendance",
  },
];

export const EDUCATION = {
  school: "University of Maryland, College Park",
  degree: "B.S. in Computer Science and Mathematics",
  dates: "Graduating December 2026",
  detail: "Machine Learning specialization. GPA 3.79.",
  courses: [
    "systems and architecture",
    "compilers",
    "data structures and algorithms",
    "machine learning",
    "applied statistics",
    "probability theory",
    "linear algebra",
    "natural language processing",
  ],
};

export const SKILLS: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["Python", "C++", "TypeScript", "Rust", "SQL", "Java", "Swift", "x86 assembly"] },
  { group: "Tools", items: ["React", "Azure", "Linux", "Git", "CMake", "GDB", "Valgrind", "Pytest", "Docker"] },
  { group: "Data and ML", items: ["Kusto (KQL)", "Neo4j", "Pandas", "NumPy", "PyTorch", "scikit-learn"] },
];

export const ABOUT = [
  "I like systems, infrastructure, and performance work, and I'm also interested in ML and quantitative finance. Most of my side projects are small, well-tested versions of real systems, like a Git, an order book, or a KV-cache allocator, so I can explain every tradeoff in them.",
  "I'm looking for full-time software engineering roles after I graduate.",
];

export const OFF_THE_CLOCK: { name: string; note: string; href?: string }[] = [
  { name: "Chess", note: "Rated around 1400.", href: "https://www.chess.com/member/frostbad" },
  { name: "VALORANT", note: "Peaked at Immortal." },
  { name: "The Celtics", note: "Every season, win or lose." },
  { name: "LeetCode", note: "Daily practice, tracked in a tool I built for it." },
];
