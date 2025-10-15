export { }
declare module "next/server" {
  interface NextRequest {
    userId?: string;
    userRole?: string;
  }
}