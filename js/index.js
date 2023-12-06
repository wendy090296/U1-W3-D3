// 1) creo il mio tag input che all'avvio deve presentare un Inputfield

const inputField = function () {
  const input = document.createElement("input");
  input.setAttribute("type", "text"); // inserisco gli attributi del tag input
  input.setAttribute("placeholder", "Inserisci nome del task"); // inserisco gli attributi del tag input

  //   2) richiamo il tag parent per appenderci dentro il figlio
  const myDiv = document.getElementById("first-div"); // richiamo il div con il suo ID
  myDiv.appendChild(input); // appendo il child (tag input) nel suo parent (div)

  const button = document.createElement("button");
  button.innerText = "AGGIUNGI";

  const ul = document.createElement("ul");
  myDiv.appendChild(ul);

  myDiv.appendChild(button);
  button.addEventListener("click", function (e) {
    const li = document.createElement("li");
    ul.appendChild(li);
    li.innerText = input.value;
    input.value = "";
    const deletebtn = document.createElement("button");
    li.appendChild(deletebtn);
    deletebtn.innerText = "rimuovi";
    deletebtn.addEventListener("click", function (e) {
      li.remove();
    });

    li.addEventListener("click", function (e) {
      li.style.textDecoration = "line-through";
    });
  });
};
inputField();
