// components/ProductList.tsx
import { useEffect, useState } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("/api/products");
      setProducts(response.data.data);
    } catch (error) {
      console.error(
        "Error fetching products:",
        error.message
      );
    }
  };

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            {product.name} - {product.price} -{" "}
            {product.category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
