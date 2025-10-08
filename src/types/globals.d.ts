export {}
declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      type?: string
    }
  }
}