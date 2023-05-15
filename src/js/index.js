const botaoAlterarTema = document.getElementById("botao_alterar_tema");

const body = document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector(".botao");

botaoAlterarTema.addEventListener("click", () => {
  if (body.classList.contains("modo-escuro")) {
    body.classList.remove("modo-escuro");
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png")
  } else {
    body.classList.add("modo-escuro");
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
  }
});
