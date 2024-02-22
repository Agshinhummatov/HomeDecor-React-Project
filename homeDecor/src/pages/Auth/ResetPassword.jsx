import React from "react";
import ResetPass from "../../components/Auth/ResetPass";
import { useLang } from "../../context/LangContext";

const ResetPassword = () => {
  const { lang } = useLang();
  return (
    <>
      <ResetPass lang={lang} />
    </>
  );
};

export default ResetPassword;
