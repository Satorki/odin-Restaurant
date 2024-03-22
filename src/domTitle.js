function GenerateTitle() {
    const contentDiv = document.querySelector("#content");
  
    const elements = {
      h1: document.createElement("h1"),
      div: document.createElement("div"),
      img: document.createElement("img"),
      p: document.createElement("p"),
    };
  
    function addClasses() {
      elements.div.classList.add("big-picture");
      elements.p.classList.add("title");
    }
  
    function addPicture() {
      elements.img.src = "/src/big-picture.jpg";
    }
  
    function addText(h1Text, pText) {
      elements.h1.textContent = h1Text;
      elements.p.textContent = pText;
    }
  
    function createTitle() {
      contentDiv.appendChild(elements.div);
      elements.div.appendChild(elements.img);
      contentDiv.appendChild(elements.h1);
      contentDiv.appendChild(elements.p);
    }
  
    addClasses();
    addPicture();
    createTitle();
  
    return { addText };
  }

  function Clear() {
    // const elements = {
        
    // }
    // element.remove();
    // navElement.classList.remove("navActive");
  }

  export { GenerateTitle }