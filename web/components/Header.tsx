import { signIn, signOut, useSession } from "next-auth/client";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import Link from "./Link";

export default function Header() {
  const [session] = useSession();

  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          NextSaaS Platform
        </Typography>

        <Button color="inherit">
          <Link href="/">Home</Link>
        </Button>

        {!session && (
          <>
            <Button color="inherit">
              <Link href="/register">Register</Link>
            </Button>
            <Button color="inherit">
              <Link
                href={`/api/auth/signout`}
                onClick={(e) => {
                  e.preventDefault();
                  signIn("cognito", {
                    callbackUrl: `${window.location.origin}/dashboard`,
                  });
                }}
              >
                Login
              </Link>
            </Button>
          </>
        )}

        {session && (
          <>
            <Button color="inherit">
              <Link href="/dashboard">Dashboard</Link>
            </Button>

            <Button color="inherit">
              <Link
                href={`/api/auth/signout`}
                onClick={(e) => {
                  e.preventDefault();
                  signOut({
                    callbackUrl: `${window.location.origin}/`,
                  });
                }}
              >
                Logout - {session.user?.name}
              </Link>
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
