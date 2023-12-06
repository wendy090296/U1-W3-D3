// 1) creo il mio tag input che all'avvio deve presentare un Inputfield
const inputField = function () {
  const input = document.createElement("input");
  input.setAttribute("type", "text"); // inserisco gli attributi del tag input
  input.setAttribute("placeholder", "Make a wish.."); // inserisco gli attributi del tag input

  //   2) richiamo il tag parent per appenderci dentro il figlio
  const myDiv = document.getElementById("first-div"); // richiamo il div con il suo ID
  myDiv.appendChild(input); // appendo il child (tag input) nel suo parent (div)

  const button = document.createElement("button"); // creo un bottone
  button.innerText = "INVIO";

  const ul = document.createElement("ul"); // creo la mia unordered list
  myDiv.appendChild(ul); // inserisco la ul nel parent tag

  myDiv.appendChild(button);
  button.addEventListener("click", function (e) {
    // associo un comportamento al button

    const li = document.createElement("li"); // creo l'elemento della ul
    ul.appendChild(li);
    li.innerText = input.value;
    input.value = ""; //  reset
    const deletebtn = document.createElement("button"); // il mio button delete individuale
    li.appendChild(deletebtn);
    deletebtn.innerText = "x";
    deletebtn.addEventListener("click", function (e) {
      li.remove();
    });

    li.addEventListener("click", function (e) {
      li.style.textDecoration = "line-through";
    });
  });
};
inputField();
