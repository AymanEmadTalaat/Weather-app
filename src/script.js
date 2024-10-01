import "./styles.css";
import { appendData } from "./index.js";

const searchField = document.getElementById("enter-city");
const searchIcon = document.querySelector(".search");

searchIcon.addEventListener("click", () => {
  if (searchField.value === "") {
    searchIcon.ariaDisabled;
  } else if (searchField.value.length < 4) {
    searchIcon.ariaDisabled;
  } else {
    appendData();
  }
});
