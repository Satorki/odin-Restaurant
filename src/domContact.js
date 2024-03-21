function contentContact() {
    const navMain = document.querySelector("#main");
    navMain.classList.add("navActive");
  
    const contentDiv = document.querySelector("#content");
  
    if (!contentDiv.querySelector(".div-box")) {
      const divBox = document.createElement("div");
      divBox.classList.add("div-box");
      contentDiv.appendChild(divBox);
    
      const p = document.createElement("p");
      p.textContent =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit facere sint porro, blanditiis repudiandae molestias possimus doloribus dolor illo aliquam ut quam adipisci consequuntur, excepturi, modi quas laboriosam delectus eos?";
      divBox.appendChild(p);
    }
  
  }

export { contentContact }