const $C = (el) => document.querySelector(el);
const $$C = (el) => document.querySelectorAll(el);

const searchFieldDesk = $C("#searchFieldDesk");
const searchButton = $C("#searcHeader");
// const searchClose = $C(".search-desk-reset-button");

const searchFieldResponsive = $C(".search-field-responsive");
const searchButtonResponsive = $C("#searcHeaderResponsive");
const searchContainer = $C("#searchContainer");

const header = $C("#headerContainer");

//Open the search field when the search button is clicked. Then the search button is used to submit the search.
searchButton.addEventListener("click", () => {
  if (searchButton.type == "button") {
    searchFieldDesk.classList.remove("hidden");
    // searchClose.classList.remove("hidden");
    searchFieldDesk.focus();

    setTimeout(() => {
      //Wait to make the change and not submit the search before the animation is done.
      searchButton.type = "submit";
    }, 100);
  }
});

//Close the search field when the user clicks out of the input and there is not a search words written.
searchFieldDesk.addEventListener("focusout", () => {
  if (!searchFieldDesk.value) {
    searchFieldDesk.classList.add("hidden");
    // searchClose.classList.add("hidden");
    searchButton.type = "button";
  }
});

//Open the search field when the search button is clicked. Then the search button is used to submit the search.
searchButtonResponsive.addEventListener("click", () => {
  if (searchButtonResponsive.type == "button") {
    searchContainer.classList.remove("hidden");
    header.classList.add("hidden");

    searchFieldResponsive.focus();

    setTimeout(() => {
      //Wait to make the change and not submit the search before the animation is done.
      searchButtonResponsive.type = "submit";
    }, 100);
  }
});

//Close the search field when the user clicks out of the input and there is not a search words written.
searchFieldResponsive.addEventListener("focusout", () => {
  if (!searchFieldResponsive.value) {
    searchContainer.classList.add("hidden");
    header.classList.remove("hidden");

    searchButtonResponsive.type = "button";
  }
});

/* ########################################## ⬆️ Btn Back to top & Sticky Nav Bar⬆️ ####################################################### */
// Listen on scroll event to show/hide btn back to top & add sticky nav
const backToTopBtn = $C(".goToUp");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    backToTopBtn.classList.remove("hidden");
  } else {
    backToTopBtn.classList.add("hidden");
  }
});
