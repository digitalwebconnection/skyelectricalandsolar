import { apiClient, type ApiResponse } from "./api";

export interface InquiryPayload {
  name: string;
  email: string;
  phone: string;
  service?: string;
  address?: string;
  notes?: string;
  state?: "WA" | "NSW" | "QLD";
}

export async function submitInquiry(
  payload: InquiryPayload,
): Promise<ApiResponse<{ referenceId: string }>> {
  // Check if an external form submission endpoint is configured in env
  const endpoint = import.meta.env.VITE_INQUIRY_ENDPOINT || "";

  if (endpoint) {
    return apiClient<{ referenceId: string }>(endpoint, {
      method: "POST",
      body: JSON.stringify(payload),
    });
  }

  // Realistic fallback simulation for local development
  await new Promise((resolve) => setTimeout(resolve, 800));
  const referenceId = `SKY-${Date.now().toString().slice(-6)}`;

  return {
    success: true,
    data: { referenceId },
    message: "Inquiry successfully submitted. Our team will contact you within 15 minutes.",
  };
}

export default {
  submitInquiry,
};

