export interface Upload {
  name: string
  file: File
  abortController?: AbortController
  status: 'progress' | 'success' | 'error' | 'canceled'
  originalSizeInBytes: number
  uploadSizeInBytes: number
  compressedSizeInBytes?: number
  remoteUrl?: string
}

export interface UploadFileToStorageParams {
  file: File
  onProgress: (sizeInBytes: number) => void
}

export interface UploadFileToStorageOptions {
  signal?: AbortSignal
}
