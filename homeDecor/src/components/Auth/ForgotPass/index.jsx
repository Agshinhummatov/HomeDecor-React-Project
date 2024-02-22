import ButtonPrimary from "../../ButtonPrimary";
import FormBottomQuestion from "../FormBottomQuestion";
import FormTitle from "../FormTitle";
import React from "react";
import styles from "../Login/login.module.css";

const ForgotPass = () => {
  return (
    <div className={styles["login"]}>
      <FormTitle title="reset password" />
      <form className={styles["login__form"]}>
        <div className={styles["form__label"]}>
          <input type="email" placeholder="E-MAIL ADRESS" />
        </div>

        <ButtonPrimary>Log in</ButtonPrimary>
      </form>

      <FormBottomQuestion
        question="Don't have an account?"
        path="auth/register"
        pathname="register"
      />
    </div>
  );
};

export default ForgotPass;
