import { signIn } from "next-auth/client";
import { Container } from "@mui/material";

import Button from "@mui/material/Button";

export default function AccessDenied() {
  return (
    <Container maxWidth="md" component="main">
      <h1>Access Denied</h1>
      <p>
        You must be
        <Button
          onClick={() =>
            signIn("cognito", {
              callbackUrl: `${window.location.origin}/dashboard`,
            })
          }
        >
          Sign In
        </Button>
        to view this page
      </p>
    </Container>
  );
}
