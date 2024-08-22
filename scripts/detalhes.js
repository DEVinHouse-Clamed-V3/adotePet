function carregarDetalhesPet() {
    console.log("ENTREI AQUI")
    const petsNoLocalStorage = JSON.parse(localStorage.getItem("pets"))
    console.log(petsNoLocalStorage)

    // captura o id da url
    const url = new URL(window.location.href)
    const params = new URLSearchParams(url.search)
    const idUrl = params.get("id")

   const petEncontrado = petsNoLocalStorage.find((item) => item.id == idUrl)
   console.log(petEncontrado)

   if(petEncontrado === undefined) {
        window.location.href = "404.html"
        //document.getElementById('mensagem-error').style.display = "block"
        //document.getElementById('conteudo').style.display = 'none'
   } else {
    document.getElementById('nome').innerText = petEncontrado.nome
    document.getElementById('foto').setAttribute('src', petEncontrado.foto)
    document.getElementById('idade').innerText = petEncontrado.idade
    document.getElementById('cor').innerText = petEncontrado.cor
    document.getElementById('tipo').innerText = petEncontrado.tipo
    document.getElementById('descricao').innerText = petEncontrado.descricao
   }

   
  
}

document.addEventListener('DOMContentLoaded', carregarDetalhesPet)
