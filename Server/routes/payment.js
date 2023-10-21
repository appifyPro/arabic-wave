import { Router } from "express";
import Stripe from "stripe";
import { dbConnection } from "../index.js";
import { SECRET_KEY } from "../config/index.js";

const stripe = new Stripe(SECRET_KEY);
export const paymentRouter = Router();

// Get the current domain name
const DOMAIN = "http://localhost:3000";

paymentRouter.post("/checkout-session", async (req, res) => {
  // Validate the input data
  const { name, price } = req.body;
  if (!name || !price) {
    return res.status(400).json({ error: "Invalid input data" });
  }

  try {
    // Create a checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      custom_fields: [
        {
          key: "PhoneNumber",
          label: { type: "custom", custom: "Phone Number" },
          type: "numeric",
        },
        {
          key: "Course",
          label: { type: "custom", custom: "Course Name" },
          type: "dropdown",
          dropdown: {
            options: [
              { label: "tajweed", value: "t" },
              { label: "Urdu", value: "u" },
            ],
          },
        },
      ],
      line_items: [
        {
          // price_data: {
          //   currency: "usd",
          //   product_data: {
          //     name,
          //   },
          //   unit_amount: price * 100,
          // },
          price: "price_1NtUYCSEEtNJJubMUK9V5pwx",
          quantity: 1, // You may want to adjust the quantity as needed
        },
      ],
      mode: "payment",
      success_url: `${DOMAIN}/success.html`,
      cancel_url: `${DOMAIN}/cancel.html`,
    });

    // Return the session URL as JSON
    res.json({ sessionUrl: session.url });
  } catch (error) {
    // Handle the error gracefully
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});
