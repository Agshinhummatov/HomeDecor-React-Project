import { useGetAllProductsQuery } from "../../services/product";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import WishListElement from "../../components/WishListElement";
import { useSetPageTitle } from "../../hooks/useSetPageTitle";
import { useLang } from "../../context/LangContext";

const WishList = () => {
  const { lang } = useLang();
  switch (lang) {
    case "Az":
      useSetPageTitle("Siyahı");
      break;
    case "Ru":
      useSetPageTitle("Список");
      break;
    default:
      useSetPageTitle("WishList");
  }
  const { data: products } = useGetAllProductsQuery();
  const [savedItems, setSavedItems] = useState([]);
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    const localStorageItems = JSON.parse(localStorage.getItem("favourites"));
    setSavedItems(localStorageItems || []);
  }, []);

  useEffect(() => {
    const filteredWishList =
      products && Array.isArray(savedItems)
        ? products.filter((p) => savedItems.includes(p.id))
        : [];
    setWishList(filteredWishList);
  }, [products, savedItems]);

  const removeFromWishlist = (productId) => {
    const updatedWishlist = savedItems.filter((itemId) => itemId !== productId);
    setSavedItems(updatedWishlist);
    setWishList(updatedWishlist);
    toast.success("Product removed from favourites");
    localStorage.setItem("favourites", JSON.stringify(updatedWishlist));
  };

  return (
    <section style={{ flex: "2" }}>
      {wishList.length > 0 ? (
        wishList.map((item) => (
          <WishListElement
            lang={lang}
            key={item.id}
            {...item}
            onDelete={() => removeFromWishlist(item.id)}
          />
        ))
      ) : (
        <h2 style={{ textAlign: "center", marginTop: "15rem" }}>
          {lang === "Az"
            ? "Siyahınızda heç bir məhsul yoxdur"
            : lang === "Ru"
            ? "В вашем списке нет товаров"
            : "There are no products in your list"}
        </h2>
      )}
    </section>
  );
};

export default WishList;
