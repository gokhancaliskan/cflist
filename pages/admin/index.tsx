// pages/admin/index.tsx
import { useState, useEffect } from "react";
import axios from "axios";
import ProductForm from "../../components/ProductForm";
import AdminList from "../../components/AdminList";
import AdminLogin from "../../components/AdminLogin";

const AdminPage = () => {
  const [products, setProducts] = useState([]);
  const [showAdminList, setShowAdminList] = useState(false);
  const [adminLoggedIn, setAdminLoggedIn] = useState(false);

  useEffect(() => {
    const adminLoginTime = localStorage.getItem(
      "adminLoginTime"
    );
    const currentTime = Date.now();
    const timeDifference =
      currentTime - Number(adminLoginTime);

    // Eğer 24 saatten az zaman geçmişse ve kullanıcı daha önce giriş yapmışsa, oturumu açık tut
    if (
      adminLoginTime &&
      timeDifference < 24 * 60 * 60 * 1000
    ) {
      setAdminLoggedIn(true);
    }
  }, []);

  const handleLoginSuccess = () => {
    setAdminLoggedIn(true);
  };

  return (
    <div>
      <h1>Product Manage</h1>

      {adminLoggedIn ? (
        <>
          <button
            onClick={() => setShowAdminList(!showAdminList)}
          >
            {showAdminList
              ? "Hide Products"
              : "List Products"}
          </button>
          {showAdminList && <AdminList />}
          <ProductForm />
        </>
      ) : (
        <AdminLogin onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
};

export default AdminPage;
