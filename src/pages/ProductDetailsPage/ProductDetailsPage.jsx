import { Paper } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { AsyncThunks } from "../../store/actions";
import { getProductDetails } from "../../store/selectors";
import {
  BtnWrapper,
  ImageWrapper,
  ProductDetailWrapper,
  TitleWrapper,
  Wrapper,
} from "./styles";

const ProductDetailsPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const product = useSelector(getProductDetails);
  const navigate = useNavigate();
  const fetchProductDetails = async () => {
    await dispatch(AsyncThunks.getProductDetails(params.id));
  };

  useEffect(() => {
    fetchProductDetails();
  }, []);

  return (
    <ProductDetailWrapper>
      <Wrapper>
        <ImageWrapper>
          <img src={product.picture} alt="" />
        </ImageWrapper>
        <TitleWrapper>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <BtnWrapper>
            <button onClick={() => {}}>Add To Basket</button>
            <button onClick={() => {}}>Back</button>
          </BtnWrapper>
        </TitleWrapper>
      </Wrapper>
    </ProductDetailWrapper>
  );
};

export default ProductDetailsPage;
