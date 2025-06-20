interface Env {
  server: string
}

export const env: Env = {
  server: import.meta.env.VITE_SERVER,
}
