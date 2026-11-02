export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

const API_BASE_URL = import.meta.env.VITE_API_URL || "";

export async function apiClient<T>(
  endpoint: string,
  options: RequestInit = {},
): Promise<ApiResponse<T>> {
  const url = endpoint.startsWith("http") ? endpoint : `${API_BASE_URL}${endpoint}`;

  const defaultHeaders = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        ...defaultHeaders,
        ...options.headers,
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return {
        success: false,
        error: errorData.message || `Request failed with status ${response.status}`,
      };
    }

    const data = await response.json().catch(() => ({}));
    return {
      success: true,
      data,
    };
  } catch (err) {
    const message = err instanceof Error ? err.message : "Network error occurred";
    return {
      success: false,
      error: message,
    };
  }
}

export default apiClient;

