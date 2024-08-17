
function carregarDados() {
    const pets = JSON.parse(localStorage.getItem("pets"))

    pets.forEach((pet) => {
        const tr = document.createElement('tr')

        const nomePetTd = document.createElement('td')
        nomePetTd.innerText = pet.nome
        tr.append(nomePetTd)

        const idadePetTd = document.createElement('td')
        idadePetTd.innerText = pet.idade
        tr.append(idadePetTd)

        const tipoPetTd = document.createElement('td')
        tipoPetTd.innerText = pet.tipo
        tr.append(tipoPetTd)

        document.getElementById('dados-tabela').append(tr)

    });


    
}



document.addEventListener('DOMContentLoaded', carregarDados)