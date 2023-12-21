const botaoLista = document.getElementById("botao_lista");

function abrirCapitulos(){
    var lista = document.getElementById("lista_capitulos")
    if(lista.style.display === "none"){
        lista.style.display = "block";
        botaoLista.querySelector('.bi').classList.remove("bi-journal-bookmark-fill");
        botaoLista.querySelector('.bi').classList.add("bi-journal-bookmark");
    }else{
        lista.style.display = "none";
        botaoLista.querySelector('.bi').classList.remove("bi-journal-bookmark");
        botaoLista.querySelector('.bi').classList.add("bi-journal-bookmark-fill");
    }
}