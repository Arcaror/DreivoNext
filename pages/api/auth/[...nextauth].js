import NextAuth from "next-auth"
import TwitchProvider from "next-auth/providers/twitch";
import SequelizeAdapter, { models } from "@next-auth/sequelize-adapter"
import Sequelize, { DataTypes } from "sequelize"
const Predictions = require('/model/Predictions')

import sequelize from '/database/Database'
require('dotenv').config()


sequelize.sync()


export const authOptions = {

  providers: [
    TwitchProvider({
      clientId: process.env.TWITCH_CLIENT_ID,
      clientSecret: process.env.TWITCH_CLIENT_SECRET
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  adapter: SequelizeAdapter(sequelize, {
    models: {
      users: sequelize.define("users", {
        ...models.User,
        winstreak: DataTypes.INTEGER,
        isAdmin: DataTypes.INTEGER,
        isVip: DataTypes.INTEGER,

      }),
      predictions: sequelize.define("predictions", {
        name: DataTypes.TEXT,
        end: DataTypes.INTEGER
      }),
      participations: sequelize.define("participations", {
        userId: DataTypes.STRING,
        name: DataTypes.STRING,
        response: DataTypes.STRING,
        prediId: DataTypes.STRING

      }),
      winners: sequelize.define("winners", {
        userId: DataTypes.STRING,
        name: DataTypes.STRING,
        winstreak: DataTypes.INTEGER
      })
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
      //console.log("in session callback,", session, token, user)

      if (token) {
        session.id = token.id;

      }


      return session

    },


    async jwt({ token, user, account, profile, isNewUser }) {
      console.log("in jwt user =", user, account, profile, isNewUser)






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
    secret: process.env.NEXTAUTH_SECRET

  },
  secret: process.env.NEXTAUTH_SECRET

}


export default NextAuth(authOptions)
