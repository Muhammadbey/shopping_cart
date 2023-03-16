import React, { useState } from "react";
import { authApi } from "../../../api/auth";
import { UserBtn } from "../../Header/style";

const LoginPage = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const LoginUser = (e) => {
    e.preventDefault();

    authApi.login({ phoneNumber, password });
  };
  return (
    <div>
      <form
        action=""
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "0 auto",
          flexDirection: "column",
          width: "250px",
        }}
      >
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "50px",
          }}
        >
          Login page
        </h1>
        <input
          type="text"
          placeholder="phone number"
          style={{
            padding: "10px",
            fontSize: "20px",
            marginTop: "20px",
            marginBottom: "10px",
          }}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          style={{ padding: "10px", fontSize: "20px" }}
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
      <UserBtn
        style={{ display: "flex", margin: "15px auto" }}
        onClick={LoginUser}
      >
        Login
      </UserBtn>
    </div>
  );
};

export default LoginPage;
