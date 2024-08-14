function adicionarPet(event) {
    console.log("ENTRANDO na funcao")
    event.preventDefault() // evita da tela recarregar :)

    const foto = document.getElementById('foto').value
    const nome = document.getElementById('nome').value 
    const idade = document.getElementById('idade').value 
    const cor = document.getElementById('cor').value
    const descricao = document.getElementById('descricao').value
    const tipo = document.getElementById('tipo').value


    if(nome === "") {
       // alert("Nome é obrigatório")
       document.getElementById('nome').style.borderColor = "red"
       document.getElementById('nome').style.borderWidth = "2px"
       document.getElementById('error-nome').innerText = "Nome é obrigatório"
    }
    
    /* 2 - colocar data */  
}

document // seu documento HTML
.getElementById('form-pet') // ir no documento e localizar o elemento com id form-pet
.addEventListener('submit', adicionarPet) // adicionar um evento de submissão vinculado a funcao adicionar pet