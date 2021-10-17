import { Container } from "@mui/material";
import Copyright from "./Copyright";

export default function Footer() {
  return (
    <Container
      maxWidth="md"
      component="footer"
      sx={{
        borderTop: (theme: any) => `1px solid ${theme.palette.divider}`,
        mt: 8,
        py: [3, 6],
      }}
    >
      <Copyright sx={{ mt: 2 }} />
    </Container>
  );
}
