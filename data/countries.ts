export type Country = {
  name: string;
  code: string;
  description: string;
  image: string;
  quickFacts: string[];
  topUniversities: string;
  popularPrograms: string;
  visaPathway: string;
};

export const countries: Country[] = [
  {
    name: "Canada",
    code: "CA",
    image: "/images/campus-students.png",
    description: "A leading destination for quality education, post-study work options, and long-term settlement planning.",
    quickFacts: ["Post-graduation work options", "Strong public institutions"],
    topUniversities: "Toronto, UBC, McGill, Waterloo",
    popularPrograms: "Business, data science, engineering, healthcare",
    visaPathway: "Study permit to PGWP and PR routes",
  },
  {
    name: "Australia",
    code: "AU",
    image: "/images/campus-students.png",
    description: "A student-friendly destination with globally ranked universities and practical post-study opportunities.",
    quickFacts: ["February and July intakes", "Regional study advantages"],
    topUniversities: "Melbourne, Sydney, ANU, Monash",
    popularPrograms: "Nursing, IT, business, hospitality",
    visaPathway: "Student visa with graduate visa options",
  },
  {
    name: "United Kingdom",
    code: "UK",
    image: "/images/graduate-success.png",
    description: "A prestigious education market known for concise degrees, research quality, and graduate outcomes.",
    quickFacts: ["One-year master's options", "Graduate route available"],
    topUniversities: "Oxford, Cambridge, UCL, Manchester",
    popularPrograms: "Finance, law, public health, analytics",
    visaPathway: "Student visa to graduate route",
  },
  {
    name: "United States",
    code: "US",
    image: "/images/campus-students.png",
    description: "A competitive destination for research-led education, flexible programs, and global career exposure.",
    quickFacts: ["Large university choice", "STEM OPT pathways"],
    topUniversities: "MIT, Stanford, Berkeley, Columbia",
    popularPrograms: "Computer science, business, engineering",
    visaPathway: "F-1 visa with OPT and STEM OPT",
  },
  {
    name: "Germany",
    code: "DE",
    image: "/images/campus-students.png",
    description: "A strong European option for technical education, research, and accessible public university pathways.",
    quickFacts: ["Low tuition options", "Growing English programs"],
    topUniversities: "TUM, Heidelberg, RWTH Aachen",
    popularPrograms: "Engineering, AI, management, sciences",
    visaPathway: "Student visa with job-seeker options",
  },
  {
    name: "UAE",
    code: "AE",
    image: "/images/visa-counselling.png",
    description: "A close-to-home international hub for branch campuses, business programs, and professional mobility.",
    quickFacts: ["Regional education hub", "Fast-growing campuses"],
    topUniversities: "NYU Abu Dhabi, Heriot-Watt, Middlesex",
    popularPrograms: "Business, aviation, hospitality, technology",
    visaPathway: "Student visa and residency options",
  },
  {
    name: "New Zealand",
    code: "NZ",
    image: "/images/graduate-success.png",
    description: "A trusted destination for high-quality education, smaller class environments, and settlement planning.",
    quickFacts: ["Welcoming campuses", "Post-study work rights"],
    topUniversities: "Auckland, Otago, Victoria Wellington",
    popularPrograms: "Agriculture, healthcare, IT, business",
    visaPathway: "Student visa to post-study work",
  },
];
