import React from "react";
import VerificationResetPassword from "../../components/Auth/VerificationResetPassword";
import { useLang } from "../../context/LangContext";

const VerificationReset = () => {
  const { lang } = useLang();
  return (
    <>
      <VerificationResetPassword lang={lang} />
    </>
  );
};

export default VerificationReset;
