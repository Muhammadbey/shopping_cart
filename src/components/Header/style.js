import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 100px;
  background-color: black;
  display: flex;
  justify-content: flex-end;
  aling-items: center;
`;
export const OrderList = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  aling-items: center;
`;

export const List = styled.div`
  a {
    text-decoration: none;
    color: white;
    font-size: 25px;
    font-weight: 500;
    padding: 15px 10px;
  }
`;

export const UserBtn = styled.button`
  font-size: 20px;
  font-weight: 600;
  padding: 15px;
  border-radius: 18px;
  outline: none;
  border: none;
  :hover {
    background-color: orange;
    cursor: pointer;
  }
`;
