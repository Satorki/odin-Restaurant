import "./style.css";
import { mainTitle, contentMain, clear } from "./domMain.js";
import { contentMenu } from "./domMenu.js";
import { contentContact } from "./domContact.js";

const main = document.querySelector("#main");
const menu = document.querySelector("#menu");
const cont = document.querySelector("#contact");

document.addEventListener("DOMContentLoaded", function () {
  mainTitle();
  contentMain();
});

main.addEventListener("click", () => {
  contentMain();
});

menu.addEventListener("click", () => {
  clear(document.querySelector(".main"));
});

cont.addEventListener("click", () => {
  contentContact();
});
