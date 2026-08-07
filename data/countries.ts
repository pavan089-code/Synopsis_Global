export type Country = {
  name: string;
  code: string;
  description: string;
  image: string;
  quickFacts: string[];
  topUniversities: string;
  popularPrograms: string;
  visaPathway: string;
  isIndustry?: boolean;
};

export const countries: Country[] = [
  {
    name: "Healthcare",
    code: "HC",
    image: "/images/campus-students.png",
    description: "Technology and consulting solutions that help healthcare organizations deliver connected, resilient, and patient-centered services.",
    quickFacts: ["Care coordination", "Data security"],
    topUniversities: "Digital care strategy, workflow optimization, interoperability",
    popularPrograms: "Application modernization, cloud platforms, managed services",
    visaPathway: "Improved care experiences, efficient operations, and service continuity",
    isIndustry: true,
  },
  {
    name: "Banking & Financial Services",
    code: "BF",
    image: "/images/visa-counselling.png",
    description: "Secure, compliant, and scalable solutions for financial institutions navigating changing customer expectations and regulatory demands.",
    quickFacts: ["Regulatory change", "Customer trust"],
    topUniversities: "Core platform advisory, risk-focused transformation, process automation",
    popularPrograms: "Cloud strategy, data platforms, managed IT services",
    visaPathway: "Greater agility, stronger resilience, and more trusted customer engagement",
    isIndustry: true,
  },
  {
    name: "Manufacturing",
    code: "MF",
    image: "/images/graduate-success.png",
    description: "Connected technology and business transformation that improve productivity, visibility, and performance across the value chain.",
    quickFacts: ["Operational efficiency", "Supply chain visibility"],
    topUniversities: "Process optimization, systems integration, operational analytics",
    popularPrograms: "Infrastructure services, automation, application modernization",
    visaPathway: "Higher productivity, better decision-making, and stronger operational control",
    isIndustry: true,
  },
  {
    name: "Retail & E-Commerce",
    code: "RE",
    image: "/images/campus-students.png",
    description: "Customer-focused digital solutions that help retailers create seamless experiences and respond quickly to market change.",
    quickFacts: ["Omnichannel demand", "Fulfillment complexity"],
    topUniversities: "Commerce strategy, customer journey improvement, operating model advisory",
    popularPrograms: "Digital transformation, cloud commerce, managed applications",
    visaPathway: "More loyal customers, efficient fulfillment, and sustainable revenue growth",
    isIndustry: true,
  },
  {
    name: "Education",
    code: "ED",
    image: "/images/graduate-success.png",
    description: "Modern technology and advisory services that strengthen learning experiences, institutional agility, and administrative performance.",
    quickFacts: ["Learner expectations", "Resource constraints"],
    topUniversities: "Digital enablement, service redesign, technology adoption planning",
    popularPrograms: "Cloud migration, learning platforms, help desk support",
    visaPathway: "More connected learning, streamlined operations, and better stakeholder outcomes",
    isIndustry: true,
  },
  {
    name: "Logistics & Supply Chain",
    code: "LS",
    image: "/images/visa-counselling.png",
    description: "Technology-enabled operations that increase supply chain visibility, improve coordination, and support responsive delivery networks.",
    quickFacts: ["Network disruption", "Demand variability"],
    topUniversities: "Supply chain advisory, process automation, operational visibility",
    popularPrograms: "Scalable infrastructure, integration services, system monitoring",
    visaPathway: "Faster response, dependable service, and improved end-to-end efficiency",
    isIndustry: true,
  },
  {
    name: "Energy & Utilities",
    code: "EU",
    image: "/images/graduate-success.png",
    description: "Resilient technology and business solutions for organizations balancing asset performance, service reliability, and long-term transition.",
    quickFacts: ["Asset resilience", "Sustainability targets"],
    topUniversities: "Operational strategy, technology assessment, transformation planning",
    popularPrograms: "Cloud infrastructure, remote operations, performance optimization",
    visaPathway: "More reliable services, informed investment, and readiness for change",
    isIndustry: true,
  },
  {
    name: "Government & Public Sector",
    code: "GP",
    image: "/images/campus-students.png",
    description: "Citizen-centered technology and consulting support that helps public organizations modernize services and deliver greater public value.",
    quickFacts: ["Service accessibility", "Governance requirements"],
    topUniversities: "Digital service design, operating model improvement, risk advisory",
    popularPrograms: "Application support, cloud adoption, business process optimization",
    visaPathway: "Accessible services, accountable delivery, and stronger community outcomes",
    isIndustry: true,
  },
  {
    name: "Telecommunications",
    code: "TC",
    image: "/images/visa-counselling.png",
    description: "Scalable technology and operational advisory for telecommunications providers managing complex networks and rising service expectations.",
    quickFacts: ["Network performance", "Customer experience"],
    topUniversities: "Infrastructure optimization, service operations, transformation strategy",
    popularPrograms: "Managed services, cloud strategy, performance monitoring",
    visaPathway: "Reliable connectivity, lower operational friction, and stronger customer confidence",
    isIndustry: true,
  },
  {
    name: "Information Technology",
    code: "IT",
    image: "/images/graduate-success.png",
    description: "Strategic technology partnership for IT organizations seeking to modernize delivery, expand specialist capability, and accelerate innovation.",
    quickFacts: ["Rapid innovation", "Talent capacity"],
    topUniversities: "Enterprise consulting, delivery optimization, technology leadership",
    popularPrograms: "IT staffing, dedicated teams, application modernization",
    visaPathway: "Faster innovation, scalable delivery, and sustainable competitive advantage",
    isIndustry: true,
  },
];
