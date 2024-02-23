import connectDB from "../../utils/dbConnect";
import Product from "../../models/Product";
import type { NextApiRequest, NextApiResponse } from "next";

connectDB();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    // Ekleme işlemi
  } else if (req.method === "GET") {
    // Tüm ürünleri getirme işlemi
  } else {
    res.status(405).json({
      success: false,
      message: "Method Not Allowed",
    });
  }
}
