import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import SequelizeAdapter, { models } from "@next-auth/sequelize-adapter"
import Sequelize, { DataTypes } from "sequelize"
const Players = require('/model/Players')

const sequelize = require('/database/Database')



export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }

    })
  ],
  adapter: SequelizeAdapter(sequelize, {
    models: {
      User: sequelize.define("users", {
        ...models.User,
        winstreak: DataTypes.INTEGER,
        isAdmin: DataTypes.INTEGER
      }

      )
    }
  }
  ),

  callbacks: {



    async redirect({ url, baseUrl }) {


 
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`

      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url
      return baseUrl
    },
    async session({ session, token, user }) {
      console.log("in session callback,", session, token, user)



      if (token) {
        session.id = token.id;
      }







      return session

    },
    async jwt({ token, user, account, profile, isNewUser }) {
      console.log("in jwt user =", user, account, profile, isNewUser)


      // Players.findOrCreate({
      //   where: { id: token.id },
      //   defaults: {
      //     idgoogle: token.id,
      //     name: profile.name,
      //     email: profile.email,
      //     image: profile.image,
      //     winstreak: 0,
      //     isAdmin: 0
      //   },
      // })





      console.log(user)
      if (user) {
        token.id = user.id;
      }

      return token
    }

  },

  session: {
    jwt: true,
  },
  jwt: {
    encryption: true,
    secret: process.env.JWT_OP_SECRET

  },
  secret: process.env.JWT_OP_SECRET

}
)
