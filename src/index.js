import "./style.css";
import { GenerateTitle, clearContent } from "./domTitle.js";
import { GenerateMain } from "./domMain.js";
import { generateMenu, GenerateMenuItem } from "./domMenu.js";
import { GenerateContact } from "./domContact.js";

document.addEventListener("DOMContentLoaded", function () {
  const titleText = GenerateTitle();
  titleText.addText("Welcome to Odin Restaurant", "A Feast Fit for Vikings");
  const mainText = GenerateMain();
  mainText.addText(
    "As you step into Odin Restaurant, you're transported back to the age of mighty warriors and epic feasts. Named after the revered Norse god of wisdom, war, and poetry, Odin Restaurant is a culinary haven for those seeking an authentic taste of Viking culture.",
    "Ambiance:",
    "The ambiance is reminiscent of a Viking great hall, with rough-hewn wooden beams adorning the ceiling and flickering torches casting a warm glow across the room. A massive stone fireplace crackles at one end, filling the air with the comforting scent of burning wood. The walls are adorned with shields, swords, and intricate tapestries depicting Norse legends, adding to the atmosphere of ancient mystique.",
    "Décor:",
    "Rustic wooden tables and benches are arranged throughout the restaurant, inviting guests to gather around and partake in the hearty fare. Each table is adorned with wrought iron candle holders and animal fur throws, adding to the rugged charm of the surroundings. The centerpiece of the restaurant is a grand long table, where guests can indulge in communal dining experiences reminiscent of Viking banquets.",
    "Cuisine:",
    "At Odin Restaurant, the menu showcases the bold flavors and hearty ingredients favored by the Vikings. Dishes are crafted using traditional cooking methods and locally sourced ingredients, ensuring an authentic dining experience. Expect to find succulent roast meats, smoked fish, hearty stews, and freshly baked bread, all served in generous portions fit for a warrior."
  );
});

const elements = {
  main: document.querySelector("#main"),
  menu: document.querySelector("#menu"),
  contact: document.querySelector("#contact"),
};

function clickBehaviours() {
  let preventRepeat = {
    main: 1,
    menu: 1,
    contact: 1,
  };
  elements.main.addEventListener("click", () => {
    if (preventRepeat.main === 1) {
      clearContent();
      const mainText = GenerateMain();
      mainText.addText(
        "As you step into Odin Restaurant, you're transported back to the age of mighty warriors and epic feasts. Named after the revered Norse god of wisdom, war, and poetry, Odin Restaurant is a culinary haven for those seeking an authentic taste of Viking culture.",
        "Ambiance:",
        "The ambiance is reminiscent of a Viking great hall, with rough-hewn wooden beams adorning the ceiling and flickering torches casting a warm glow across the room. A massive stone fireplace crackles at one end, filling the air with the comforting scent of burning wood. The walls are adorned with shields, swords, and intricate tapestries depicting Norse legends, adding to the atmosphere of ancient mystique.",
        "Décor:",
        "Rustic wooden tables and benches are arranged throughout the restaurant, inviting guests to gather around and partake in the hearty fare. Each table is adorned with wrought iron candle holders and animal fur throws, adding to the rugged charm of the surroundings. The centerpiece of the restaurant is a grand long table, where guests can indulge in communal dining experiences reminiscent of Viking banquets.",
        "Cuisine:",
        "At Odin Restaurant, the menu showcases the bold flavors and hearty ingredients favored by the Vikings. Dishes are crafted using traditional cooking methods and locally sourced ingredients, ensuring an authentic dining experience. Expect to find succulent roast meats, smoked fish, hearty stews, and freshly baked bread, all served in generous portions fit for a warrior."
      );
      preventRepeat.main = 0;
      preventRepeat.menu = 1;
      preventRepeat.contact = 1;
    }
  });

  elements.menu.addEventListener("click", () => {
    if (preventRepeat.menu === 1) {
      clearContent();
      generateMenu();
      const menuItem = GenerateMenuItem();
      menuItem.createItem(
        "Valkyrie's Feast",
        "A grand platter featuring a selection of roasted meats, including tender lamb, juicy pork, and savory venison, served alongside roasted root vegetables and honey-glazed mead ham.",
        "../src/dish1.jpg"
      );
      menuItem.createItem(
        "Thor's Thunderous Stew",
        "A hearty stew bursting with chunks of beef, root vegetables, and barley, simmered in a rich broth flavored with herbs and spices.",
        "../src/dish2.jpg"
      );
      menuItem.createItem(
        "Loki's Lox Platter",
        "Smoked salmon served with pickled herring, crisp rye bread, and creamy horseradish sauce, perfect for indulging in the bounty of the sea.",
        "../src/dish3.jpg"
      );
      menuItem.createItem(
        "Freyja's Harvest Salad",
        "A refreshing salad featuring crisp greens, seasonal vegetables, toasted nuts, and tangy vinaigrette, paying homage to the fertility goddess Freyja.",
        "../src/dish4.jpg"
      );
      preventRepeat.menu = 0;
      preventRepeat.main = 1;
      preventRepeat.contact = 1;
    }
  });

  elements.contact.addEventListener("click", () => {
    if (preventRepeat.contact === 1) {
      clearContent();
      const contactText = GenerateContact();
      contactText.addText(
        "Contact",
        "tel. 444 444 444",
        "email: odin@odin.odin",
        "adress: Odin 44, 44-444 Project"
      );
      preventRepeat.contact = 0;
      preventRepeat.menu = 1;
      preventRepeat.main = 1;
    }
  });
}

clickBehaviours();
