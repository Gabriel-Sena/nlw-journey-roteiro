// object
const atividade = {
  nome: "Almoço",
  data: new Date("2024-07-14 10:00"),
  finalizada: false
}

// arrow function
const criarItemDeAtividade = (atividade) => {

  let input = ''

  return `
    <div> <!-- mantém um elemento embaixo do outro -->
      <input type="checkbox" />
      <span>${atividade.nome}</span> <!-- mantém um elemento ao lado do outro -->
      <time>${atividade.data}</time>
    </div>
  `
}

// pegando o elemento section
const section = document.querySelector('section')

// modificando o conteúdo HTML que tem dentro do section
section.innerHTML = criarItemDeAtividade(atividade)
