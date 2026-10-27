import type { ApiResponse } from '../types'

export class ApiService {
  private baseUrl: string

  constructor(baseUrl = '/api') {
    this.baseUrl = baseUrl
  }

  async get<T>(endpoint: string): Promise<ApiResponse<T>> {
    const response = await fetch(`${this.baseUrl}${endpoint}`)
    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`)
    }
    const data = (await response.json()) as T
    return {
      data,
      status: response.status,
    }
  }

  async post<T, B = unknown>(endpoint: string, body: B): Promise<ApiResponse<T>> {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`)
    }
    const data = (await response.json()) as T
    return {
      data,
      status: response.status,
    }
  }
}

export const api = new ApiService()
