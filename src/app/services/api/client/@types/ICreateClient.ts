import { IClient } from "."
import { IResponse } from "../../@types"

export interface ICreateUserPayload {
  email: string
  phone: string
  name: string
  city: string

}

export type ICreateUserResponse = IResponse<IClient>