import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/client";

import { stripe } from "../../../shared/stripe";

export default async function protectedHandler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });

  if (session) {
    const customer = "cus_KMYQ1YjZpo0hHJ";

    const { url } = await stripe.billingPortal.sessions.create({
      customer,
      return_url: `http://localhost:3000/dashboard`,
    });

    return res.status(200).json({ url });
  }

  res.send({
    error: "You must be sign in to view the protected content on this page.",
  });
}
