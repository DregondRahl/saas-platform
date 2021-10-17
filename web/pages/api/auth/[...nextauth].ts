import Providers from "next-auth/providers";
import NextAuth from "next-auth";

export default NextAuth({
  providers: [
    Providers.Cognito({
      clientId: `${process.env.COGNITO_CLIENT_ID}`,
      clientSecret: `${process.env.COGNITO_CLIENT_SECRET}`,
      domain: `${process.env.COGNITO_DOMAIN}`,
    }),
  ],
  debug: true,
});
