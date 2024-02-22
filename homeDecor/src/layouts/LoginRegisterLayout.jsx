import { Outlet } from "react-router-dom";
import Background from "../components/Auth/Background";
import Headers from "../components/Headers";
import LoginTopBackButton from "../components/Auth/LoginTopBackButton";
import Notification from "../components/Notification";
import React from "react";
import styles from "./loginregister.module.css";
import { useLang } from "../context/LangContext";

const LoginRegisterLayout = () => {
  const { lang, setLang } = useLang();
  return (
    <>
      <div className={styles.navbar}>
        <Headers lang={lang} setLang={setLang} />
      </div>
      <section
        style={{
          padding: "0",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <Notification />
        <div style={{ padding: "4rem", flex: "1" }}>
          <LoginTopBackButton lang={lang} />
          {<Outlet />}
        </div>
        <Background />
      </section>
    </>
  );
};

export default LoginRegisterLayout;
