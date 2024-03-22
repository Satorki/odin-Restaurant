function contentMenu() {
  const navMain = document.querySelector("#main");
  navMain.classList.add("navActive");
  const contentDiv = document.querySelector("#content");

  let divMain;

  if (!contentDiv.querySelector(".main")) {
    divMain = document.createElement("div");
    divMain.classList.add("center", "main");
    contentDiv.appendChild(divMain);

    const p = document.createElement("p");
    p.textContent =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit facere sint porro, blanditiis repudiandae molestias possimus doloribus dolor illo aliquam ut quam adipisci consequuntur, excepturi, modi quas laboriosam delectus eos?";
    divMain.appendChild(p);
  }
}

export { contentMenu };
