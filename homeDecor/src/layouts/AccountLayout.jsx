import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Headers from "../components/Headers";
import Menu from "../components/Account/Menu";
import Notification from "../components/Notification";
import React, { useState } from "react";
import { useEffect } from "react";
import { useLang } from "../context/LangContext";

const AccountLayout = () => {
  const { lang, setLang } = useLang();
  return (
    <>
      <Headers lang={lang} setLang={setLang} />
      <Notification />
      <main>
        <div
          style={{
            display: "flex",
            columnGap: "13.7rem",
            rowGap: "5rem",
            flexWrap: "wrap",
            marginBottom: "clamp(10rem, 8.4906rem + 4.7170vw, 15rem)",
          }}
          className="container"
        >
          <Menu lang={lang} />
          {<Outlet />}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AccountLayout;
