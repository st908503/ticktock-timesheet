import type { NextAuthConfig } from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";

const MOCK_USER = {
  id: "1",
  email: "demo@xyz.com",
  password: "password123",
  name: "John Doe",
};

export const authOptions: NextAuthConfig = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: {},
        password: {},
      },

      async authorize(credentials) {
        if (!credentials) {
          return null;
        }

        const email =
          credentials.email;

        const password =
          credentials.password;

        const isValidUser =
          email === MOCK_USER.email &&
          password === MOCK_USER.password;

        if (!isValidUser) {
          return null;
        }

        return {
          id: MOCK_USER.id,
          email: MOCK_USER.email,
          name: MOCK_USER.name,
        };
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/login",
  },

  secret: process.env.NEXTAUTH_SECRET,
};