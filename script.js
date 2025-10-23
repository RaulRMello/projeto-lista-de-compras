const input = document.getElementById("item")
const button = document.getElementById("adiciona-item")

button.addEventListener("click",(event) =>{
    const newItem = input.value.trim()
    if(newItem === ""){
        alert("Por favor, digite um item antes de adicionar")
    }
})