import InputMask from "react-input-mask";
import React, { useState } from "react";

function PhoneNumberInput({ countryCode }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const placeholder = `+${countryCode ? countryCode : "___"} (__) ___ __ __`;

  const handleFocus = () => {
    if (!phoneNumber.startsWith(`+${countryCode}`)) {
      setPhoneNumber(`+${countryCode}`);
    }
  };

  const handleChange = (e) => {
    let input = e.target.value;
    if (input === `+${countryCode}`) {
      input = "";
    }

    setPhoneNumber(input);
  };

  return (
    <>
      <InputMask
        mask="+999 (99) 999 99 99"
        maskChar="_"
        type="text"
        id="phone"
        placeholder={placeholder}
        onFocus={handleFocus}
        value={phoneNumber}
        onChange={handleChange}
      />
    </>
  );
}

export default PhoneNumberInput;
