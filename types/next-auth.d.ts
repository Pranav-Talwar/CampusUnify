import "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      uid: string;
      name?: string;
      email?: string;
      image?: string;
    };
  }
}