
function deletar(idRecebido){
  // 1 -  ir no local e busca o array de pets
   const petsAtuaisNaMemoria = JSON.parse(localStorage.getItem('pets'))
   const petsFiltrados =  petsAtuaisNaMemoria.filter((item) => item.id !== idRecebido  )

   localStorage.setItem('pets', JSON.stringify(petsFiltrados))

   document.getElementById('lista-pets').innerText = ''
   carregarDados()
}

function carregarDados() {
  console.log("chamei a funcao")
  const petsNaMemoria = JSON.parse(localStorage.getItem('pets'))

  const lista = document.getElementById('lista-pets')

  petsNaMemoria.forEach((pet) => {
   

    const div = document.createElement('div')
    div.classList.add("item-pet")

    const img = document.createElement('img')
    img.setAttribute("width", "150px")
    img.setAttribute("height", "150px")
    //img.style.objectFit = "cover"
    img.setAttribute('src', pet.foto)

    div.append(img)

    const h2 = document.createElement('h2')
    h2.innerText = pet.nome

    div.append(h2)

    const buttonDeletar = document.createElement('button')
    buttonDeletar.innerText = "Deletar"
    buttonDeletar.onclick = () => deletar(pet.id)

    const buttonAdotar = document.createElement("button")
    buttonAdotar.innerText = "Adotar"
    buttonAdotar.onclick = () => window.location.href = "detalhes-pet.html?id=" + pet.id

    const divBotoes = document.createElement('div')
    divBotoes.classList.add("pet-card-botoes")
    divBotoes.append(buttonAdotar)
    divBotoes.append(buttonDeletar)

    div.append(divBotoes)

    /*  FIM Geração da div */

    lista.append(div)
  })

  /* Geração da div */


}

document.addEventListener('DOMContentLoaded', carregarDados) // quando for renderiza , vai disparar a funcao

/*
document.addEventListener('DOMContentLoaded', () => {
  document.body.style.background = 'red'
})
  */

