import { useEffect } from "react";
import React, { useState } from "react";

function CustomRadioInput({ defaultChecked, name, id }) {
  const [isChecked, setIsChecked] = useState(defaultChecked);

  const handleChange = (e) => {
    setIsChecked(e.target.checked);
    e.target.checked ? console.log("true") : console.log("false");
  };
  useEffect(() => {}, [isChecked]);

  return (
    <>
      {isChecked ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z"
            fill="#B8926A"
          />
          <path
            d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z"
            fill="#B8926A"
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
          {/* Your SVG code for the unchecked state goes here */}
          <path
            d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z"
            fill="#B0B0B0"
          />
        </svg>
      )}
      <input
        type="radio"
        name={name}
        id={id}
        defaultChecked={isChecked}
        onClick={handleChange}
      />
    </>
  );
}

export default CustomRadioInput;
