function contentMenu() {
    const contentDiv = document.querySelector("#content");
    const divBox = document.createElement("div");
    divBox.classList.add("div-box")
    contentDiv.appendChild(divBox)
    
    const p2 = document.createElement("p");
    p2.textContent =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit facere sint porro, blanditiis repudiandae molestias possimus doloribus dolor illo aliquam ut quam adipisci consequuntur, excepturi, modi quas laboriosam delectus eos?";
    divBox.appendChild(p2);
  
  }

  export { contentMenu }