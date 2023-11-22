import { database } from "@/app/database/db";
import { User } from "@/app/models/user";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      const sessionUser = await User.findOne({ email: session.user.email });
      session.user.id=sessionUser._id;
      return session;
    },
    async signIn({ profile }) {
      console.log(profile);
      try {
        await database();
        const userExist = await User.findOne({ email: profile.email });
        if (!userExist) {
          const user = await User.create({
            email: profile.email,
            name: profile.name,
            image: profile.picture,
          });
        }
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  },
});

export { handler as GET, handler as POST };
