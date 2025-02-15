//captura os elementos
let btnCopy = document.querySelector('.btn-copy');
let input = document.getElementById('input');

//função
btnCopy.addEventListener("click", () =>{

    let inputvalue = input.value
    //seleciona o que tiver dentro do input
    input.select();
    //inicializa a função exec copy
    document.execCommand("copy");
    //adiciona o objetos na tela do botão em modo ativo
    btnCopy.classList.add("active")
    btnCopy.innerHTML = '<i class="fa-solid fa-copy"></i>';

    //setTimeout para remover os itens
    setTimeout(() => {
        document.getSelection().removeAllRanges();
        btnCopy.classList.remove("active");
        btnCopy.innerHTML = '<i class="fa-regular fa-copy copy"></i>'
    }, 2000)
})

