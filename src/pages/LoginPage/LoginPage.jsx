import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { UserBtn } from "../../components/Header/style";
import { ROUTES } from "../../components/Router/Router";
import { LinkToPage, LinkWrapper } from "./styles";
import { AsyncThunks } from "../../store/actions";
import { getIsLoading, getUserError } from "../../store/selectors";
import { Button, Paper, TextField } from "@mui/material";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const error = useSelector(getUserError);
  const isLoading = useSelector(getIsLoading);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await dispatch(
      AsyncThunks.login({
        phoneNumber: e.target[0].value,
        password: e.target[2].value,
      })
    );
    if (response.payload?.token) {
      navigate(ROUTES.PRODUCTS);
    }
  };

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "20px" }}
      >
        <Paper
          elevation={10}
          sx={{ width: "50%", padding: "15px", borderRadius: "20px" }}
        >
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
              id="standard-only"
              label="Phone number"
              type="phone-number"
              variant="outlined"
              inputRef={inputRef}
              sx={{
                width: "85%",
                fontSize: "20px",
                margin: "15px auto ",
              }}
            />
            <TextField
              id="standard-no"
              label="Password"
              type="password"
              variant="outlined"
              sx={{
                width: "85%",
                fontSize: "20px",
                margin: "0px  auto ",
              }}
            />

            {error && (
              <p
                style={{ color: "red", fontSize: "20px", margin: "15px auto" }}
              >
                {error}
              </p>
            )}

            <Button
              variant="contained"
              type="submit"
              sx={{ width: "300px", margin: "25px auto" }}
            >
              {isLoading ? "loading..." : " Submit"}
            </Button>
          </form>
        </Paper>
      </div>

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
