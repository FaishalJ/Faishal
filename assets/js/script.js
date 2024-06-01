"use strict";
// element toggle function
var elementToggleFunc = function (elem) {
    elem.classList.toggle("active");
};
// sidebar variables
var sidebar = document.querySelector("[data-sidebar]");
var sidebarBtn = (document.querySelector("[data-sidebar-btn]"));
// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
    elementToggleFunc(sidebar);
});
// custom select variables*************
/*
const select = <HTMLButtonElement>document.querySelector("[data-select]");
const selectItems = document.querySelectorAll(
  "[data-select-item]",
) as NodeListOf<Element>;
const selectValue = <HTMLDivElement>(
  document.querySelector("[data-selecct-value]")
);

const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () {
  elementToggleFunc(this);
});

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue: string) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === (filterItems[i] as HTMLElement).dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
};

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}
*/
// contact form variables ************************************
var form = document.querySelector("[data-form]");
var formInputs = document.querySelectorAll("[data-form-input]");
var formBtn = document.querySelector("[data-form-btn]");
// add event to all form input field
for (var i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener("input", function () {
        // check form validation
        if (form.checkValidity()) {
            formBtn.removeAttribute("disabled");
        }
        else {
            formBtn.setAttribute("disabled", "");
        }
    });
}
// page navigation variables
var navigationLinks = document.querySelectorAll("[data-nav-link]");
var pages = document.querySelectorAll("[data-page]");
// add event to all nav link
for (var i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener("click", function () {
        for (var i_1 = 0; i_1 < pages.length; i_1++) {
            if (this.innerHTML.toLowerCase() === pages[i_1].dataset.page) {
                pages[i_1].classList.add("active");
                navigationLinks[i_1].classList.add("active");
                window.scrollTo(0, 0);
            }
            else {
                pages[i_1].classList.remove("active");
                navigationLinks[i_1].classList.remove("active");
            }
        }
    });
}
