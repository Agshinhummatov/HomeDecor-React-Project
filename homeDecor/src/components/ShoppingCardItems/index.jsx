import {
  useGetAllBasketProductsQuery,
  useDeleteBasketProductMutation,
} from "../../services/basketProducts";
import { useGetAllProductsQuery } from "../../services/product";
import Loader from "../Loader";
import React, { useEffect, useState } from "react";
import ShoppingCartElement from "../ShoppingCartElement";
import styles from "./shoppingCardLeft.module.css";
import toast from "react-hot-toast";
import { useGetAllColorsQuery } from "../../services/colors";
import { useBasketCount } from "../../context/BasketCountContext";

const ShoppingCardItems = ({
  setTotalPriceForSummary,
  lang,
}) => {
  const {
    data: basketProducts,
    isLoading,
    refetch: refetchBasketProducts,
  } = useGetAllBasketProductsQuery();
  const { data: products } = useGetAllProductsQuery();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const { data: colors } = useGetAllColorsQuery();
  const [totalCount, setTotalCount] = useState(0); 
  const [totalPrice, setTotalPrice] = useState(0); 
  const [deleteBasketProduct] = useDeleteBasketProductMutation();
 const {setBasketCount} = useBasketCount();
  useEffect(() => {
    setTotalPriceForSummary(totalPrice.toFixed(2));
  }, [totalPrice]);

  useEffect(()=>{},[basketProducts])

  const updateProductCount = (id, newCount, price) => {
    const parsedPrice = parseFloat(price);

    fetch(`http://localhost:3000/basketProduct/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch product data");
        }
        return response.json();
      })
      .then((product) => {
        const priceChange = (newCount - product.count) * parsedPrice;
        product.count = newCount;

        fetch(`http://localhost:3000/basketProduct/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(product),
        })
          .then((response) => {
            if (!response.ok) {
              if (lang === "Az") {
                toast.error("Məhsul sayı serverdə yenilənmədi");
              } else if (lang === "Ru") {
                toast.error("Количество товаров не обновлено на сервере");
              } else {
                toast.error("Failed to update product count on the server");
              }
              throw new Error("Failed to update product count on the server");
            }
            refetchBasketProducts();
            setTotalPrice(
              (prevTotalPrice) => prevTotalPrice + Number(priceChange)
            );
          })
          .catch((error) => {
            toast.error(error.message);
          });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleDeleteBasketProduct = (basketProductId) => {
    deleteBasketProduct(basketProductId);
    refetchBasketProducts();
    setBasketCount(basketProducts.length);
    if (lang === "Az") {
      toast.success("Məhsul səbətdən silindi");
    } else if (lang === "Ru") {
      toast.success("Товар удален из корзины");
    } else {
      toast.success("Product deleted from basket");
    }
  };

  const filteredBasketProducts = basketProducts?.filter((bp) =>
    products?.some(
      (product) => bp.productId === product.id && bp.userId === user?.id
    )
  );

  useEffect(() => {
    if (filteredBasketProducts && products) {
      const initialTotalPrice = filteredBasketProducts.reduce((total, bp) => {
        const product = products.find((p) => p.id === bp.productId);
        return total + product.price * bp.count;
      }, 0);
      setTotalPrice(initialTotalPrice);

      const initialTotalCount = filteredBasketProducts.reduce(
        (totalCount, bp) => {
          const product = products.find((p) => p.id === bp.productId);
          return totalCount + bp.count;
        },
        0
      );
      setBasketCount(initialTotalCount);
    }
  }, [basketProducts, products]);

  return isLoading || !filteredBasketProducts ? (
    <Loader />
  ) : (
    <div className={styles["items"]}>
      {filteredBasketProducts?.map((bp) => {
        const product = products.find(
          (p) => p.id === bp.productId && bp.userId === user?.id
        );
        const color = colors?.find((c) => c.id === bp.colorId);
        return (
          <ShoppingCartElement
            lang={lang}
            key={bp.id}
            basketProductId={bp.id}
            updateProductCount={updateProductCount} // Pass the update function
            {...product}
            productId={bp.id}
            count={bp.count}
            colorName={color?.title}
            onDelete={() => {
              handleDeleteBasketProduct(bp.id);
            }}
          />
        );
      })}
    </div>
  );
};

export default ShoppingCardItems;
