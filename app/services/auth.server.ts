import { Authenticator } from "remix-auth";
import { GoogleStrategy } from "remix-auth-google";
import { sessionStorage } from "~/services/session.server";

// Define user type
export type User = {
    id: string;
    email: string;
    name: string;
};

// Create authenticator instance
export const authenticator = new Authenticator<User>(sessionStorage);

// Configure Google Strategy
const googleStrategy = new GoogleStrategy(
    {
        clientID: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        callbackURL: "http://localhost:5173/auth/google/callback"
    },
    async ({ profile }) => {
        // This is where you would typically find or create a user in your database
        return {
            id: profile.id,
            email: profile.emails[0].value,
            name: profile.displayName
        };
    }
);

// Add the strategy to the authenticator
authenticator.use(googleStrategy);
