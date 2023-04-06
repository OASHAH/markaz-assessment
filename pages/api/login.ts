// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { uniqueId } from "lodash";
import type { NextApiRequest, NextApiResponse } from "next";

type Data =
  | {
      user: {
        email: string;
        password: string;
      };
      token: string;
      message: string;
    }
  | { message: string };
interface Payload extends NextApiRequest {
  body: {
    email: string;
    password: string;
  };
}

export default function handler(req: Payload, res: NextApiResponse<Data>) {
  console.log("post", req);
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }
  res.status(200).json({
    user: {
      email: req.body.email,
      password: req.body.password,
    },
    token: uniqueId(),
    message: "Logged in successfully!",
  });
}
