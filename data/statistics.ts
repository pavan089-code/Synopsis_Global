export type Statistic = {
  value: number;
  suffix: string;
  label: string;
};

export const statistics: Statistic[] = [
  { value: 1000, suffix: "+", label: "Students Guided" },
  { value: 95, suffix: "%", label: "Visa Success Rate" },
  { value: 20, suffix: "+", label: "Partner Institutions" },
  { value: 10, suffix: "+", label: "Destination Countries" },
];
