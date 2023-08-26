const form = document.getElementById('form-contatos')
const nomes = []
const numeros = []
const span = '<span class="add">✔</span>'

let linhas = ''

form.addEventListener('submit', function (e) {
    e.preventDefault()

    addLinhas()
    atualizar()

})

function addLinhas() {
    const inputNome = document.getElementById('nome-contato')
    const inputNumero = document.getElementById('numero-contato')

    if (nomes.includes(inputNome.value)) {
        alert(`Este nome: ${'"' + inputNome.value + '"'} já foi adicionado`)
    }
    else if (numeros.includes(inputNumero.value)) {
        alert(`Este número: ${'"' + inputNumero.value + '"'} já foi adicionado`)
    }
    else {
        nomes.push(inputNome.value)
        numeros.push(inputNumero.value)
        let somaContatos = nomes.length
        document.getElementById('total-contato').innerHTML = '>> ' + somaContatos + ' <<'

        let linha = '<tr>'

        const part1 = inputNumero.value.slice(0, 2)
        const part2 = inputNumero.value.slice(2, 7)
        const part3 = inputNumero.value.slice(7, 11)
        linha += `<td>${inputNome.value}</td>`
        linha += `<td>${'(' + part1 + ')' + ''} ${part2} - ${part3}</td>`
        linha += `<td>${span + '  Adicionado'}</td>`
        linha += '</tr>'

        linhas += linha
    }

    inputNome.value = ''
    inputNumero.value = ''


}

function atualizar() {
    const corpo = document.querySelector('tbody')
    corpo.innerHTML = linhas
}