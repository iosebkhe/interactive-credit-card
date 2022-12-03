"use strict";
//// Card Front & Back Elements
const cardFront = document.querySelector("#front");
const cardBack = document.querySelector("#back");
const cardSide = document.querySelectorAll(".card__side");

// Card Type Element
const cardType = document.querySelectorAll(".type");

// Card Number Elements
const cardNumberBox = document.querySelector("#card-number-box");
const cardNumberLabel = document.querySelector("#card-number-label");

// Card Holder Elements
const cardHolderLabel = document.querySelector("#card-holder-label");
const cardHolderName = document.querySelector("#card-holder-name");

// Card Expiration Elements

const cardExpColBox = document.querySelector("#card-exp-col-box");
const cardExpMonth = document.querySelector("#card-exp-month");
const cardExpYear = document.querySelector("#card-exp-year");

// Card Back Elements
const cardBackCvv = document.querySelector("#cvv");

//////////
//// Form

// Select Element
const selectBox = document.querySelector(".form__exp-select-box");

// Form Inputs & Btn
const numberInput = document.querySelector("#number");
const holderInput = document.querySelector("#holder");
const monthInput = document.querySelector("#month");
const yearInput = document.querySelector("#year");
const cvvInput = document.querySelector(".form__cvv-input");

// Default options when there is no data
const defaultCardNum = "#### #### #### ####";
const defaultCardName = "FULL NAME";
const typeArr = Array.from(cardType);

///////////////////////////////////////////////

// Load different background image on refresh
window.addEventListener("load", () => {
  const randomNum = Math.floor(Math.random() * 25) + 1;
  const cardSideArr = Array.from(cardSide);
  cardSideArr.forEach((side) => {
    side.style.backgroundImage = `linear-gradient(
      to bottom,
      rgb(0, 0, 0, 0.3) 50%,
      rgb(0, 0, 0, 0.9)
    ),
    url(./images/${randomNum}-min.jpeg)`;
  });
});

// cleave.js - format card types and their images
const number = new Cleave(".number", {
  creditCard: true,
  delimiter: "-",
  onCreditCardTypeChanged: function (type) {
    if (type === "visa" || type === "unknown") {
      typeArr.forEach((type) => {
        type.src = "./images/visa.png";
      });
    }

    if (type === "amex") {
      typeArr.forEach((type) => {
        type.src = "./images/amex.png";
      });
    }

    if (type === "mastercard") {
      typeArr.forEach((type) => {
        type.src = "./images/mastercard.png";
      });
    }

    if (type === "diners") {
      typeArr.forEach((type) => {
        type.src = "./images/dinersclub.png";
      });
    }

    if (type === "jcb" || type === "jcb15") {
      typeArr.forEach((type) => {
        type.src = "./images/jcb.png";
      });
    }

    if (type === "unionPay") {
      typeArr.forEach((type) => {
        type.src = "./images/unionpay.png";
      });
    }

    if (type === "discover") {
      typeArr.forEach((type) => {
        type.src = "./images/discover.png";
      });
    }
  },
});

// Number input handler
const numberInputHandler = function (e) {
  e.preventDefault();
  const value = e.target.value;

  if (value !== "") {
    cardNumberLabel.textContent = value;
  } else {
    cardNumberLabel.textContent = defaultCardNum;
  }
};

// Holder input handler
const holderInputHandler = function (e) {
  e.preventDefault();
  const value = e.target.value;

  if (value !== "") {
    cardHolderName.textContent = value;
  } else {
    cardHolderName.textContent = defaultCardName;
  }
};

// Cvv input handler
const cvvInputHandler = function (e) {
  e.preventDefault();
  const value = e.target.value;

  if (value && value !== "") {
    cardBackCvv.textContent = value;
  } else if (value === "") {
    cardBackCvv.textContent = "";
  }
};

// Options handler
const optionHandler = function (e) {
  const clickMonth = e.target.classList.contains("month");
  const clickYear = e.target.classList.contains("year");
  const value = e.target.value;
  if (clickMonth && value !== "Month") {
    cardExpMonth.textContent = value;
  }
  if (clickYear && value !== "Year") {
    cardExpYear.textContent = value;
  }
};

// Outline handler
const outLineHandler = function (e) {
  e.classList.toggle("outline-active");
};

// Blur handler
const cardRotateBack = function (e) {
  cardFront.classList.add("card-front-rotate");
  cardBack.classList.add("card-back-rotate");
};

const cardRotateFront = function (e) {
  cardFront.classList.remove("card-front-rotate");
  cardBack.classList.remove("card-back-rotate");
};

numberInput.addEventListener("input", numberInputHandler);
numberInput.addEventListener("click", (e) => {
  outLineHandler(cardNumberBox);
});
numberInput.addEventListener("blur", (e) => {
  outLineHandler(cardNumberBox);
});

holderInput.addEventListener("input", holderInputHandler);
holderInput.addEventListener("click", (e) => {
  outLineHandler(cardHolderName);
});
holderInput.addEventListener("blur", (e) => {
  outLineHandler(cardHolderName);
});

//cvv input
cvvInput.addEventListener("input", cvvInputHandler);
cvvInput.addEventListener("click", cardRotateBack);
cvvInput.addEventListener("blur", cardRotateFront);

monthInput.addEventListener("click", (e) => {
  outLineHandler(cardExpColBox);
});
monthInput.addEventListener("blur", (e) => {
  outLineHandler(cardExpColBox);
});
yearInput.addEventListener("blur", (e) => {
  outLineHandler(cardExpColBox);
});
yearInput.addEventListener("click", (e) => {
  outLineHandler(cardExpColBox);
});
selectBox.addEventListener("input", optionHandler);
