const input = document.getElementById("inputItem")
const tabela = document.getElementById("tabelaCorpo")
const btn = document.getElementById("btnInput")

// Função que adiciona o item
// function adicionarItem() {
//   const item = input.value.trim();

//   if (item !== "") {
//     const card = document.createElement("div");
//     card.textContent = item;
//     card.classList.add("card-item");

//     tabela.appendChild(card);

//     // Permitir remoção com duplo clique
//     card.addEventListener("dblclick", function () {
//       tabela.removeChild(card);
//     });

//     input.value = "";
//   } else {
//     alert("Digite um campo válido");
//   }
// }

function adicionarItem() {
    const item = input.value.trim();
  
    if (item !== "") {
      // Cria o card
      const card = document.createElement("div");
      card.classList.add("card-item");
  
      // Cria o check
      const check = document.createElement("span");
      check.textContent = "✔"; // ou use um ícone melhor com font-awesome
      check.classList.add("check");
  
      // Cria o texto do item
      const texto = document.createElement("span");
      texto.textContent = item;
      texto.classList.add("texto-item");
  
      // Cria o ícone de lixeira
      const trash = document.createElement("span");
      trash.textContent = "🗑"; // ou use um SVG ou font-awesome
      trash.classList.add("lixeira");
  
      // Eventos
      check.addEventListener("click", () => {
        texto.classList.toggle("feito");
      });
  
      trash.addEventListener("click", () => {
        tabela.removeChild(card);
      });
  
      // Monta o card
      card.appendChild(check);
      card.appendChild(texto);
      card.appendChild(trash);
      tabela.appendChild(card);
  
      input.value = "";
    } else {
      alert("Digite um campo válido");
    }
  }
  

// Enter no input
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      adicionarItem();
    }
  });
  
  // Clique no botão
btn.addEventListener("click", function () {
    adicionarItem();
  });  


