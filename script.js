//form validation

document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll(".contact__input");
  const submitButton = document.getElementById("submitBtn");
  const requestColorLine = document.querySelector(".request-color-line");

  inputs.forEach(function (input) {
    const errorSpan = input.parentElement.querySelector(".error-message");

    input.addEventListener("input", function () {
      validateInput(input, errorSpan);
      validateAndShowPopup(input);
    });
  });

  function validateInput(input, errorSpan) {
    if (input.id === "username") {
      if (/\d/.test(input.value)) {
        errorSpan.textContent = "Name cannot contain digits";
      } else if (
        input.value.trim().length < 3 ||
        input.value.trim().length > 12
      ) {
        errorSpan.textContent = "Name must be between 3 and 12 characters";
      } else {
        errorSpan.textContent = "";
      }
    } else if (input.id === "email") {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!emailPattern.test(input.value)) {
        errorSpan.textContent = "Please enter a valid email address";
      } else {
        errorSpan.textContent = "";
      }
    } else if (input.id === "more") {
      if (input.value.trim().length < 5 || input.value.trim().length > 80) {
        errorSpan.textContent = "Must be between 5 and 80 characters";
      } else {
        errorSpan.textContent = "";
      }
    }
  }

  function validateAndShowPopup(activeInput) {
    inputs.forEach(function (input) {
      const errorSpan = input.parentElement.querySelector(".error-message");
      if (input === activeInput) {
        validateInput(input, errorSpan);
        errorSpan.style.display = "block";
      } else {
        errorSpan.textContent = "";
        errorSpan.style.display = "none";
      }
    });

    if (areAllInputsValid()) {
      changeButtonAndLineColor(true);
    } else {
      changeButtonAndLineColor(false);
    }
  }

  function changeButtonAndLineColor(valid) {
    if (valid) {
      submitButton.style.color = "green";
      requestColorLine.style.backgroundColor = "green";
    } else {
      submitButton.style.color = "";
      requestColorLine.style.backgroundColor = "";
    }
  }

  function areAllInputsValid() {
    let allInputsValid = true;

    inputs.forEach(function (input) {
      const errorSpan = input.parentElement.querySelector(".error-message");
      validateInput(input, errorSpan);
      if (errorSpan.textContent !== "") {
        allInputsValid = false;
      }
    });

    return allInputsValid;
  }

  function handleButtonClick(event) {
    console.log("Button clicked!");
    event.preventDefault();

    if (areAllInputsValid()) {
      showSuccessAlert();
    }
  }

  submitButton.addEventListener("click", handleButtonClick);
  requestColorLine.addEventListener("click", handleButtonClick);

  function clearForm() {
    inputs.forEach(function (input) {
      input.value = "";
      const errorSpan = input.parentElement.querySelector(".error-message");
      errorSpan.textContent = "";
    });

    changeButtonAndLineColor(false);
  }

  function showSuccessAlert() {
    Swal.fire({
      icon: "success",
      title: "Success!",
      text: "Your message has been successfully sent!",
    }).then((result) => {
      if (
        result.isConfirmed ||
        result.dismiss === Swal.DismissReason.backdrop
      ) {
        clearForm();
      }
    });
  }
});

// add sweet alert on buttons

document.addEventListener("DOMContentLoaded", function () {
  const joinElements = document.querySelectorAll(".join");

  joinElements.forEach(function (element) {
    element.addEventListener("click", function () {
      Swal.fire({
        icon: "success",
        title: "Join Now",
        text: "Thank you for joining!",
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const contactElements = document.querySelectorAll(".contact");

  contactElements.forEach(function (element) {
    element.addEventListener("click", function () {
      Swal.fire({
        icon: "info",
        title: "Contact Sales",
        text: "Our sales team will contact you shortly!",
      });
    });
  });
});

// Dark Theme

const icon = document.getElementById("icon");
const body = document.body;
const homeSection = document.querySelector(".home");
const iconContainer = document.querySelector(".icon-container");
const navbarLinks = document.querySelectorAll(".header__navbar a");
const navLine = document.querySelectorAll(".header__navbar a::before");
const titleClearinghouse = document.querySelector(".home__title-clearinghouse");
const spanClearinghouse = document.querySelector(
  ".home__title-clearinghouse span.italic"
);
const textAbout = document.querySelector(".home__text-about");
const joinButton = document.querySelector(".home__join-now");
const joinColorLine = document.querySelector(".join-color-line");
const whiteBox = document.querySelector(".home__white-box");
console.log(whiteBox);
const elementsToChangeColor = document.querySelectorAll(
  ".home__dollar, .home__box-paragraph, .home__solis-group, .home__box-num"
);
const contactSalesButton = document.querySelector(".home__contact-sales");
const salesColorLine = document.querySelector(".sales-color-line");
const italicSolutions = document.querySelectorAll(".italic");
const productsQuoteImg = document.querySelector(".products__quote-img");
const productsTitles = document.querySelectorAll(".products__title");
const productsParagraphs = document.querySelectorAll(".products__paragraph");
const casesImgPlay = document.querySelector(".cases__img-play");
const casesTitles = document.querySelectorAll(".interface__title");
const casesParagraphs = document.querySelectorAll(".interface__paragraph");
const pricingJoinNow = document.querySelector(".pricing__join-now");
const pricingColorLine = document.querySelector(".pricing-color-line");
const pricingWhiteBox = document.querySelector(".pricing__white-box");
const pricingTitles = document.querySelectorAll(".pricing__title");
const pricingParagraphs = document.querySelectorAll(".pricing__paragraph");
const clientTitles = document.querySelectorAll(".client__title");
const clientParagraphs = document.querySelectorAll(".client__paragraph");
const contactTitles = document.querySelectorAll(".contact__title");
const contactParagraphs = document.querySelectorAll(".contact__paragraph");
const contactLabel = document.querySelector("label .contact__label");
const contactRequest = document.querySelector(".contact__request");
const requestColorLine = document.querySelector(".request-color-line");
const footerP = document.querySelectorAll("#footer-dark");

icon.addEventListener("click", function () {
  body.classList.toggle("dark-theme");
  const isDarkTheme = body.classList.contains("dark-theme");

  if (isDarkTheme) {
    const inputsWithPlaceholders = document.querySelectorAll(".contact__input");
    inputsWithPlaceholders.forEach(function (input) {
      input.style.color = "#fff";
    });

    const footerElements = document.querySelectorAll("#footer-dark");
    footerElements.forEach(function (element) {
      element.style.color = "#fff";
    });

    for (const link of navbarLinks) {
      link.style.color = "#fff";
    }

    for (const solution of italicSolutions) {
      solution.style.color = "#689FF2";
    }

    for (const paragraph of productsParagraphs) {
      paragraph.style.color = "#fff";
    }

    for (const title of productsTitles) {
      title.style.color = "#fff";
    }

    for (const paragraph of pricingParagraphs) {
      paragraph.style.color = "#fff";
    }

    for (const title of pricingTitles) {
      title.style.color = "#fff";
    }

    for (const title of casesTitles) {
      title.style.color = "#fff";
    }

    for (const paragraph of casesParagraphs) {
      paragraph.style.color = "#fff";
    }

    for (const title of clientTitles) {
      title.style.color = "#fff";
    }

    for (const paragraph of clientParagraphs) {
      paragraph.style.color = "#fff";
    }

    for (const title of contactTitles) {
      title.style.color = "#fff";
    }

    for (const paragraph of contactParagraphs) {
      paragraph.style.color = "#fff";
    }

    for (const change of elementsToChangeColor) {
      change.style.color = "#fff";
    }

    for (const line of navLine) {
      line.style.backgroundColor = "#53F3CD";
    }

    body.style.backgroundColor = "#161926";
    whiteBox.style.backgroundColor = "#161926";
    pricingWhiteBox.style.backgroundColor = "#161926";
    contactRequest.style.color = "#F1897B";
    requestColorLine.style.backgroundColor = "#F1897B";
    productsQuoteImg.src = "./assets/png/quote-dark.png";
    homeSection.style.backgroundImage =
      "url(./assets/png/dark-first-screen-image.png)";
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
    titleClearinghouse.style.color = "#fff";
    spanClearinghouse.style.color = "#689FF2";
    textAbout.style.color = "#fff";
    joinButton.style.color = "#53F3CD";
    joinButton.style.borderColor = "#53F3CD";
    joinColorLine.style.backgroundColor = "#53F3CD";
    pricingJoinNow.style.color = "#53F3CD";
    pricingJoinNow.style.borderColor = "#53F3CD";
    pricingColorLine.style.backgroundColor = "#53F3CD";
    contactSalesButton.style.color = "#53F3CD";
    contactSalesButton.style.borderColor = "#53F3CD";
    salesColorLine.style.backgroundColor = "#53F3CD";
    casesImgPlay.src = "./assets/png/icon-play-dark.png";
  } else {
    const inputsWithPlaceholders = document.querySelectorAll(".contact__input");
    inputsWithPlaceholders.forEach(function (input) {
      input.style.color = "#262A3F";
    });

    const footerElements = document.querySelectorAll("#footer-dark");
    footerElements.forEach(function (element) {
      element.style.color = "#000";
    });

    for (const link of navbarLinks) {
      link.style.color = "black";
    }

    for (const solution of italicSolutions) {
      solution.style.color = "#85BBB1";
    }

    for (const title of productsTitles) {
      title.style.color = "initial";
    }

    for (const paragraph of productsParagraphs) {
      paragraph.style.color = "initial";
    }

    for (const paragraph of pricingParagraphs) {
      paragraph.style.color = "#000";
    }

    for (const title of pricingTitles) {
      title.style.color = "#000";
    }

    for (const element of elementsToChangeColor) {
      element.style.color = "initial";
    }

    for (const title of casesTitles) {
      title.style.color = "initial";
    }

    for (const paragraph of casesParagraphs) {
      paragraph.style.color = "initial";
    }

    for (const title of clientTitles) {
      title.style.color = "#000";
    }

    for (const paragraph of clientParagraphs) {
      paragraph.style.color = "#000";
    }

    for (const title of contactTitles) {
      title.style.color = "#000";
    }

    for (const paragraph of contactParagraphs) {
      paragraph.style.color = "#000";
    }

    for (const change of elementsToChangeColor) {
      change.style.color = "#000";
    }

    for (const line of navLine) {
      line.style.backgroundColor = "#000";
    }

    body.style.backgroundColor = "initial";
    whiteBox.style.backgroundColor = "#fff";
    pricingWhiteBox.style.backgroundColor = "#fff";
    contactRequest.style.color = "#F1897B";
    requestColorLine.style.backgroundColor = "#F1897B";
    productsQuoteImg.src = "./assets/svg/quote.svg";
    homeSection.style.backgroundImage =
      "url(./assets/png/first-screen-image.png)";
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
    titleClearinghouse.style.color = "black";
    spanClearinghouse.style.color = "#85BBB1";
    textAbout.style.color = "initial";
    joinButton.style.color = "#F1897B";
    joinButton.style.color = "#F1897B";
    joinColorLine.style.backgroundColor = "#F1897B";
    pricingJoinNow.style.color = "#F1897B";
    pricingJoinNow.style.borderColor = "#F1897B";
    pricingColorLine.style.backgroundColor = "#F1897B";
    contactSalesButton.style.color = "#F1897B";
    contactSalesButton.style.borderColor = "#F1897B";
    salesColorLine.style.backgroundColor = "#F1897B";
    footerP.style.color = "#000";
    dollarText.style.color = "initial";
    boxNumText.style.color = "initial";
    paragraphText.style.color = "initial";
    solisGroupText.style.color = "initial";
    contactLabel.style.color = "#000";
    casesImgPlay.src = "./assets/png/icon-play.png";
  }
});

// burger-menu

const header = document.querySelector(".header__logo-bar");

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".header__navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navlist.classList.remove("open");
};

// Swiper

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  speed: 500,
  slidesPerView: 3,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    760: {
      slidesPerView: 2,
    },
    960: {
      slidesPerView: 3,
    },
  },
});
