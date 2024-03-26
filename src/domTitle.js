function GenerateTitle() {
  const contentDiv = document.querySelector("#content");

  const elements = {
    h1: document.createElement("h1"),
    div: document.createElement("div"),
    img: document.createElement("img"),
    p: document.createElement("p"),
  };

  const addClasses = () => {
    elements.div.classList.add("big-picture");
    elements.p.classList.add("title");
  };

  const addPicture = () => {
    elements.img.src = "/src/big-picture.jpg";
  };

  const addText = (h1Text, pText) => {
    elements.h1.textContent = h1Text;
    elements.p.textContent = pText;
  };

  const createTitle = () => {
    contentDiv.appendChild(elements.div);
    elements.div.appendChild(elements.img);
    contentDiv.appendChild(elements.h1);
    contentDiv.appendChild(elements.p);
  };

  addClasses();
  addPicture();
  createTitle();

  return { addText };
}

function clearContent() {
  document.querySelector(".center").remove();
  document.querySelectorAll(".navActive").forEach(element => element.classList.remove("navActive"))
}

export { GenerateTitle, clearContent };
