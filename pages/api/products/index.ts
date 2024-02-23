// pages/api/products/index.ts
import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../utils/dbConnect";
import Product, {
  ProductType,
} from "../../../models/Product";

dbConnect();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const products = await Product.find({});
        res
          .status(200)
          .json({ success: true, data: products });
      } catch (error) {
        console.error("Error creating product:", error);
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const product = await Product.create(
          req.body as ProductType
        );
        res
          .status(201)
          .json({ success: true, data: product });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
