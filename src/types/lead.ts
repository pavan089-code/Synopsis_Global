export type LeadStatus = "New" | "Contacted" | "Interested" | "Converted" | "Closed";

export interface ContactLead {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  status: LeadStatus;
  createdAt: Date | null;
}

export type CreateContactLeadInput = Omit<ContactLead, "id" | "status" | "createdAt">;
