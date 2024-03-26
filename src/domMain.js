function GenerateMain() {
  const selectors = {
    contentDiv: document.querySelector("#content"),
    navMain: document.querySelector("#main"),
  };

  const elements = {
    div: document.createElement("div"),
    h1: document.createElement("h3"),
    h2: document.createElement("h3"),
    h3: document.createElement("h3"),
    p1: document.createElement("p"),
    p2: document.createElement("p"),
    p3: document.createElement("p"),
    pintro: document.createElement("p"),
  };

  const addClasses = () => {
    elements.div.classList.add("center", "main");
    selectors.navMain.classList.add("navActive");
  };

  const addText = (
    pintroText,
    h1Text,
    p1Text,
    h2Text,
    p2Text,
    h3Text,
    p3Text
  ) => {
    elements.pintro.textContent = pintroText;
    elements.h1.textContent = h1Text;
    elements.p1.textContent = p1Text;
    elements.h2.textContent = h2Text;
    elements.p2.textContent = p2Text;
    elements.h3.textContent = h3Text;
    elements.p3.textContent = p3Text;
  };

  const createMain = () => {
    selectors.contentDiv.appendChild(elements.div);
    elements.div.appendChild(elements.pintro);
    elements.div.appendChild(elements.h1);
    elements.div.appendChild(elements.p1);
    elements.div.appendChild(elements.h2);
    elements.div.appendChild(elements.p2);
    elements.div.appendChild(elements.h3);
    elements.div.appendChild(elements.p3);
  };

  addClasses();
  createMain();

  return { addText };
}

export { GenerateMain };
