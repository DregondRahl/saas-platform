import {
  Container,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Box,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { postData } from "../shared/helper";

import { getStripe } from "../shared/stripe-client";

const handleCheckout = async (price: any) => {
  try {
    const { sessionId } = await postData({
      url: "/api/stripe/create-checkout-session",
      data: { price },
    });

    const stripe = await getStripe();

    if (sessionId) {
      stripe?.redirectToCheckout({ sessionId });
    }
  } catch (error: any) {
    return alert(error.message);
  }
};

export default function Pricing(props: any) {
  return (
    <Container maxWidth="md" component="main">
      <Grid container spacing={5} alignItems="flex-end">
        {props.products.map((product: any) => (
          // Enterprise card is full width at sm breakpoint
          <Grid
            item
            key={product.title}
            xs={12}
            sm={product.title === "Enterprise" ? 12 : 6}
            md={4}
          >
            <Card>
              <CardHeader
                title={product.title}
                subheader={product.subheader}
                titleTypographyProps={{ align: "center" }}
                subheaderTypographyProps={{
                  align: "center",
                }}
                sx={{
                  backgroundColor: (theme) =>
                    theme.palette.mode === "light"
                      ? theme.palette.grey[200]
                      : theme.palette.grey[700],
                }}
              />
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "baseline",
                    mb: 2,
                  }}
                >
                  <Typography component="h2" variant="h3" color="text.primary">
                    ${product.price}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    /mo
                  </Typography>
                </Box>
                <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                  {product.description.map((line: any) => (
                    <Typography component="li" variant="subtitle1" align="center" key={line}>
                      {line}
                    </Typography>
                  ))}
                </ul>
              </CardContent>
              <CardActions>
                <Button
                  fullWidth
                  variant={product.buttonVariant as "outlined" | "contained"}
                  onClick={() => handleCheckout("price_1JhpWdDFYwWHdAgPKwIZTraG")}
                >
                  {product.buttonText}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
