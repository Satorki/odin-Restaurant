function mainTitle() {
  const contentDiv = document.querySelector("#content");

  const h1 = document.createElement("h1");
  const div = document.createElement("div");
  const img = document.createElement("img");
  const p = document.createElement("p");
  div.classList.add("big-picture");
  p.classList.add("title");

  img.src = "/src/big-picture.jpg";
  h1.textContent = "Odin Restaurant";
  p.textContent = "The best Vikings Meals";

  contentDiv.appendChild(div);
  div.appendChild(img);
  contentDiv.appendChild(h1);
  contentDiv.appendChild(p);
}

function contentMain() {
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

  return divMain;
}

function clear(element) {
    element.remove();
}



export { mainTitle, contentMain, clear };
