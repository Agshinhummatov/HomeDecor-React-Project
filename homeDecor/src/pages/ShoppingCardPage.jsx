import React, { useEffect, useState } from "react";
import SectionTop from "../components/SectionTop";
import ShoppingCardItems from "../components/ShoppingCardItems";
import ShoppingCartContainer from "../components/ShoppingCartContainer";
import Summary from "../components/Summary";
import { useLang } from "../context/LangContext";
import { useSetPageTitle } from "../hooks/useSetPageTitle";
import { useGetAllBasketProductsQuery } from "../services/basketProducts";
import { useGetAllProductsQuery } from "../services/product";

const ShoppingCardPage = () => {
  const { lang } = useLang();
  const [totalPriceForSummary, setTotalPriceForSummary] = useState(0);
  const [totalCountForSummary, setTotalCountForSummary] = useState(0);
  const { data: products, isLoading: productsIsLoading } =
    useGetAllProductsQuery();
  const {
    data: basketProducts,
    isLoading: basketProductsIsLoading,
    refetch: refetchBasketProducts,
  } = useGetAllBasketProductsQuery();
  const user = JSON.parse(localStorage.getItem("user"));

  const filteredBasketProducts = basketProducts?.filter((bp) =>
    products?.some(
      (product) => bp.userId === user?.id && bp.productId === product.id
    )
  );

  useEffect(() => {
    refetchBasketProducts();
  }, []);

  switch (lang) {
    case "Az":
      useSetPageTitle("Səbət");
      break;
    case "Ru":
      useSetPageTitle("Корзина");
      break;
    default:
      useSetPageTitle("Shopping cart");
  }

  return (
    <main>
      <div className="container">
        <SectionTop
          title={
            lang === "Az"
              ? "Səbət"
              : lang === "Ru"
              ? "Корзина"
              : "Shopping cart"
          }
        />
        {filteredBasketProducts?.length > 0 ? (
          <ShoppingCartContainer lang={lang}>
            <ShoppingCardItems
              lang={lang}
              setTotalPriceForSummary={setTotalPriceForSummary}
            />
            <Summary
              lang={lang}
              totalPriceForSummary={totalPriceForSummary}
            />
          </ShoppingCartContainer>
        ) : (
          <h2 style={{ textAlign: "center" }}>
            {lang === "Az"
              ? "Səbətiniz boşdur"
              : lang === "Ru"
              ? "Ваша корзина пуста"
              : "Your basket is empty"}
          </h2>
        )}
      </div>
    </main>
  );
};

export default ShoppingCardPage;
