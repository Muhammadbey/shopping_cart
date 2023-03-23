import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { UserBtn } from "../../components/Header/style";
import { ROUTES } from "../../components/Router/Router";
import { LinkToPage, LinkWrapper } from "./styles";
import { AsyncThunks } from "../../store/actions";
import { getIsLoading, getUserError } from "../../store/selectors";
import { TextField } from "@mui/material";

const LoginPage = () => {
  const dispatch = useDispatch();
  const error = useSelector(getUserError);
  const isLoading = useSelector(getIsLoading);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(
      AsyncThunks.login({
        phoneNumber: e.target[0].value,
        password: e.target[2].value,
      })
    );
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "0 auto",
          flexDirection: "column",
          width: "100%",
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
        <TextField
          id="standard-basic"
          label="Phone number"
          type="phone-number"
          variant="outlined"
          sx={{
            width: "50%",
            padding: "10px",
            fontSize: "20px",
            margin: "15px auto ",
          }}
        />
        <TextField
          id="standard-basic"
          label="Password"
          type="password"
          variant="outlined"
          sx={{
            width: "50%",
            padding: "10px",
            fontSize: "20px",
            margin: "0px  auto ",
          }}
        />

        {error && (
          <p style={{ color: "red", fontSize: "20px", margin: "15px auto" }}>
            {error}
          </p>
        )}

        <UserBtn style={{ display: "flex", margin: "15px auto" }}>
          {isLoading ? "loading" : " Submit"}
        </UserBtn>
      </form>

      <LinkWrapper>
        <LinkToPage>
          Agar sizda account bo'lmasan <br />
          Ushbu havolaga ustiga <Link to={ROUTES.REGISTER}>bosing</Link>
        </LinkToPage>
      </LinkWrapper>
    </div>
  );
};

export default LoginPage;
