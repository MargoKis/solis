function validate() {
  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const more = document.getElementById("more");
  const errorName = document.getElementById("error-name");
  const errorEmail = document.getElementById("error-email");
  const errorMore = document.getElementById("error-more");

  let isValid = true;

  if (username.value.trim().length < 3 || username.value.trim().length > 12) {
    errorName.textContent = "Name must be between 3 and 12 characters";
    isValid = false;
  } else {
    errorName.textContent = "";
  }

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailPattern.test(email.value)) {
    errorEmail.textContent = "Please enter a valid email address";
    isValid = false;
  } else {
    errorEmail.textContent = "";
  }

  if (more.value.trim().length < 5 || more.value.trim().length > 80) {
    errorMore.textContent = "Must be between 5 and 80 characters";
    isValid = false;
  } else {
    errorMore.textContent = "";
  }

  return isValid;
}

document.addEventListener("input", function (event) {
  if (event.target.matches(".contact__input")) {
    const errorSpan =
      event.target.parentElement.querySelector(".error-message");

    if (event.target.id === "username") {
      if (
        event.target.value.trim().length >= 3 &&
        event.target.value.trim().length <= 12
      ) {
        errorSpan.textContent = "";
      }
    } else if (event.target.id === "email") {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (emailPattern.test(event.target.value)) {
        errorSpan.textContent = "";
      }
    } else if (event.target.id === "more") {
      if (
        event.target.value.trim().length >= 5 &&
        event.target.value.trim().length <= 80
      ) {
        errorSpan.textContent = "";
      }
    }
  }
});

const inputs = document.querySelectorAll(".contact__input");
inputs.forEach(function (input) {
  input.addEventListener("input", function () {
    validate(); // Вызываем функцию валидации при вводе
  });
});

const submitButton = document.getElementById("submitBtn");
submitButton.addEventListener("click", function (event) {
  event.preventDefault(); // Остановить стандартное поведение отправки формы
  if (validate()) {
    showSuccessAlert();
  }
});

// Функция для показа SweetAlert с успешным сообщением
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
const contactSalesButton = document.querySelector(".home__contact-sales");
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

    for (const solution of italicSolutions) {
      solution.style.color = "#689FF2";
    }

    for (const element of elementsToChangeColor) {
      element.style.color = "#fff";
    }

    for (const link of navbarLinks) {
      link.style.color = "#fff";
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
