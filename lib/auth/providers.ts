import Google from "next-auth/providers/google";

export const GoogleProvider = Google({
  authorization: {
    params: {
      access_type: "offline",
      prompt: "consent",
      scope: [
        "openid",
        "https://www.googleapis.com/auth/userinfo.email",
        "https://www.googleapis.com/auth/userinfo.profile",
        // and more scope urls
      ].join(" "),
      response: "code",
    },
  },
  clientId: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
});
