import { useNavigate, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import styles from "../FilterElements/filterElements.module.css";

const FilterElement = React.memo(function FilterElements({
  options,
  onFilterClick,
  filterType,
  removeFilterClick,
  setFilters,
  filterItems,
  title,
  titleAz,
  titleRu,
  lang,
}) {
  const navigate = useNavigate();
  const initialCheckboxesState = {
    all: true,
    ...options.reduce((options, { title }) => {
      options[title] = false;
      return options;
    }, {}),
  };
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const categoryIds = searchParams.get("categoryIds");
    const collectionIds = searchParams.get("collectionIds");

    if (filterType === "category" && filterItems.length === 0) {
      searchParams.delete("categoryIds");
      const updatedURL = `${location.pathname}?${searchParams.toString()}`;
      navigate(`${updatedURL}`, { replace: true });
    } else if (filterType === "collections" && filterItems.length === 0) {
      searchParams.delete("collectionIds");
      const updatedURL = `${location.pathname}?${searchParams.toString()}`;
      navigate(`${updatedURL}`, { replace: true });
    }
  }, [filterItems]);

  const [isExpanded, setIsExpanded] = useState(false);
  const [checkboxes, setCheckboxes] = useState(initialCheckboxesState);
  const uniqueAllId = `all-${filterType}`;

  const handleChange = (checkboxName) => {
    if (checkboxName === "all") {
      const updatedCheckboxes = { ...checkboxes };
      updatedCheckboxes.all = !updatedCheckboxes.all;
      for (const key in updatedCheckboxes) {
        if (key !== "all") {
          updatedCheckboxes[key] = false;
        }
      }
      setCheckboxes(updatedCheckboxes);
    } else {
      setCheckboxes((prevCheckboxes) => ({
        ...prevCheckboxes,
        all: false, // Uncheck "All" when any other checkbox changes
        [checkboxName]: !prevCheckboxes[checkboxName],
      }));
    }
  };

  return (
    <div className={styles["filters "]}>
      <p
        onClick={() => setIsExpanded(!isExpanded)}
        className={styles.filters__title}
      >
        {lang === "Az" ? titleAz : lang === "Ru" ? titleRu : title}
        <span
          style={{ transform: isExpanded ? "rotate(180deg)" : "" }}
          className={styles["filters__title--arrow"]}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M22 8L12 18L2 8L3.775 6.225L12 14.45L20.225 6.225L22 8Z"
              fill="#B8926A"
            />
          </svg>
        </span>
      </p>
      <div
        className={`${styles.filters__item} ${
          isExpanded ? styles.expanded : ""
        }`}
      >
        <label
          onClick={() => {
            setFilters([]);
          }}
          className={styles["filters__item--label"]}
          htmlFor={uniqueAllId}
        >
          <input
            id={uniqueAllId}
            defaultChecked={true}
            onChange={(e) => handleChange("all")}
            type="checkbox"
          />
          {filterItems.length === 0 ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
                stroke="#B8926A"
                strokeWidth="1.5"
              />
              <path
                d="M8.5 12.5L10.5 14.5L15.5 9.5"
                stroke="#B8926A"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
                stroke="#B8926A"
                strokeWidth="1.5"
              />
            </svg>
          )}
          {lang === "Az" ? "hamısı" : lang === "Ru" ? "все" : "all"}
        </label>
        {options.map(({ title, titleAz, titleRu, id }) => (
          <label
            key={title}
            className={styles["filters__item--label"]}
            htmlFor={title}
            onClick={(e) => {
              e.target.checked
                ? onFilterClick(id, filterType)
                : removeFilterClick(id, filterType);
            }}
          >
            <input
              id={title}
              value={checkboxes[title]}
              defaultChecked={checkboxes[title]}
              onChange={() => handleChange(title)}
              type="checkbox"
            />
            {checkboxes[title] || filterItems.includes(id) ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
                  stroke="#B8926A"
                  strokeWidth="1.5"
                />
                <path
                  d="M8.5 12.5L10.5 14.5L15.5 9.5"
                  stroke="#B8926A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
                  stroke="#B8926A"
                  strokeWidth="1.5"
                />
              </svg>
            )}
            {lang === "Az" ? titleAz : lang === "Ru" ? titleRu : title}
          </label>
        ))}
      </div>
    </div>
  );
});

export default React.memo(FilterElement);
