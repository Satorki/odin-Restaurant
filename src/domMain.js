function mainTitle() {
  const contentDiv = document.querySelector("#content");

  const h1 = document.createElement("h1");
  const div = document.createElement("div");
  const img = document.createElement("img");
  const p1 = document.createElement("p");
  div.classList.add("big-picture");
  p1.classList.add("title")

  img.src = "/src/big-picture.jpg";
  h1.textContent = "Odin Restaurant";
  p1.textContent = "The best Vikings Meals";

  contentDiv.appendChild(div);
  div.appendChild(img);
  contentDiv.appendChild(h1);
  contentDiv.appendChild(p1);
}
function contentMain() {
  const contentDiv = document.querySelector("#content");
  const p2 = document.createElement("p");
  p2.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit facere sint porro, blanditiis repudiandae molestias possimus doloribus dolor illo aliquam ut quam adipisci consequuntur, excepturi, modi quas laboriosam delectus eos?";
  contentDiv.appendChild(p2);
}

export { mainTitle, contentMain };
