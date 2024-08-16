
function carregarDados(){
     const petsNaMemoria = JSON.parse(localStorage.getItem('pets'))

      const lista = document.getElementById('lista-pets')

      /*
      const meuH1 = document.createElement('h1')
      meuH1.innerText = "Testando os poderes do javascript"
      lista.appendChild(meuH1)
      */

      /* Geração da div */
      const div = document.createElement('div')
      div.classList.add("item-pet")
      
      const img =  document.createElement('img')
      img.setAttribute("width", "150px")
      img.setAttribute('src', "https://m.media-amazon.com/images/I/71dULMAV6aL.jpg")

      div.append(img)

      const h2 = document.createElement('h2')
      h2.innerText = 'Gato Ronaldo'

      div.append(h2)

      const button = document.createElement('button')
      button.innerText = "Adicionar"

      div.append(button)
    /*  FIM Geração da div */
     
    console.log(div)

    lista.appendChild(div)  

}


document.addEventListener('DOMContentLoaded', carregarDados ) // quando for renderiza , vai disparar a funcao