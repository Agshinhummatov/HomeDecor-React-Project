import { Oval } from "react-loader-spinner";
import { useAddItemToBasketMutation } from "../../services/basketProducts";
import { useNavigate } from "react-router-dom";
import ButtonPrimary from "../ButtonPrimary";
import ButtonSecondary from "../ButtonSecondary";
import Colors from "../Colors";
import DetailsCount from "../DetailsCount";
import React, { useEffect, useState } from "react";
import styles from "../ProductDetails/productDetails.module.css";
import toast from "react-hot-toast";

const ProductDetails = ({
  title,
  titleRu,
  titleAz,
  description,
  descriptionAz,
  descriptionRu,
  id,
  price,
  currency,
  lang,
}) => {
  const [added, setAdded] = useState(false);
  const [buttonText, setButtonText] = useState("");
  const [colorId, setColorId] = useState(null);
  const [colors, setColors] = useState([]);
  const [loader, setLoader] = useState(false);
  const [productCount, setProductCount] = useState(1);
  const navigate = useNavigate();
  const products = JSON.parse(localStorage.getItem("favourites")) || [];
  const [userId, setUserId] = useState(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    return user ? user.id : null;
  });

  const getColors = async () => {
    try {
      const response = await fetch(`http://localhost:3000/productColors`);
      if (!response.ok) {
        throw new Error("Failed to fetch colors");
      }
      const res = await response.json();
      const filteredColors = res.filter((p) => p.productId === id);
      setColors(filteredColors);
    } catch (error) {
      console.error("Error fetching colors", error);
    }
  };

  const [addProduct, { isLoading }] = useAddItemToBasketMutation();

  useEffect(() => {
    getColors();
  }, []);

  useEffect(() => {
    if (products.includes(id)) {
      setAdded(true);
    } else {
      setAdded(false);
    }
  }, [lang, products, id]);
  const handleAddToCart = async () => {
    if (userId !== null && userId !== undefined) {
      const newItem = {
        productId: id,
        colorId,
        count: productCount,
        userId,
      };

      try {
        const result = await addProduct(newItem);
        if (result) {
          setLoader(true);
          switch (lang) {
            case "Az":
              toast.success("Məhsul səbətə əlavə edildi");
              break;
            case "Ru":
              toast.success("Товар добавлен в корзину");
              break;
            default:
              toast.success("Product added to cart");
          }
        } else {
          switch (lang) {
            case "Az":
              toast.error("Məhsul səbətə əlavə edilmədi");
              break;
            case "Ru":
              toast.error("Товар не добавлен в корзину");
              break;
            default:
              toast.error("Product not added to cart");
          }
        }
      } catch (error) {
        console.error("Error adding product to cart", error);
        toast.error("Something went wrong");
      } finally {
        setTimeout(() => {
          setLoader(false);
        }, 1000);
      }
    } else {
      if (lang === "Az") {
        toast.error("Zəhmət olmasa daxil olun");
      } else if (lang === "Ru") {
        toast.error("Пожалуйста, войдите");
      } else {
        toast.error("Please login and try again");
      }
      setTimeout(() => {
        navigate(`/auth/login`);
      }, 1000);
    }
  };

  const handleWishBtnClick = (id) => {
    let products = JSON.parse(localStorage.getItem("favourites")) || [];
    if (!products.includes(id)) {
      let products = JSON.parse(localStorage.getItem("favourites")) || [];
      products = [...products, id];
      toast.success("Product added to favourites");
      setAdded(true);
      localStorage.setItem("favourites", JSON.stringify(products));
    } else {
      let products = JSON.parse(localStorage.getItem("favourites")) || [];
      products = products.filter((p) => p !== id);
      toast.success("Product removed from favourites");
      localStorage.setItem("favourites", JSON.stringify(products));
      setAdded(false);
    }
  };

  const handleLangChange = () => {
    switch (lang) {
      case "Az":
        return titleAz;
      case "Ru":
        return titleRu;
      default:
        return title;
    }
  };

  return (
    <div className={styles["details"]}>
      <h2 className={styles["details__title"]}>{handleLangChange()}</h2>
      <p className={styles["details__desc"]}>
        {lang === "Ru"
          ? descriptionRu
          : lang === "Az"
          ? descriptionAz
          : description}
      </p>
      <div className={styles["colors__container"]}>
        {colors?.length > 0 && (
          <Colors
            lang={lang}
            setColorId={setColorId}
            colors={colors}
            title={true}
          />
        )}
      </div>
      <div className={styles["details__count"]}>
        <DetailsCount
          setProductCount={setProductCount}
          productCount={productCount}
        />
      </div>
      <h2 className={styles["details__price"]}>
        {price}
        {currency}
      </h2>
      <div className={styles["action__buttons"]}>
        <div
          onClick={handleAddToCart}
          style={{ flex: "1", justifyContent: "center", display: "flex" }}
        >
          {
            <ButtonPrimary>
              {!loader ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z"
                    stroke="#EAE6DF"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z"
                    stroke="#EAE6DF"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M2.26121 3.09184L2.50997 2.38429H2.50997L2.26121 3.09184ZM2.24876 2.29246C1.85799 2.15507 1.42984 2.36048 1.29246 2.75124C1.15507 3.14201 1.36048 3.57016 1.75124 3.70754L2.24876 2.29246ZM4.58584 4.32298L5.20507 3.89983V3.89983L4.58584 4.32298ZM5.88772 14.5862L5.34345 15.1022H5.34345L5.88772 14.5862ZM20.6578 9.88275L21.3923 10.0342L21.3933 10.0296L20.6578 9.88275ZM20.158 12.3075L20.8926 12.4589L20.158 12.3075ZM20.7345 6.69708L20.1401 7.15439L20.7345 6.69708ZM19.1336 15.0504L18.6598 14.469L19.1336 15.0504ZM5.70808 9.76V7.03836H4.20808V9.76H5.70808ZM2.50997 2.38429L2.24876 2.29246L1.75124 3.70754L2.01245 3.79938L2.50997 2.38429ZM10.9375 16.25H16.2404V14.75H10.9375V16.25ZM5.70808 7.03836C5.70808 6.3312 5.7091 5.7411 5.65719 5.26157C5.60346 4.76519 5.48705 4.31247 5.20507 3.89983L3.96661 4.74613C4.05687 4.87822 4.12657 5.05964 4.1659 5.42299C4.20706 5.8032 4.20808 6.29841 4.20808 7.03836H5.70808ZM2.01245 3.79938C2.68006 4.0341 3.11881 4.18965 3.44166 4.34806C3.74488 4.49684 3.87855 4.61727 3.96661 4.74613L5.20507 3.89983C4.92089 3.48397 4.54304 3.21763 4.10241 3.00143C3.68139 2.79485 3.14395 2.60719 2.50997 2.38429L2.01245 3.79938ZM4.20808 9.76C4.20808 11.2125 4.22171 12.2599 4.35876 13.0601C4.50508 13.9144 4.79722 14.5261 5.34345 15.1022L6.43198 14.0702C6.11182 13.7325 5.93913 13.4018 5.83723 12.8069C5.72607 12.1578 5.70808 11.249 5.70808 9.76H4.20808ZM10.9375 14.75C9.52069 14.75 8.53763 14.7482 7.79696 14.6432C7.08215 14.5418 6.70452 14.3576 6.43198 14.0702L5.34345 15.1022C5.93731 15.7286 6.69012 16.0013 7.58636 16.1283C8.45674 16.2518 9.56535 16.25 10.9375 16.25V14.75ZM4.95808 6.87H17.0888V5.37H4.95808V6.87ZM19.9232 9.73135L19.4235 12.1561L20.8926 12.4589L21.3923 10.0342L19.9232 9.73135ZM17.0888 6.87C17.9452 6.87 18.6989 6.871 19.2937 6.93749C19.5893 6.97053 19.8105 7.01643 19.9659 7.07105C20.1273 7.12776 20.153 7.17127 20.1401 7.15439L21.329 6.23978C21.094 5.93436 20.7636 5.76145 20.4632 5.65587C20.1567 5.54818 19.8101 5.48587 19.4604 5.44678C18.7646 5.369 17.9174 5.37 17.0888 5.37V6.87ZM21.3933 10.0296C21.5625 9.18167 21.7062 8.47024 21.7414 7.90038C21.7775 7.31418 21.7108 6.73617 21.329 6.23978L20.1401 7.15439C20.2021 7.23508 20.2706 7.38037 20.2442 7.80797C20.2168 8.25191 20.1002 8.84478 19.9223 9.73595L21.3933 10.0296ZM16.2404 16.25C17.0021 16.25 17.6413 16.2513 18.1566 16.1882C18.6923 16.1227 19.1809 15.9794 19.6074 15.6318L18.6598 14.469C18.5346 14.571 18.3571 14.6525 17.9744 14.6994C17.5712 14.7487 17.0397 14.75 16.2404 14.75V16.25ZM19.4235 12.1561C19.2621 12.9389 19.1535 13.4593 19.0238 13.8442C18.9007 14.2095 18.785 14.367 18.6598 14.469L19.6074 15.6318C20.0339 15.2842 20.2729 14.8346 20.4453 14.3232C20.6111 13.8312 20.7388 13.2049 20.8926 12.4589L19.4235 12.1561Z"
                    fill="#EAE6DF"
                  />
                </svg>
              ) : (
                <Oval
                  secondaryColor="#1256"
                  color="#FFF"
                  visible={true}
                  height="24"
                  width="24"
                />
              )}
              {lang === "Az"
                ? "Səbətə əlavə et"
                : lang === "Ru"
                ? "Добавить в корзину"
                : "Add to cart"}
            </ButtonPrimary>
          }
        </div>

        <ButtonSecondary href={null} onClick={() => handleWishBtnClick(id)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M15.0005 11C15.5528 11 16.0005 10.5523 16.0005 10C16.0005 9.44771 15.5528 9 15.0005 9C14.4482 9 14.0005 9.44771 14.0005 10C14.0005 10.5523 14.4482 11 15.0005 11Z"
              fill="#B8926A"
            />
            <path
              d="M10.0005 10C10.0005 10.5523 9.55277 11 9.00049 11C8.4482 11 8.00049 10.5523 8.00049 10C8.00049 9.44771 8.4482 9 9.00049 9C9.55277 9 10.0005 9.44771 10.0005 10Z"
              fill="#B8926A"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.25049 5.27567V5C8.25049 2.92893 9.92942 1.25 12.0005 1.25C14.0716 1.25 15.7505 2.92893 15.7505 5V5.27567C16.4089 5.29605 16.9952 5.33261 17.5154 5.39818C18.7167 5.54961 19.689 5.8682 20.4402 6.6018C20.6908 6.84656 20.9136 7.1183 21.1044 7.41205C21.6765 8.29247 21.7982 9.30842 21.7111 10.516C21.6258 11.6979 21.3291 13.1818 20.9524 15.0648L20.9333 15.1604C20.672 16.4673 20.4639 17.5074 20.2066 18.3256C19.9415 19.1683 19.603 19.8497 19.0366 20.4017C18.8418 20.5915 18.6311 20.7643 18.4068 20.918C17.7545 21.3651 17.0199 21.5634 16.1416 21.6581C15.2888 21.75 14.2281 21.75 12.8953 21.75H11.1058C9.77298 21.75 8.7123 21.75 7.85953 21.6581C6.98117 21.5634 6.24663 21.3651 5.59433 20.918C5.36999 20.7643 5.15926 20.5915 4.96448 20.4017C4.39815 19.8497 4.05963 19.1683 3.79454 18.3256C3.53716 17.5074 3.32915 16.4673 3.06778 15.1604L3.04871 15.065C2.67207 13.1819 2.37527 11.698 2.29003 10.516C2.20293 9.30842 2.32464 8.29247 2.89668 7.41205C3.08754 7.1183 3.31031 6.84656 3.56093 6.6018C4.31206 5.8682 5.28441 5.54961 6.48567 5.39818C7.00584 5.33261 7.59211 5.29605 8.25049 5.27567ZM9.75049 5C9.75049 3.75736 10.7578 2.75 12.0005 2.75C13.2431 2.75 14.2505 3.75736 14.2505 5V5.2522C13.8263 5.24999 13.3785 5.25 12.906 5.25H11.0951C10.6226 5.25 10.1747 5.24999 9.75049 5.2522V5ZM4.60898 7.67491C5.02342 7.27015 5.61695 7.01956 6.67327 6.88641C7.74417 6.75141 9.16279 6.75 11.1491 6.75H12.852C14.8383 6.75 16.2569 6.75141 17.3278 6.88641C18.3842 7.01956 18.9777 7.27015 19.3921 7.67491C19.5636 7.84238 19.716 8.02831 19.8466 8.2293C20.1622 8.71507 20.2916 9.34622 20.215 10.4081C20.1373 11.4847 19.8605 12.8761 19.4709 14.8238C19.1992 16.1827 19.006 17.1434 18.7757 17.8755C18.5503 18.5919 18.3108 19.0145 17.9897 19.3275C17.8564 19.4573 17.7122 19.5755 17.5587 19.6808C17.1889 19.9343 16.7275 20.0863 15.9808 20.1667C15.2178 20.249 14.2379 20.25 12.852 20.25H11.1491C9.7632 20.25 8.78334 20.249 8.02027 20.1667C7.27356 20.0863 6.81225 19.9343 6.44237 19.6808C6.28887 19.5755 6.14468 19.4573 6.01141 19.3275C5.69027 19.0145 5.45077 18.5919 5.22541 17.8755C4.99512 17.1434 4.80195 16.1828 4.53016 14.8238C4.14062 12.8761 3.86378 11.4847 3.78614 10.4081C3.70955 9.34622 3.83887 8.71507 4.1545 8.2293C4.28508 8.02831 4.43751 7.84238 4.60898 7.67491Z"
              fill="#B8926A"
            />
          </svg>
          {added
            ? lang === "Az"
              ? "Seçilmişlərdən sil"
              : lang === "Ru"
              ? "Удалить из избранного"
              : "Remove from favourites"
            : lang === "Az"
            ? "Seçilmişlərə əlavə et"
            : lang === "Ru"
            ? "Добавить в избранное"
            : "Add to favourites"}
        </ButtonSecondary>
      </div>
    </div>
  );
};

export default React.memo(ProductDetails);
