import { dbConnect } from "@/lib/provider/dbConnect";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"



export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',

      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },

      async authorize(credentials, req) {
        console.log("Credentials: ", credentials);

        const userCollection = await dbConnect("users");
        const user = await userCollection.findOne({ email: credentials.email });

        console.log(user);

        if (user) {
          return user
        }
        // Return null if user data could not be retrieved
        return null
      }
    })
  ],


  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true
    },
    async redirect({ url, baseUrl }) {
      return baseUrl
    },
    async session({ session, user, token }) {
      if(token?.role) {
        session.user.role = token.role;
      }
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      return token
    }
  // pages: {
  //   signIn: '/login'
  // }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };