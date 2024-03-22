import "./style.css";
import { GenerateTitle } from "./domTitle.js";
import { GenerateMain } from "./domMain.js";
import { contentMenu } from "./domMenu.js";
import { contentContact } from "./domContact.js";

document.addEventListener("DOMContentLoaded", function () {
  const titleText = GenerateTitle();
  titleText.addText("Odin Restaurant", "Best place to eat in the town");
});

const elements = {
  main: document.querySelector("#main"),
  menu: document.querySelector("#menu"),
  contact: document.querySelector("#contact"),
};

elements.main.addEventListener("click", () => {
  const mainText = GenerateMain();
  mainText.addText(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, dolorem possimus, hic fuga molestiae voluptatem quos provident animi soluta amet pariatur ex minima officia eveniet! Sequi fugit fugiat tempore! Eaque, repellat quae veritatis in ab totam esse, tempora facere et ex eveniet modi molestiae amet quidem molestias? Quam quas cumque quod, perferendis porro a ipsa ullam? Rerum commodi amet temporibus tempora iure corrupti eligendi earum accusantium possimus. Distinctio obcaecati velit cum explicabo, modi maiores at ut porro molestias odit iusto non voluptatem repudiandae rem accusantium, deleniti sequi ipsum quo! Vel aperiam sunt harum illum porro impedit nulla rerum molestias. Iste."
  );
});

elements.menu.addEventListener("click", () => {
  console.log("zupa");
});

elements.contact.addEventListener("click", () => {
  console.log("ogorkowa");
});
