export type Country = {
  name: string;
  code: string;
  description: string;
  opportunities: string;
};

export const countries: Country[] = [
  {
    name: "Canada",
    code: "CA",
    description: "A leading destination for skilled workers, healthcare professionals, students, and permanent residency pathways.",
    opportunities: "Healthcare, logistics, technology, trades, higher education, and employer-sponsored roles.",
  },
  {
    name: "Australia",
    code: "AU",
    description: "A strong market for international education, skilled migration, and high-demand professional placements.",
    opportunities: "Nursing, engineering, hospitality, construction, regional employment, and university admissions.",
  },
  {
    name: "United Kingdom",
    code: "UK",
    description: "A mature global market for sponsored employment, postgraduate education, and specialist talent mobility.",
    opportunities: "Healthcare, social care, education, IT, finance, and skilled worker sponsorship routes.",
  },
  {
    name: "United States",
    code: "US",
    description: "A competitive destination for advanced education, professional development, and specialised career pathways.",
    opportunities: "Graduate studies, technology, healthcare, research, business programs, and professional internships.",
  },
  {
    name: "Germany",
    code: "DE",
    description: "A growing European hub for skilled labour, technical education, and structured employment migration.",
    opportunities: "Engineering, manufacturing, healthcare, vocational pathways, logistics, and language-linked roles.",
  },
  {
    name: "UAE",
    code: "AE",
    description: "A dynamic regional market for corporate staffing, hospitality, healthcare, and professional services.",
    opportunities: "Corporate services, aviation, facilities, hospitality, healthcare, retail, and management roles.",
  },
  {
    name: "New Zealand",
    code: "NZ",
    description: "A trusted destination for students and skilled professionals seeking quality of life and stable growth.",
    opportunities: "Healthcare, agriculture, construction, education, hospitality, and regional skill shortage roles.",
  },
];
