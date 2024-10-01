import "./styles.css";
import { appendData } from "./index.js";

const searchIcon = document.querySelector(".search");

searchIcon.addEventListener("click", appendData);
