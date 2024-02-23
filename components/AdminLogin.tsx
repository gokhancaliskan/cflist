// components/AdminLogin.tsx
import { useState } from "react";
import { useRouter } from "next/router";

interface AdminLoginProps {
  onLoginSuccess: () => void;
}

const AdminLogin = ({
  onLoginSuccess,
}: AdminLoginProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (username === "as" && password === "a") {
      // Kullanıcı adı ve şifre doğruysa, localStorage'e bilgileri kaydet
      localStorage.setItem("adminLoggedIn", "true");
      localStorage.setItem(
        "adminLoginTime",
        String(Date.now())
      ); // Zaman damgasını ekledik
      onLoginSuccess();
      router.push("/admin");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div>
      <h2>Admin Login</h2>
      <div>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handleLogin}>Login</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default AdminLogin;
