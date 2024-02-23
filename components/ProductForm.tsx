// components/ProductForm.tsx
import { useState } from "react";
import axios from "axios";
import { on } from "events";

const ProductForm = () => {
  const [data, setData] = useState({
    name: "",
    description: "",
    price: 0,
    image: "",
    category: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/api/products", data);
      console.log("Product added successfully");

      // Formu sıfırla
      setData({
        name: "",
        description: "",
        price: 0,
        image: "",
        category: "",
      });
    } catch (error) {
      console.error("Error adding product:", error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Product Name:
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </label>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Description:
          <textarea
            name="description"
            value={data.description}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </label>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Price:
          <input
            type="number"
            name="price"
            value={data.price}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </label>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Image URL:
          <input
            type="text"
            name="image"
            value={data.image}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </label>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Category:
          <select
            name="category"
            value="Select"
            onChange={handleInputChange} // Bu satırı sizin kodunuzda eksik gördüm, ekleme yaptım.
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option>Select</option>{" "}
            {/* Örnek bir option, burayı kendi ihtiyaçlarınıza göre doldurmalısınız. */}
          </select>
        </label>
      </div>
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Add Product
      </button>
    </form>
  );
};

export default ProductForm;
