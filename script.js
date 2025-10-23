const input = document.getElementById("item");
const button = document.getElementById("adiciona-item");

button.addEventListener("click", (event) => {
  event.preventDefault()  
  const newItem = input.value.trim();
  if (newItem === "") {
    alert("Por favor, digite um item antes de adicionar");
  } else {
    const lista = document.createElement("li");

    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(` ${newItem}`));

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.innerHTML = "&times;";

    lista.appendChild(label);
    lista.appendChild(deleteButton)

    const ul = document.querySelector(".list");
    ul.appendChild(lista);

    deleteButton.addEventListener("click", () => {
      lista.remove(); // Remove o item da lista

      const alerta = document.querySelector(".alert");
      alerta.style.display = "flex"; // Mostra o alerta
    });
    input.value = ""
    checkbox.addEventListener("change", () => {
        lista.classList.toggle("marcado", checkbox.checked)
});
 
}
});
const alertaDelete = document.querySelector(".close");

alertaDelete.addEventListener("click", () => {
const alerta = document.querySelector(".alert");
  alerta.style.display = "none";
});
// Detecta cliques em qualquer checkbox dentro da lista
document.querySelector(".list").addEventListener("change", (event) => {
  // Verifica se o elemento clicado é um checkbox
  if (event.target.matches("input[type='checkbox']")) {
    const li = event.target.closest("li");
    li.classList.toggle("marcado", event.target.checked);
  }
});

