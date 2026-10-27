export type Theme = 'light' | 'dark' | 'system'

export interface BaseEntity {
  id: string
  createdAt: string
  updatedAt: string
}

export interface ApiResponse<T> {
  data: T
  status: number
  message?: string
}

export interface NavItem {
  label: string
  href: string
  icon?: string
  external?: boolean
}
