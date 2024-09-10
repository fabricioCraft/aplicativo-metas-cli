// objects

let meta = {
    value: 'ler um livro por mês',
    checked: false,
    isChecked: (info) => {
        console.log(info)
    }
}

let metas = [
    meta,
    {
        value: 'caminhas 20 minutos todos os dias',
        checked: false
    }
]

metas.isChecked(metas.value)

// function
const criarMetas = () => { }

function criarMetas() { }