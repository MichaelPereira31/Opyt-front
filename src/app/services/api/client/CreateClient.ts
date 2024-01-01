import api from ".."
import * as T from './@types/ICreateClient'

const createClient = async (
  payload: T.ICreateUserPayload
): Promise<T.ICreateUserResponse> => {
  const response = await api.post('/client/', payload)

  return response.data
}

export default createClient