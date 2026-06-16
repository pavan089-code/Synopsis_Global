export interface Country {
  id: string;
  name: string;
  description: string;
  opportunities: string;
  image: string;
  createdAt: Date | null;
}

export type CountryInput = Omit<Country, "id" | "createdAt">;
