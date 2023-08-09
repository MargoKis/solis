document.addEventListener("input", function (event) {
  if (event.target.matches(".contact__input")) {
    const errorSpan =
      event.target.parentElement.querySelector(".error-message");
    validateInput(event.target, errorSpan);
  }
});

const submitButton = document.getElementById("submitBtn");
submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  const inputs = document.querySelectorAll(".contact__input");
  let allInputsValid = true;
  inputs.forEach(function (input) {
    const errorSpan = input.parentElement.querySelector(".error-message");
    validateInput(input, errorSpan);
    if (errorSpan.textContent !== "") {
      allInputsValid = false;
    }
  });

  if (allInputsValid) {
    // Добавьте здесь код для отправки формы, если необходимо
    showSuccessAlert();
  }
});

const inputs = document.querySelectorAll(".contact__input");
inputs.forEach(function (input) {
  input.addEventListener("input", function () {
    const errorSpan = input.parentElement.querySelector(".error-message");
    validateInput(input, errorSpan);
  });
});

function validateInput(input, errorSpan) {
  if (input.id === "username") {
    if (input.value.trim().length < 3 || input.value.trim().length > 12) {
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

function validateAndShowPopup() {
  const inputs = document.querySelectorAll(".contact__input");
  let allInputsValid = true;
  inputs.forEach(function (input) {
    const errorSpan = input.parentElement.querySelector(".error-message");
    validateInput(input, errorSpan);
    if (errorSpan.textContent !== "") {
      allInputsValid = false;
    }
  });

  if (allInputsValid) {
    showSuccessAlert();
    changeButtonAndLineColor(true);
  } else {
    changeButtonAndLineColor(false);
  }
}

function changeButtonAndLineColor(valid) {
  const submitButton = document.getElementById("submitBtn");
  const salesColorLine = document.querySelector(".sales-color-line");
  
  if (valid) {
    submitButton.style.backgroundColor = "green";
    salesColorLine.style.backgroundColor = "green";
  } else {
    submitButton.style.backgroundColor = "";
    salesColorLine.style.backgroundColor = "";
  }
}

function showSuccessAlert() {
  Swal.fire({
    icon: "success",
    title: "Success!",
    text: "Your message has been successfully sent!",
  });
}














// Dark Theme

const icon = document.getElementById("icon");
const body = document.body;
const homeSection = document.querySelector(".home");
const iconContainer = document.querySelector(".icon-container");
const navbarLinks = document.querySelectorAll(".header__navbar a");
const titleClearinghouse = document.querySelector(".home__title-clearinghouse");
const spanClearinghouse = document.querySelector(
  ".home__title-clearinghouse span.italic"
);
const textAbout = document.querySelector(".home__text-about");
const joinButton = document.querySelector(".btn.home__join-now");
const joinColorLine = document.querySelector(".join-color-line");
const whiteBox = document.querySelectorAll(".home__white-box, .pricing__white-box");
const elementsToChangeColor = document.querySelectorAll(
  ".home__dollar, .home__box-paragraph, .home__solis-group, .home__box-num",
);
const contactSalesButton = document.querySelector(".shome__contact-sales");
const salesColorLine = document.querySelector(".sales-color-line");
const italicSolutions = document.querySelectorAll(".italic");
const productsTitles = document.querySelectorAll(".products__title");
const productsParagraphs = document.querySelectorAll(".products__paragraph");
const productsQuoteImg = document.querySelector(".products__quote-img");
const casesImgPlay = document.querySelector(".cases__img-play");
const casesTitles = document.querySelectorAll(".cases__title");
const casesParagraphs = document.querySelectorAll(".cases__paragraph");
const pricingWhiteBox = document.querySelector('.pricing__white-box');

icon.addEventListener("click", function () {
  body.classList.toggle("dark-theme");
  const isDarkTheme = body.classList.contains("dark-theme");

  if (isDarkTheme) {
    body.style.backgroundColor = "#161926";
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
    whiteBox.style.backgroundColor = "#161926";
    contactSalesButton.style.color = "#53F3CD";
    contactSalesButton.style.borderColor = "#53F3CD";
    salesColorLine.style.backgroundColor = "#53F3CD";
    productsQuoteImg.src = "./assets/png/quote-dark.png";
    casesImgPlay.src = "./assets/png/icon play-dark.png";
    pricingWhiteBox.style.backgroundColor = '#161926';

    for (const link of navbarLinks) {
      link.style.color = isDarkTheme ? "#fff" : "black";
      link.style.setProperty("--before-bg-color", isDarkTheme ? "#53F3CD" : "#F1897B");
    }

    for (const solution of italicSolutions) {
      solution.style.color = "#689FF2";
    }

    for (const element of elementsToChangeColor) {
      element.style.color = "#fff";
    }

    for (const link of navbarLinks) {
      link.style.color = "white";
      link.style.setProperty("--before-bg-color", "#53F3CD");
    }

    for (const title of productsTitles) {
      title.style.color = "#fff";
    }

    for (const paragraph of productsParagraphs) {
      paragraph.style.color = "#fff";
    }

    for (const title of casesTitles) {
      title.style.color = "#fff";
    }

    for (const paragraph of casesParagraphs) {
      paragraph.style.color = "#fff";
    }
  } else {
    body.style.backgroundColor = "initial";
    homeSection.style.backgroundImage =
      "url(./assets/png/first-screen-image.png)";
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
    titleClearinghouse.style.color = "black";
    spanClearinghouse.style.color = "#85BBB1";
    textAbout.style.color = "initial";
    joinButton.style.color = "#F1897B";
    joinButton.style.borderColor = "#F1897B";
    joinColorLine.style.backgroundColor = "#F1897B";
    whiteBox.style.backgroundColor = "initial";
    dollarText.style.color = "initial";
    boxNumText.style.color = "initial";
    paragraphText.style.color = "initial";
    solisGroupText.style.color = "initial";
    contactSalesButton.style.backgroundColor = "#F1897B";
    contactSalesButton.style.borderColor = "#F1897B";
    salesColorLine.style.backgroundColor = "#F1897B";
    casesImgPlay.src = "./assets/png/icon play.png";
    pricingWhiteBox.style.backgroundColor = 'initial';

    for (const solution of italicSolutions) {
      solution.style.color = "#85BBB1";
    }

    for (const element of elementsToChangeColor) {
      element.style.color = "initial";
    }

    for (const link of navbarLinks) {
      link.style.color = "black";
      link.style.setProperty("--before-bg-color", "#F1897B");
    }

    for (const title of productsTitles) {
      title.style.color = "initial";
    }

    for (const paragraph of productsParagraphs) {
      paragraph.style.color = "initial";
    }

    for (const title of casesTitles) {
      title.style.color = 'initial';
    }

    for (const paragraph of casesParagraphs) {
      paragraph.style.color = 'initial';
    }
  }
});





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



