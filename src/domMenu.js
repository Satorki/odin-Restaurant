function contentMenu() {
  const navMain = document.querySelector("#menu");
  navMain.classList.add("navActive");
  document.classList.remove("navActive")

  const contentDiv = document.querySelector("#content");

  if (!contentDiv.querySelector(".menu")) {
    const divMenu = document.createElement("div");
    divMenu.classList.add("center", "menu");
    contentDiv.appendChild(divMenu);

    const p = document.createElement("p");
    p.textContent =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit facere sint porro, blanditiis repudiandae molestias possimus doloribus dolor illo aliquam ut quam adipisci consequuntur, excepturi, modi quas laboriosam delectus eos?";
    divMenu.appendChild(p);
  }
}


export { contentMenu };
