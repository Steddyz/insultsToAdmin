const createInsultButton = document.querySelector(".create-insults");
const wrapperInner = document.querySelector(".wrapper-inner");

let messageAdded = false;

createInsultButton.addEventListener("click", async (e) => {
  if (!messageAdded) {
    const url = "https://insult.mattbas.org/api/insult";

    fetch(url)
      .then((responce) => responce.text())
      .then((data) => {
        createInsults(data);
      })
      .catch((error) => console.error("Ошибка при запросе данных:", error));
  }
});

function createInsults(insult) {
  wrapperInner.textContent = "";
  const element = document.createElement("div");
  element.classList.add("insult");
  element.textContent = `${insult}`;
  wrapperInner.appendChild(element);

  return element;
}
