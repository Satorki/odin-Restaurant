function generateMenu() {
  const selectors = {
    contentDiv: document.querySelector("#content"),
    navMenu: document.querySelector("#menu"),
  };

  const elements = {
    div: document.createElement("div"),
  };

  const addClasses = () => {
    elements.div.classList.add("center", "menu");
    selectors.navMenu.classList.add("navActive");
  };

  const createMenu = () => {
    selectors.contentDiv.appendChild(elements.div);
  };

  addClasses();
  createMenu();
}

function GenerateMenuItem() {
  const selectors = {
    menu: document.querySelector(".menu"),
  };

  const addClasses = (div) => {
    div.classList.add("box");
  };

  const addText = (div, title, description, imgSrc) => {
    const elements = {
      h: document.createElement("h2"),
      p: document.createElement("p"),
      img: document.createElement("img")
    };
    elements.h.textContent = title;
    elements.p.textContent = description;
    elements.img.src = imgSrc;
    div.appendChild(elements.h);
    div.appendChild(elements.img);
    div.appendChild(elements.p);
  };

  const createItem = (title, description, imgSrc) => {
    const div = document.createElement("div");
    addClasses(div);
    addText(div, title, description, imgSrc);
    selectors.menu.appendChild(div);
  };

  return { createItem };
}

export { generateMenu, GenerateMenuItem };
