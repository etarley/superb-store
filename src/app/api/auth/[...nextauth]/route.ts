import { authOptions } from "@/lib/auth/utils";
import { DefaultSession } from "next-auth";
import NextAuth from "next-auth/next";

declare module "next-auth" {
  // eslint-disable-next-line no-unused-vars
  interface Session {
    user: DefaultSession["user"] & {
      id: string;
    };
  }
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
