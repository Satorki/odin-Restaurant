function GenerateContact() {
  const selectors = {
    contentDiv: document.querySelector("#content"),
    navContact: document.querySelector("#contact"),
  };

  const elements = {
    div: document.createElement("div"),
    h: document.createElement("h3"),
    p1: document.createElement("p"),
    p2: document.createElement("p"),
    p3: document.createElement("p"),
  };

  const addClasses = () => {
    elements.div.classList.add("center", "main");
    selectors.navContact.classList.add("navActive");
  };

  const addText = (contact, telephone, email, adress) => {
    elements.h.textContent = contact;
    elements.p1.textContent = telephone;
    elements.p2.textContent = email;
    elements.p3.textContent = adress;
  };

  const createMain = () => {
    selectors.contentDiv.appendChild(elements.div);
    elements.div.appendChild(elements.h);
    elements.div.appendChild(elements.p1);
    elements.div.appendChild(elements.p2);
    elements.div.appendChild(elements.p3);
  };

  addClasses();
  createMain();

  return { addText };
}

export { GenerateContact };
