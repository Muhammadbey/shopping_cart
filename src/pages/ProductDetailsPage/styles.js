import styled from "styled-components";

export const ProductDetailWrapper = styled.div`
  width: 80%;
  height: 600px;
  margin: auto;
`;
export const Wrapper = styled.div`
  height: 400px;
  margin: 50px 0px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  display: flex;
  justify-content: center;
`;

export const ImageWrapper = styled.div`
  margin: auto 0px;
  img {
    width: 450px;
    hight: 450px;
  }
`;

export const TitleWrapper = styled.div`
  margin: auto 150px;
  h1 {
    font-size: 55px;
  }
  p {
    font-size: 35px;
  }
  button {
    width: 300px;
  }
  button {
    width: 200px;
    height: 50px;
    font-size: 20px;
    font-weight: bold;
    margin: 15px auto;
    border-radius: 15px;
    outline: none;
    border: none;
    cursor: pointer;
    :hover {
      background-color: orange;
    }
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  gap: 15px;
`;
