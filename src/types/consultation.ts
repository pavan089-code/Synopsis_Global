export type ConsultationStatus = "Pending" | "Confirmed" | "Completed" | "Cancelled";

export interface Consultation {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
  status: ConsultationStatus;
  createdAt: Date | null;
}

export type CreateConsultationInput = Omit<Consultation, "id" | "status" | "createdAt">;
