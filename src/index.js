import "./style.css";
import { mainTitle, contentMain } from "./domMain.js";
import { contentMenu } from "./domMenu.js";

const main = document.querySelector("#main");
const menu = document.querySelector("#menu");
const cont = document.querySelector("#cont");

document.addEventListener("DOMContentLoaded", function () {
  mainTitle();
});

main.addEventListener("click", () => {
  contentMain();
});

menu.addEventListener("click", () => {
  contentMenu();
});

cont.addEventListener("click", () => {
  contentContact();
});

console.log("empty");
