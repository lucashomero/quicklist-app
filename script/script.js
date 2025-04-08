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
      check.innerHTML = `<span class="checkbox"></span>`;
      check.classList.add("check");
  
      // Cria o texto do item
      const texto = document.createElement("span");
      texto.textContent = item;
      texto.classList.add("texto-item");
  
      // Cria o ícone de lixeira
      // trash.innerHtml, serve p inserir o conteudo como svg
      const trash = document.createElement("span");
      // svg da lixeira
      trash.innerHTML = `
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.25 4.58325L15.7336 12.9375C15.6016 15.0719 15.5357 16.1392 15.0007 16.9065C14.7361 17.2858 14.3956 17.606 14.0006 17.8466C13.2017 18.3333 12.1325 18.3333 9.99392 18.3333C7.8526 18.3333 6.78192 18.3333 5.98254 17.8457C5.58733 17.6047 5.24667 17.2839 4.98223 16.9039C4.4474 16.1354 4.38287 15.0667 4.25384 12.9293L3.75 4.58325" stroke="#080B12" stroke-width="1.25" stroke-linecap="round"/>
<path d="M2.5 4.58342H17.5M13.3797 4.58342L12.8109 3.40986C12.433 2.6303 12.244 2.24051 11.9181 1.99742C11.8458 1.9435 11.7693 1.89553 11.6892 1.854C11.3283 1.66675 10.8951 1.66675 10.0287 1.66675C9.14067 1.66675 8.69667 1.66675 8.32973 1.86185C8.24842 1.90509 8.17082 1.955 8.09774 2.01106C7.76803 2.264 7.58386 2.66804 7.21551 3.47613L6.71077 4.58342" stroke="#080B12" stroke-width="1.25" stroke-linecap="round"/>
<path d="M7.91687 13.75V8.75" stroke="#080B12" stroke-width="1.25" stroke-linecap="round"/>
<path d="M12.0831 13.75V8.75" stroke="#080B12" stroke-width="1.25" stroke-linecap="round"/>
</svg>
`;
      trash.classList.add("lixeira");
  
      // Eventos
      check.addEventListener("click", () => {
        check.classList.toggle("ativo");
        card.classList.toggle("feito");
      });
      
  
      trash.addEventListener("click", () => {
        tabela.removeChild(card);
      
        // Mostrar alerta
        const alerta = document.getElementById("alertaRemocao");
        alerta.classList.remove("oculto");
      
        // Esconde após 2.5 segundos
        setTimeout(() => {
          alerta.classList.add("oculto");
        }, 3000);
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


