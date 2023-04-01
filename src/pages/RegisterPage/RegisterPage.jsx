import { Button, Paper, TextField } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../components/Router/Router";
import { AsyncThunks } from "../../store/actions";
import { getIsLoading } from "../../store/selectors";
import { LinkToPage, LinkWrapper } from "../LoginPage/styles";

const RegisterPage = () => {
  const isLoading = useSelector(getIsLoading);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const registerUser = async (e) => {
    e.preventDefault();
    await dispatch(
      AsyncThunks.register({
        username: e.target[0].value,
        phoneNumber: e.target[2].value,
        password: e.target[4].value,
        confirmPassword: e.target[6].value,
      })
    );
  };

  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "20px" }}
      >
        <Paper elevation={10} sx={{ width: "50%", padding: "15px" }}>
          <h1
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "15px",
            }}
          >
            REGISTER
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "35px",
            }}
          >
            <form
              action=""
              style={{ display: "flex", flexDirection: "column" }}
              onSubmit={registerUser}
            >
              <TextField
                id="outlined-first"
                label="Username"
                type="text"
                variant="outlined"
                sx={{ padding: "10px", marginBottom: "10px" }}
              />
              <TextField
                id="outlined-second"
                label="PhoneNumber"
                type="text"
                variant="outlined"
                sx={{ padding: "10px", marginBottom: "10px" }}
              />
              <TextField
                id="outlined-third"
                label="Password"
                type="password"
                variant="outlined"
                sx={{
                  padding: "10px",
                  fontSize: "20px",
                  marginBottom: "10px",
                }}
              />
              <TextField
                id="outlined-fourth"
                label="confirmpassword"
                type="password"
                variant="outlined"
                sx={{ padding: "10px", marginBottom: "10px" }}
              />
              <Button variant="contained" type="submit">
                {isLoading ? "loading" : " Submit"}
              </Button>
            </form>
          </div>
        </Paper>
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
