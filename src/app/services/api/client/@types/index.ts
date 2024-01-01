export type TStatus = 'active' | 'inactive'
export type TOng = 'ong' | 'voluntary'

export interface IClient {
  id: string
  name: string
  phone: string
  email: string
  city: string
  createdAt: string
  updatedAt: string
}