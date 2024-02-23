// pages/index.tsx
import ProductList from "../components/ProductList";

const HomePage = () => {
  // Örnek ürünler (API'den alınan verilerle değiştirilmelidir)
  const sampleProducts = [
    {
      _id: "1",
      name: "Product 1",
      price: 10,
      category: "Category 1",
    },
    {
      _id: "2",
      name: "Product 2",
      price: 20,
      category: "Category 2",
    },
    // Diğer ürünler...
  ];

  return (
    <div>
      <h1>Product Management System</h1>
      <ProductList />
    </div>
  );
};

export default HomePage;
