// models/Product.ts
import mongoose, { Document, Schema } from "mongoose";

export interface ProductType extends Document {
  name: string;
  description: string;
  price: number;
  image: string;
  category: string; // Yeni eklenen category özelliği
}

const ProductSchema = new Schema<ProductType>({
  name: {
    type: String,
    required: [
      true,
      "Please provide a name for this product.",
    ],
    maxlength: [
      60,
      "Name cannot be more than 60 characters",
    ],
  },
  description: {
    type: String,
    required: [
      true,
      "Please provide a description for this product.",
    ],
  },
  price: {
    type: Number,
    required: [
      true,
      "Please provide a price for this product.",
    ],
  },
  image: {
    type: String,
    required: [
      true,
      "Please provide an image url for this product.",
    ],
  },
  category: {
    type: String,
    required: [
      true,
      "Please provide a category for this product.",
    ],
  },
});

export default mongoose.models.Product ||
  mongoose.model<ProductType>("Product", ProductSchema);
