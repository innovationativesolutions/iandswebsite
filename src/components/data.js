import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
  SparklesIcon,
  UserGroupIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "Highlight your benefits",
  desc: "You can use this space to highlight your first benefit or a feature of your product. It can also contain an image or Illustration like in the example along with some bullet points.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Understand your customers",
      desc: "Then explain the first point breifly in one or two lines.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Improve acquisition",
      desc: "Here you can add the next benefit point.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Drive customer retention",
      desc: "This will be your last bullet point in this section.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};

const servicesInfo = {
  "Sales & Marketing Solutions": [
    "Branding & Design (logos, brand kits, artwork)",
    "Marketing Collateral (brochures, flyers, presentations)",
    "Website Development & Maintenance",
    "Digital Campaigns (SEO, PPC, email, lead-gen)",
    "Social Media Setup & Campaigns (LinkedIn, Instagram, Facebook, X)",
    "Application Development & Client Support"
  ],
  "Emerging Technologies": [
    "Data Science & ML",
    "AI Agents & Automation",
    "BI Dashboards (Power BI, Tableau, Qlik)",
    "Low-Code Apps (PowerApps, Mendix, OutSystems, Appian)",
    "RPA Tools (UiPath, Automation Anywhere, Blue Prism)",
    "AI-Assisted Development (GitHub Copilot, Tabnine, OpenAI Codex)",
    "IoT & Smart Systems",
    "2D/3D & Simulation Visualizations"
  ],
  "Project Management": [
    "PM Strategy & Mentorship (PMBOK, Agile, Lean, PRINCE2)",
    "Project Controls (Cost, Schedule, Engineering) – P6, MS Project, Acumen",
    "KPI Monitoring – CPI/SPI/EVM in BI dashboards",
    "FID & DQ Analyses for capital portfolios",
    "Efficiency Enablers – Lean Six Sigma, digital collaboration, AI analytics",
    "Portfolio & Program Management",
    "Change & Risk Management"
  ],
  "Engineering Services": [
    "Civil Engineering – Site development, grading, drainage, and utility planning for efficient infrastructure.",
    "Structural Engineering – Safe and resilient structural designs with seismic and load analysis.",
    "Mechanical Engineering – HVAC, fire protection, and thermal systems engineered for performance and safety.",
    "Piping Engineering – Process and utility piping design with stress analysis and 3D modeling for clash-free layouts.",
    "Rotating & Static Equipment – Equipment selection, integration, and installation planning for optimized operations.",
    "Electrical Engineering – Power distribution, lighting, grounding, and arc flash studies for reliable energy systems.",
    "Instrumentation & Control – Automation and control systems with loop diagrams and safety integrity analysis.",
    "Front-End Engineering – Feasibility studies and concept selection for business case and capital project justification.",
    "Project Management – KPI-driven planning and execution with stakeholder engagement and performance tracking.",
    "Constructability & Turnarounds – Safe, efficient field installations and outage support through expert planning."
  ],
  "Construction Management": [
    "Estimation & Bidding – Sage, WinEst, Trimble",
    "Scheduling & Planning – P6, Synchro 4D",
    "Resourcing & Tracking – Procore, Viewpoint, Oracle Unifier",
    "Field-to-Office Integration – Procore, BIM 360, PlanGrid",
    "Construction Analytics – Cost, schedule, productivity metrics",
    "Safety & Compliance – OSHA/EHS workflows",
    "Turnover & Handover – Digital commissioning & closeout packages"
  ],
  "Staffing Services": [
    "IT Roles: Developers, data scientists, AI/ML engineers, cloud, DevOps, QA, cybersecurity",
    "Construction Roles: PMs, schedulers, estimators, field engineers, supervisors, craft professionals",
    "Engagement Models: Contract, contract-to-hire, direct placement",
    "Value Add: Screening, alignment, onboarding, retention"
  ]
};


const about = {
  preTitle: "About Us",
  title: "Who We Are",
  mission: "To design and deliver innovative, reliable, and human-centered solutions that empower businesses to thrive.",
  image: "/public/CEO.jpg",
  leadership: {
    name: "Megha Dâvè",
    bio: "Founded by Megha Dâvè, who brings innovation, resilience, and transparency to deliver sustainable solutions and build long-term partnerships."
  },
  values: [
    {
      title: "Innovation with Purpose",
      icon: <SparklesIcon />,
    },
    {
      title: "Human-Centered Design",
      icon: <UserGroupIcon />,
    },
    {
      title: "Diversity & Inclusion (women-owned)",
      icon: <UserGroupIcon />,
    },
    {
      title: "Honesty, Empathy, Accountability",
      icon: <ShieldCheckIcon />,
    },
    {
      title: "Engineering Excellence",
      icon: <AdjustmentsHorizontalIcon />,
    },
  ],
};

export {benefitOne, benefitTwo, servicesInfo};
