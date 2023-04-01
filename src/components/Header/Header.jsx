import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { HeaderWrapper, OrderList, List, UserBtn } from "./style";
import { ROUTES } from "../Router/Router";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../store/selectors";
const Header = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <HeaderWrapper>
      <OrderList>
        <List>
          <Link to={ROUTES.PRODUCTS}>PRODUCT</Link>
          <Link to={ROUTES.BASKET}>
            <ShoppingCart size={35} />
          </Link>
          {!isLoggedIn ? (
            <>
              <Link to={ROUTES.REGISTER}>
                <UserBtn>Register</UserBtn>
              </Link>
              <Link to={ROUTES.LOGIN}>
                <UserBtn>Login</UserBtn>
              </Link>
            </>
          ) : null}
        </List>
        <Link to={ROUTES.MY_PROFILE}>
          <Avatar alt="" src="" />
        </Link>
      </OrderList>
    </HeaderWrapper>
  );
};

export default Header;
