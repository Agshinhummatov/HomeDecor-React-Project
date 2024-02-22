import "../BreadCrumbs/breadCrumb.css";
import { Link, useLocation, useParams, useNavigate } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";

function BreadCrumbs({ open, lang }) {
  const params = useParams();
  const routes = [
    {
      path: "/",
      breadcrumb:
        lang === "Az" ? "Ana Səhifə" : lang === "Ru" ? "Главная" : "Home",
    },
    {
      path: "/about",
      breadcrumb:
        lang === "Az" ? "Haqqımızda" : lang === "Ru" ? "О нас" : "About Us",
    },
    {
      path: "/contact",
      breadcrumb:
        lang === "Az" ? "Əlaqə" : lang === "Ru" ? "Контакты" : "Contact",
    },
    {
      path: "/collections",
      breadcrumb:
        lang === "Az"
          ? "Kolleksiyalar"
          : lang === "Ru"
          ? "Коллекции"
          : "Collections",
    },
    {
      path: "/checkout",
      breadcrumb:
        lang === "Az" ? "Ödəniş" : lang === "Ru" ? "Оплата" : "Checkout",
    },
    {
      path: "/products",
      breadcrumb:
        lang === "Az" ? "Məhsullar" : lang === "Ru" ? "Товары" : "Products",
    },
    {
      path: "/results",
      breadcrumb:
        lang === "Az"
          ? "Axtarış Nəticələri"
          : lang === "Ru"
          ? "Результаты поиска"
          : "Search Results",
    },
    {
      path: "/myaccount",
      breadcrumb:
        lang === "Az"
          ? "Hesabım"
          : lang === "Ru"
          ? "Мой аккаунт"
          : "My Account",
    },
    {
      path: "/card",
      breadcrumb:
        lang === "Az" ? "Səbət" : lang === "Ru" ? "Корзина" : "Shopping Cart",
    },
    { path: "/details/:id", breadcrumb: null },
    {
      path: "/details",
      breadcrumb:
        lang === "Az" ? "Məhsullar" : lang === "Ru" ? "Товар" : "Products",
    },
    { path: "/details/:id/:title", breadcrumb: params.title },
  ];

  const breadcrumbs = useBreadcrumbs(routes);
  const location = useLocation();

  return (
    !open &&
    !location.pathname.includes("/error") && (
      <section className="breadCrumbs">
        <div className="container">
          <nav className="breadcrumbs__items">
            {breadcrumbs.map(({ match, breadcrumb }) => (
              <Link
                key={match.pathname}
                to={
                  match.pathname === "/details"
                    ? (match.pathname = "/products")
                    : match.pathname
                }
                className={
                  match.pathname === location.pathname
                    ? "breadcrumbs__items--link breadcrumb-active"
                    : "breadcrumbs__items--link breadcrumb-not-active"
                }
              >
                {breadcrumb}
              </Link>
            ))}
          </nav>
        </div>
      </section>
    )
  );
}

export default BreadCrumbs;
