import React, { useState } from "react";
import { authApi } from "../../../api/auth";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const registerUser = (e) => {
    e.preventDefault();
    authApi.register({ username, phoneNumber, password, confirmPassword });
  };

  return (
    <div>
      <h1 style={{ display: "flex", justifyContent: "center" }}>REGISTER</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <form action="" style={{ display: "flex", flexDirection: "column" }}>
          <input
            type="text"
            placeholder="username"
            style={{ padding: "10px", fontSize: "20px", marginBottom: "10px" }}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            placeholder="PhoneNumber"
            style={{ padding: "10px", fontSize: "20px", marginBottom: "10px" }}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            style={{ padding: "10px", fontSize: "20px", marginBottom: "10px" }}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="password"
            placeholder="confirmpassword"
            style={{ padding: "10px", fontSize: "20px", marginBottom: "30px" }}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button
            style={{ padding: "10px", fontSize: "20px" }}
            onClick={registerUser}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
