import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import React from "react";
import styles from "../LoginTopBackButton/login.module.css";

const LoginTopBackButton = ({ lang }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <div
      style={{
        marginBottom: location.pathname === "/auth/register" && "2.5rem",
      }}
      className={styles["login__top"]}
    >
      <Link onClick={goBack} className={styles["back__btn"]}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
        >
          <path
            d="M12.8408 4L4.84082 12L12.8408 20L14.2658 18.6L8.66582 13H20.8408V11H8.66582L14.2658 5.4L12.8408 4Z"
            fill="#EEF0F2"
          />
        </svg>
        {lang === "Az" ? "Geri" : lang === "Ru" ? "Назад" : "Back"}
      </Link>
    </div>
  );
};

export default LoginTopBackButton;
