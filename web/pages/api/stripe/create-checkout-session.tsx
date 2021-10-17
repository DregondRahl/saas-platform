import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/client";

import { stripe } from "../../../shared/stripe";

export default async function protectedHandler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });
  const { price, quantity = 1, metadata = {} } = req.body;

  if (session) {
    const customer = "cus_KMYQ1YjZpo0hHJ";
    const stripeSession = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      billing_address_collection: "required",
      customer,
      line_items: [
        {
          price,
          quantity,
        },
      ],
      mode: "subscription",
      allow_promotion_codes: true,
      subscription_data: {
        trial_from_plan: true,
        metadata,
      },
      success_url: `http://localhost:3000/dashboard`,
      cancel_url: `http://localhost:3000/`,
    });

    return res.status(200).json({ sessionId: stripeSession.id });
  }

  res.status(400).json({
    error: "You must be sign in to view the protected content on this page.",
  });
}
