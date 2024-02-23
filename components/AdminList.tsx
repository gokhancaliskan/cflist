// components/AdminList.tsx
import { useEffect, useState } from "react";
import axios from "axios";

const AdminList = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("/api/products");
      setProducts(response.data.data);
      fetchProducts();
    } catch (error) {
      console.error(
        "Error fetching products:",
        error.message
      );
    }
  };

  const handleEdit = (productId) => {
    console.log(`Edit product with id ${productId}`);
    // Düzenleme işlevselliğini burada gerçekleştirin
  };

  const handleDelete = async (productId) => {
    try {
      await axios.delete(`/api/products/${productId}`);
      console.log(`Product with id ${productId} deleted`);
      fetchProducts(); // Ürün silindikten sonra listeyi güncelle
    } catch (error) {
      console.error(
        "Error deleting product:",
        error.message
      );
    }
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-blue-800 text-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">
        Admin List
      </h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-500">
          Search:
          <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </label>
      </div>
      <div className="overflow-x-auto">
        <ul className="min-w-full bg-white rounded-lg overflow-hidden">
          {filteredProducts.map((product) => (
            <li
              key={product._id}
              className="border-b border-gray-200 p-4 flex items-center"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-10 w-10 rounded-full"
                  src={product.image}
                  alt="Product"
                />
              </div>
              <div className="ml-3">
                <p className="text-lg font-medium">
                  {product.name}
                </p>
                <p className="text-sm text-gray-500">
                  {product.description}
                </p>
              </div>
              <div className="ml-auto">
                <button
                  className="text-blue-500 hover:text-blue-700"
                  onClick={() => handleEdit(product._id)}
                >
                  Edit
                </button>
                <button
                  className="text-red-500 hover:text-red-700 ml-2"
                  onClick={() => handleDelete(product._id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminList;
