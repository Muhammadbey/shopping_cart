import { Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { authApi } from "../../api/auth";
import { ROUTES } from "../../components/Router/Router";
import { LinkToPage, LinkWrapper } from "../LoginPage/styles";

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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "35px",
        }}
      >
        <form action="" style={{ display: "flex", flexDirection: "column" }}>
          <TextField
            id="outlined-basic"
            label="Username"
            type="text"
            variant="outlined"
            sx={{ padding: "10px", marginBottom: "10px" }}
            onChange={(e) => setUsername(e.target.value)}
          />

          <TextField
            id="outlined-basic"
            label="PhoneNumber"
            type="text"
            variant="outlined"
            sx={{ padding: "10px", marginBottom: "10px" }}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            type="password"
            variant="outlined"
            sx={{ padding: "10px", fontSize: "20px", marginBottom: "10px" }}
            onChange={(e) => setPassword(e.target.value)}
          />

          <TextField
            id="outlined-basic"
            label="confirmpassword"
            type="password"
            variant="outlined"
            sx={{ padding: "10px", marginBottom: "10px" }}
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
      <LinkWrapper>
        <LinkToPage>
          Agar siz Register bo'lsangiz <br />
          Ushbu havolaga ustiga <Link to={ROUTES.LOGIN}>bosing</Link>
        </LinkToPage>
      </LinkWrapper>
    </div>
  );
};

export default RegisterPage;
