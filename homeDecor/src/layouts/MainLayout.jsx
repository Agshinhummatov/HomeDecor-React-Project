import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Headers from "../components/Headers";
import Notification from "../components/Notification";
import React, { useRef, useState, useEffect } from "react";
import { useLang } from "../context/LangContext";

const MainLayout = () => {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const node = useRef();
  const location = useLocation();
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);
  return (
    <>
      <Headers lang={lang} setLang={setLang} />
      <Notification />
      {<Outlet />}
      {location.pathname !== "/error" && <Footer />}
    </>
  );
};

export default MainLayout;
