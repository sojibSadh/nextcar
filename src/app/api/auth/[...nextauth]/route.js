import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"


const user = {
  id: 1,
  name: "John Doe",
  email: "test@gmail.com"
}

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
        if (user) {
          return user
        }
        // Return null if user data could not be retrieved
        return null
      }
    })
  ]
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };