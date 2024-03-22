function GenerateMain() {
  const selectors = {
    contentDiv: document.querySelector("#content"),
    navMain: document.querySelector("#main"),
  };

  const elements = {
    div: document.createElement("div"),
    p: document.createElement("p"),
  };

  function addClasses() {
    elements.div.classList.add("center", "main");
    selectors.navMain.classList.add("navActive");
  }

  function addText(pText) {
    elements.p.textContent = pText;
  }

  function createMain() {
    selectors.contentDiv.appendChild(elements.div);
    elements.div.appendChild(elements.p);
  }

  addClasses();
  createMain();

  return { addText };
}

export { GenerateMain };
