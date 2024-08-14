function adicionarPet(event) {
    console.log("ENTRANDO na funcao")
    event.preventDefault() // evita da tela recarregar :)

    const foto = document.getElementById('foto').value
    const nome = document.getElementById('nome').value 
    const idade = document.getElementById('idade').value 
    const cor = document.getElementById('cor').value
    const descricao = document.getElementById('descricao').value
    const tipo = document.getElementById('tipo').value

    console.log(cor)
    
    /* ======= VALIDACAO DO FORMULARIO  ======= */

    if(foto === "") {
        document.getElementById('foto').style.borderColor = "red"
        document.getElementById('foto').style.borderWidth = "2px"
        document.getElementById('error-foto').innerText = "Foto do pet é obrigatória"
    } else {
        document.getElementById('foto').style.borderColor = ""
        document.getElementById('foto').style.borderWidth = ""
        document.getElementById('error-foto').innerText = ""
    }

    if(nome === "") {
       // alert("Nome é obrigatório") Mostra um aviso no navegaor
       document.getElementById('nome').style.borderColor = "red"
       document.getElementById('nome').style.borderWidth = "2px"
       document.getElementById('error-nome').innerText = "Nome é obrigatório"
    } else {
        document.getElementById('nome').style.borderColor = ""
        document.getElementById('nome').style.borderWidth = ""
        document.getElementById('error-nome').innerText = ""
    }

    if(descricao === "") {
        document.getElementById('descricao').style.borderColor = "red"
        document.getElementById('descricao').style.borderWidth = "2px"
        document.getElementById('error-descricao').innerText = "Descricao é obrigatória"
    } else {
        document.getElementById('descricao').style.borderColor = ""
        document.getElementById('descricao').style.borderWidth = ""
        document.getElementById('error-descricao').innerText = ""
    }

    if(tipo === "") {
        document.getElementById('tipo').style.borderColor = "red"
        document.getElementById('tipo').style.borderWidth = "2px"
        document.getElementById('error-tipo').innerText = "O tipo é obrigatório"
    } else {
        document.getElementById('tipo').style.borderColor = ""
        document.getElementById('tipo').style.borderWidth = ""
        document.getElementById('error-tipo').innerText = ""
    }
    
    /* 2 - colocar data */  
}

document // seu documento HTML
.getElementById('form-pet') // ir no documento e localizar o elemento com id form-pet
.addEventListener('submit', adicionarPet) // adicionar um evento de submissão vinculado a funcao adicionar pet