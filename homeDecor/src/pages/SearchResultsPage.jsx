import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ProductElement from "../components/ProductElement";
import Results from "../components/Results";
import SectionTop from "../components/SectionTop";
import { useLang } from "../context/LangContext";
import { useSetPageTitle } from "../hooks/useSetPageTitle";
import { useGetAllProductsQuery } from "../services/product";

const SearchResultsPage = () => {
  const { lang } = useLang();
  switch (lang) {
    case "Az":
      useSetPageTitle("Axtarış");
      break;
    case "Ru":
      useSetPageTitle("Поиск");
      break;
    default:
      useSetPageTitle("Search");
  }

  const [currentPage, setCurrentPage] = useState(0);
  const [searchResults, setSearchResults] = useState([]);
  const { data: products, isLoading } = useGetAllProductsQuery();
  const { search } = useLocation();
  const productsPerPage = 4;
  const queryString = new URLSearchParams(search);
  const searchValue = decodeURIComponent(queryString.get("search"));

  useEffect(() => {
    if (searchValue !== "") {
      const results = products?.filter((product) => {
        switch (lang) {
          case "Az":
            return product.titleAz
              .toLowerCase()
              .includes(searchValue.toLowerCase());
          case "Ru":
            return product.titleRu
              .toLowerCase()
              .includes(searchValue.toLowerCase());
          default:
            return product.title
              .toLowerCase()
              .includes(searchValue.toLowerCase());
        }
      });
      setSearchResults(results);
    }
  }, [searchValue, products]);
  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };

  const offset = currentPage * productsPerPage;
  const currentProducts = searchResults?.slice(
    offset,
    offset + productsPerPage
  );
  const pageCount = Math.ceil(searchResults?.length / productsPerPage);

  return (
    <main>
      <div className="container">
        <SectionTop
          title={
            lang === "Az"
              ? "Axtarış nəticəsi"
              : lang === "Ru"
              ? "Поиск результатов "
              : "Search results"
          }
        />
        <p style={{ marginBottom: "5rem" }}>
          {lang === "Az" ? "Axtarış:" : lang === "Ru" ? "Поиск:" : "Search:"} "
          {searchValue}"
        </p>
        {currentProducts && currentProducts.length > 0 ? (
          <Results
            pageCount={pageCount}
            currentPage={currentPage}
            handlePageClick={handlePageClick}
          >
            {currentProducts?.map((product) => (
              <ProductElement lang={lang} key={product.id} {...product} />
            ))}
          </Results>
        ) : (
          <h2 style={{ marginBottom: "5rem" }}>
            {lang === "Az"
              ? "Axtarış nəticəsi tapılmadı"
              : lang === "Ru"
              ? "Поиск результатов не дал результатов"
              : "Search results not found"}
          </h2>
        )}
      </div>
    </main>
  );
};

export default SearchResultsPage;
