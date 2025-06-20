export interface Upload {
  name: string
  file: File
  abortController: AbortController
  status: 'progress' | 'success' | 'error' | 'canceled'
}

export interface UploadFileToStorageParams {
  file: File
}

export interface UploadFileToStorageOptions {
  signal?: AbortSignal
}
