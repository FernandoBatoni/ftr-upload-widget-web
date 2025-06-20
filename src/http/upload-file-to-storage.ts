import type {
  UploadFileToStorageOptions,
  UploadFileToStorageParams,
} from '../@types/Upload'
import api from '../api'

export async function uploadFileToStorage(
  { file }: UploadFileToStorageParams,
  opts?: UploadFileToStorageOptions,
) {
  const data = new FormData()

  data.append('file', file)

  const response = await api.post<{ url: string }>('/uploads', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    signal: opts?.signal,
  })

  return { url: response.data.url }
}
