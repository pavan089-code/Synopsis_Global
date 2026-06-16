export type Statistic = {
  value: number;
  suffix: string;
  label: string;
};

export const statistics: Statistic[] = [
  { value: 500, suffix: "+", label: "Successful Placements" },
  { value: 300, suffix: "+", label: "Student Admissions" },
  { value: 200, suffix: "+", label: "Visa Approvals" },
  { value: 50, suffix: "+", label: "Corporate Clients" },
];
