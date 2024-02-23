// pages/api/products/[id].ts
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
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "PUT":
      try {
        const product = await Product.findByIdAndUpdate(
          id as string,
          req.body as ProductType,
          {
            new: true,
            runValidators: true,
          }
        );

        if (!product) {
          return res.status(404).json({ success: false });
        }

        res
          .status(200)
          .json({ success: true, data: product });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "DELETE":
      try {
        const deletedProduct = await Product.deleteOne({
          _id: id,
        });
        if (deletedProduct.deletedCount === 0) {
          return res.status(404).json({ success: false });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.setHeader("Allow", ["PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
