import { Navbar } from "react-bootstrap";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import React, { useState, useRef } from "react";

const ErrorLayout = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const location = useLocation();
  return (
    <>
      <Header open={open} setOpen={setOpen} />
      <Navbar open={open} setOpen={setOpen} />
      {<Outlet />}
    </>
  );
};

export default ErrorLayout;
