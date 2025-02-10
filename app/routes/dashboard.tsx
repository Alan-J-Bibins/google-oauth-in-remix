import { Form, useLoaderData } from "@remix-run/react";
import { LoaderFunctionArgs } from "@remix-run/node";
import { authenticator } from "~/services/auth.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
    const user = await authenticator.isAuthenticated(request, {
        failureRedirect: "/login"
    });
    return { user };
};

export default function DashboardPage() {
    const { user } = useLoaderData<typeof loader>();

    return (
        <div>
            <h1>
                Welcome, {user.name}
            </h1>
            <Form action="/logout" method="post">
                <button type="submit">Logout</button>
            </Form>
        </div>
    );
}
