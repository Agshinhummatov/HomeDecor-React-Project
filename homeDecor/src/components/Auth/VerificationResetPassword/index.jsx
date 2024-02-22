import ButtonPrimary from "../../ButtonPrimary";
import FormBottomQuestion from "../FormBottomQuestion";
import FormTitle from "../FormTitle";
import React from "react";
import styles from "../Login/login.module.css";

const VerificationResetPassword = ({ lang }) => {
  return (
    <div className={styles["login"]}>
      <FormTitle
        title={
          lang === "Az"
            ? "Şifrəni yenilə"
            : lang === "Ru"
            ? "Сбросить пароль"
            : "Verification"
        }
      />
      <form className={styles["login__form"]}>
        <div className={styles["form__label"]}>
          <input
            type="email"
            placeholder={
              lang === "Az"
                ? "Elektron poçt"
                : lang === "Ru"
                ? "Электронная почта"
                : "Email"
            }
          />
        </div>

        <ButtonPrimary>
          {lang === "Az"
            ? "Təsdiqlə"
            : lang === "Ru"
            ? "Подтвердить"
            : "Confirm"}
        </ButtonPrimary>
      </form>

      <FormBottomQuestion
        question={
          lang === "Az"
            ? "Kod almadınız?"
            : lang === "Ru"
            ? "Hе получили код?"
            : "Didn't get the code?"
        }
        path="auth/resend"
        pathname="resend"
      />
    </div>
  );
};

export default VerificationResetPassword;
