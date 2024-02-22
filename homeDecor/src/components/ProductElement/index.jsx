import "../ProductElement/productel.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import React from "react";
import toast from "react-hot-toast";

const ProductElement = ({
  img,
  title,
  titleRu,
  titleAz,
  price,
  currency,
  onClick,
  id,
  lang,
}) => {
  const [added, setAdded] = useState(false);
  const products = JSON.parse(localStorage.getItem("favourites")) || [];

  const handleWishBtnClick = (id) => {
    if (!products.includes(id)) {
      let products = JSON.parse(localStorage.getItem("favourites")) || [];
      products = [...products, id];
      toast.success("Product added to favourites");
      localStorage.setItem("favourites", JSON.stringify(products));
    } else {
      let products = JSON.parse(localStorage.getItem("favourites")) || [];
      products = products.filter((p) => p !== id);
      toast.success("Product removed from favourites");
      localStorage.setItem("favourites", JSON.stringify(products));
    }

    setAdded(!added);
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
    <article onClick={onClick} className="product__item">
      <div className="product__top">
        <Link to={`/details/${id}/${handleLangChange()}`}>
          <img className="product__img" src={img} alt={handleLangChange()} />
        </Link>
        <span
          onClick={() => handleWishBtnClick(id)}
          className={`${products.includes(id) ? `added` : ""} wish__btn`}
        >
          {products.includes(id) ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M2 9.13704C2 14 6.01943 16.5913 8.96173 18.9108C10 19.7293 11 20.4999 12 20.4999C13 20.4999 14 19.7293 15.0383 18.9108C17.9806 16.5913 22 14 22 9.13704C22 4.2741 16.4998 0.825403 12 5.50057C7.50016 0.825403 2 4.2741 2 9.13704Z"
                fill="#B8926A"
              />
              <path
                d="M8.96173 18.9108L8.49742 19.4998L8.96173 18.9108ZM12 5.50057L11.4596 6.02067C11.601 6.16757 11.7961 6.25057 12 6.25057C12.2039 6.25057 12.399 6.16757 12.5404 6.02067L12 5.50057ZM15.0383 18.9108L14.574 18.3218L15.0383 18.9108ZM9.42605 18.3218C7.91039 17.127 6.25307 15.9602 4.93829 14.4797C3.64922 13.0282 2.75 11.3344 2.75 9.13704H1.25C1.25 11.8026 2.3605 13.836 3.81672 15.4757C5.24723 17.0865 7.07077 18.3752 8.49742 19.4998L9.42605 18.3218ZM2.75 9.13704C2.75 6.98617 3.96537 5.18246 5.62436 4.42413C7.23607 3.68741 9.40166 3.88251 11.4596 6.02067L12.5404 4.98047C10.0985 2.44346 7.26409 2.02533 5.00076 3.0599C2.78471 4.07286 1.25 6.42497 1.25 9.13704H2.75ZM8.49742 19.4998C9.00965 19.9036 9.55955 20.3342 10.1168 20.6599C10.6739 20.9854 11.3096 21.2499 12 21.2499V19.7499C11.6904 19.7499 11.3261 19.6292 10.8736 19.3648C10.4213 19.1005 9.95208 18.7365 9.42605 18.3218L8.49742 19.4998ZM15.5026 19.4998C16.9292 18.3752 18.7528 17.0865 20.1833 15.4757C21.6395 13.836 22.75 11.8026 22.75 9.13704H21.25C21.25 11.3344 20.3508 13.0282 19.0617 14.4797C17.7469 15.9602 16.0896 17.127 14.574 18.3218L15.5026 19.4998ZM22.75 9.13704C22.75 6.42497 21.2153 4.07286 18.9992 3.0599C16.7359 2.02533 13.9015 2.44346 11.4596 4.98047L12.5404 6.02067C14.5983 3.88251 16.7639 3.68741 18.3756 4.42413C20.0346 5.18246 21.25 6.98617 21.25 9.13704H22.75ZM14.574 18.3218C14.0479 18.7365 13.5787 19.1005 13.1264 19.3648C12.6739 19.6292 12.3096 19.7499 12 19.7499V21.2499C12.6904 21.2499 13.3261 20.9854 13.8832 20.6599C14.4405 20.3342 14.9903 19.9036 15.5026 19.4998L14.574 18.3218Z"
                fill="#B8926A"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M8.96173 18.9109L9.42605 18.3219L8.96173 18.9109ZM12 5.50063L11.4596 6.02073C11.601 6.16763 11.7961 6.25063 12 6.25063C12.2039 6.25063 12.399 6.16763 12.5404 6.02073L12 5.50063ZM15.0383 18.9109L15.5026 19.4999L15.0383 18.9109ZM9.42605 18.3219C7.91039 17.1271 6.25307 15.9603 4.93829 14.4798C3.64922 13.0282 2.75 11.3345 2.75 9.1371H1.25C1.25 11.8026 2.3605 13.8361 3.81672 15.4758C5.24723 17.0866 7.07077 18.3752 8.49742 19.4999L9.42605 18.3219ZM2.75 9.1371C2.75 6.98623 3.96537 5.18252 5.62436 4.42419C7.23607 3.68748 9.40166 3.88258 11.4596 6.02073L12.5404 4.98053C10.0985 2.44352 7.26409 2.02539 5.00076 3.05996C2.78471 4.07292 1.25 6.42503 1.25 9.1371H2.75ZM8.49742 19.4999C9.00965 19.9037 9.55954 20.3343 10.1168 20.6599C10.6739 20.9854 11.3096 21.25 12 21.25V19.75C11.6904 19.75 11.3261 19.6293 10.8736 19.3648C10.4213 19.1005 9.95208 18.7366 9.42605 18.3219L8.49742 19.4999ZM15.5026 19.4999C16.9292 18.3752 18.7528 17.0866 20.1833 15.4758C21.6395 13.8361 22.75 11.8026 22.75 9.1371H21.25C21.25 11.3345 20.3508 13.0282 19.0617 14.4798C17.7469 15.9603 16.0896 17.1271 14.574 18.3219L15.5026 19.4999ZM22.75 9.1371C22.75 6.42503 21.2153 4.07292 18.9992 3.05996C16.7359 2.02539 13.9015 2.44352 11.4596 4.98053L12.5404 6.02073C14.5983 3.88258 16.7639 3.68748 18.3756 4.42419C20.0346 5.18252 21.25 6.98623 21.25 9.1371H22.75ZM14.574 18.3219C14.0479 18.7366 13.5787 19.1005 13.1264 19.3648C12.6739 19.6293 12.3096 19.75 12 19.75V21.25C12.6904 21.25 13.3261 20.9854 13.8832 20.6599C14.4405 20.3343 14.9903 19.9037 15.5026 19.4999L14.574 18.3219Z"
                fill="#B8926A"
              />
            </svg>
          )}
        </span>
      </div>
      <div className="product__bottom">
        <p className="product__item--title">{handleLangChange()}</p>
        <h3 className="product__item--price">
          {price}
          <span className="product__item--currency">{currency}</span>
        </h3>
      </div>
    </article>
  );
};

export default ProductElement;
