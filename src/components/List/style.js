import styled from "styled-components";

export const ItemList = styled.li`
  display: flex;
  flex-direction: column;
  list-style: none;
  background-color: white;
  padding: 20px;
  border-radius: 20px;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  img {
    width: 200px;
  }
  h3 {
    text-align: center;
    font-size: 23px;
    margin: 20px 0;
  }
  p {
    font-size: 20px;
    text-align: center;
  }
`;
export const AddButton = styled.button`
  margin: 20px auto;
  padding: 15px;
  border-radius: 20px;
  border: none;
  font-weight: 600;
  :hover {
    cursor: pointer;
    background-color: orange;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  margin: auto;
  button {
    width: 50px;
    margin-left: 15px;
    margin-right: 15px;
    padding: 15px 15px;
    border-radius: 10px;
    border: none;
    :hover {
      cursor: pointer;
      background-color: orange;
    }
    p {
      font-size: 60px;
    }
  }
`;
