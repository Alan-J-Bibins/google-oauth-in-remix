// app/routes/auth/google.tsx
import { ActionFunctionArgs } from "@remix-run/node";
import { authenticator } from "~/services/auth.server";

export const action = ({ request }: ActionFunctionArgs) => 
  authenticator.authenticate("google", request, {
    successRedirect: "/dashboard",
    failureRedirect: "/login"
  });

export const loader = ({ request }: ActionFunctionArgs) => 
  authenticator.authenticate("google", request, {
    successRedirect: "/dashboard",
    failureRedirect: "/login"
  });
