const input = document.getElementById("inputItem")
const tabela = document.getElementById("tabelaCorpo")



input.addEventListener("keypress", function(event) {

  if(event.key === "Enter"){
  // Pega o valor de input e remove os espaços do inicio ao fim e atribui esse valor ao item
  const item = input.value.trim()
  // Verifica se o item é diferente de uma string vazia
  if(item !== ""){
  //Add
  const tr = document.createElement("tr")
  const td = document.createElement("td")
  td.textContent = item  // célula
  td.classList.add("card-item")
  tr.appendChild(td) // linha
  tabela.appendChild(tr)
  input.value = ""
  
  //Remove
  tr.addEventListener("dblclick", function() {
  tabela.removeChild(tr)
  })
  input.value = ""; 
  } else {
    alert("Digite um campo valido")
  }
  }

  

})
