import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

import { HeaderWrapper, OrderList, List, UserBtn } from "./style";
import { ROUTES } from "../router/Router";
const Header = () => {
  return (
    <HeaderWrapper>
      <OrderList>
        <List>
          <Link to="/news">News</Link>
          <Link to="/basket">
            <ShoppingCart size={35} />
          </Link>{" "}
          <Link to={ROUTES.REGISTER}>
            <UserBtn>Register</UserBtn>
          </Link>
          <Link to={ROUTES.LOGIN}>
            <UserBtn>Login</UserBtn>
          </Link>
        </List>
      </OrderList>
    </HeaderWrapper>
  );
};

export default Header;
