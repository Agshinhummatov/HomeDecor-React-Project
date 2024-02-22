import React from "react";
import { useParams } from "react-router-dom";
import DetailsSlider from "../components/DetailsSlider";
import DetailsTop from "../components/DetailsTop";
import ProductDetails from "../components/ProductDetails";
import SimilarItems from "../components/SimilarItems";
import { useLang } from "../context/LangContext";
import { useSetPageTitle } from "../hooks/useSetPageTitle";
import { useGetProductByIdQuery } from "../services/product";

const DetailPage = () => {
  const { lang } = useLang();
  switch (lang) {
    case "Az":
      useSetPageTitle("Məhsul");
      break;
    case "Ru":
      useSetPageTitle("Товар");
      break;
    default:
      useSetPageTitle("Product");
  }
  const params = useParams();
  const { data: product, isLoading } = useGetProductByIdQuery(params.id);

  return (
    <main>
      <DetailsTop>
        <DetailsSlider>
          <img
            style={{ width: "200px", height: "200px" }}
            src={product?.img}
            alt=""
          />
          <img
            style={{ width: "200px", height: "200px" }}
            src={product?.img}
            alt=""
          />
          <img
            style={{ width: "200px", height: "200px" }}
            src={product?.img}
            alt=""
          />
          <img
            style={{ width: "200px", height: "200px" }}
            src={product?.img}
            alt=""
          />
          <img
            style={{ width: "200px", height: "200px" }}
            src={product?.img}
            alt=""
          />
          <img
            style={{ width: "200px", height: "200px" }}
            src={product?.img}
            alt=""
          />
          <img
            style={{ width: "200px", height: "200px" }}
            src={product?.img}
            alt=""
          />
        </DetailsSlider>
        {product && <ProductDetails lang={lang} {...product} />}
      </DetailsTop>
      {product && (
        <SimilarItems
          lang={lang}
          productId={product.id}
          categoryId={product.categoryId}
        />
      )}
    </main>
  );
};

export default DetailPage;
