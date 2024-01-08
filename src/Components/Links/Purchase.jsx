import React, { useState } from "react";
import "../../css/purchase.css";
import logo from "../../Images/logo.png";
import chip from "../../Images/chip.png";
import map from "../../Images/map.png";

const Purchase = () => {
  const [creditCardNumber, setCreditCardNumber] = useState("");
  const [maskedCardNumber, setMaskedCardNumber] = useState(
    "#### #### #### ####"
  );

  const handleCreditCardChange = (e) => {
    const newInput = e.target.value.replace(/\D/g, "");

    if (newInput.length <= 16) {
      const formattedInput = newInput.replace(/(\d{4})/g, "$1 ").trim();

      setCreditCardNumber(formattedInput);

      let maskIndex = 0;
      const maskedCardArray = Array.from("#### #### #### ####");

      for (let i = 0; i < formattedInput.length; i++) {
        if (
          maskIndex > 4 &&
          maskIndex < 14 &&
          formattedInput[i].trim() !== ""
        ) {
          maskedCardArray[maskIndex] = "*";
        } else {
          maskedCardArray[maskIndex] = formattedInput[i];
        }
        maskIndex++;
      }

      const maskedCardValue = maskedCardArray.join("");
      setMaskedCardNumber(maskedCardValue);
    }
  };

  return (
    <div className="purchase_container">
      <div className="purchase_inner">
        <div className="card_form_container">
          <label htmlFor="creditCard">Credit Card Number:</label>
          <input
            type="text"
            id="creditCard"
            value={creditCardNumber}
            onChange={handleCreditCardChange}
            placeholder="Enter your credit card number"
          />
        </div>
        <div className="card_main">
          <img src={map} className="map_bg" alt="" />
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="second_line">
            <div className="card_num_container">
              <span className="card_number" id="cardNumberSpan">
                {maskedCardNumber}
              </span>
            </div>
            <div className="card_chip">
              <img src={chip} alt="" />
            </div>
          </div>
          <div className="third_line">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
