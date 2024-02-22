import "../Footer/footer.css";
import { Link } from "react-router-dom";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__list container">
        <div className="footer__left">
          <Link className="footer__list--title" to="/">
            HomeDecor
          </Link>
        </div>
        <div className="footer__right">
          <p className="footer__list--desc">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui{" "}
          </p>
          <Link to="tel:+994505555555">+994 50 555 55 55</Link>
          <Link to="mailto:youremailhere@gmail.com">
            youremailhere@gmail.com
          </Link>
        </div>
      </div>
      <div className="footer__rights container">
        <p> © 2022 All Right Reserved. Developed by Webcoder Agency</p>
      </div>
    </footer>
  );
};

export default Footer;
