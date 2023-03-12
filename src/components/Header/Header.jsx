import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

import { HeaderWrapper, OrderList, List } from "./style";
const Header = () => {
  return (
    <HeaderWrapper>
      <OrderList>
        <List>
          <Link to="/news">News</Link>
          <Link to="/basket">
            <ShoppingCart size={35} />
          </Link>
        </List>
      </OrderList>
    </HeaderWrapper>
  );
};

export default Header;
