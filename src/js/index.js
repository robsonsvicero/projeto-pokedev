/*
OBJETIVO: QUANDO CLICAR NO POKEDEV DA LISTAGEM TEMOS QUE ESCONDER O CARTÃO DO POKEDEV
ABERTO E MOSTRAR O CARTÃO CORRESPONDENTE AO QUE FOI SELECIONADO NA LISTAGEM.
*/



//    PASSO 1 - criar uma variável no JS pra trabalhar com a listagem pokedev;
const listaSelecaoPokedevs = document.querySelectorAll(".pokedev");

//    PASSO 2 - identificar o evento clique no elemento da listagem;
listaSelecaoPokedevs.forEach(pokedev => {
    pokedev.addEventListener("click", () => {

        //    PASSO 3 - remover a classe "aberto" só do cartão que está aberto;
        esconderCartaoPokedev();

        //    PASSO 4 - ao clicar em um pokedev da lista pegamos o id desse pokedev pra saber qual cartão abrir;
        const idPokedevSelecionado = mostrarCartaoPokedevSelecionado(pokedev);

        //    PASSO 5 - remover a classe "ativo" que marca o pokedev selecionado na listagem;
        desativarPokedevNaListagem();

        //    PASSO 6 - adicionar a classe "ativo" no pokedev selecionado na listagem.
        ativarPokedevSelecionadoNaListagem(idPokedevSelecionado);

    })
})

function ativarPokedevSelecionadoNaListagem(idPokedevSelecionado) {
    const pokedevSelecionadoNaListagem = document.getElementById(idPokedevSelecionado);
    pokedevSelecionadoNaListagem.classList.add("ativo");
}

function desativarPokedevNaListagem() {
    const pokedevAtivoNaListagem = document.querySelector(".ativo");
    pokedevAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartaoPokedevSelecionado(pokedev) {
    const idPokedevSelecionado = pokedev.attributes.id.value;
    const idDoCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;
    const cartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir);
    cartaoPokedevParaAbrir.classList.add("aberto");
    return idPokedevSelecionado;
}

function esconderCartaoPokedev() {
    const cartaoPokedevAberto = document.querySelector(".aberto");
    cartaoPokedevAberto.classList.remove("aberto");
}
