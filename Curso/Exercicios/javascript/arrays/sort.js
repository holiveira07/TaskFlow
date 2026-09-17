// const tarefas = [
//   {
//     titulo: "API",
//     prioridade: 3,
//   },

//   {
//     titulo: "login",
//     prioridade: 1,
//   },

//   {
//     titulo: "Dashboard",
//     prioridade: 2,
//   },
// ];

// tarefas.sort((a, b) => a.prioridade - b.prioridade);

// // console.log(tarefas);

// const tarefas2 = [
//   {
//     titulo: "Criar documentação",
//     prioridade: "Baixa",
//   },
//   {
//     titulo: "Corrigir login",
//     prioridade: "Alta",
//   },
//   {
//     titulo: "Atualizar dashboard",
//     prioridade: "Média",
//   },
// ];

// const ordemPrioridade = {
//   Alta: 1,
//   Média: 2,
//   Baixa: 3,
// };

// tarefas2.sort(
//   (a, b) => ordemPrioridade[a.prioridade] - ordemPrioridade[b.prioridade],
// );

// // console.log(tarefas2);

// const tarefas3 = [
//   { titulo: "API", prioridade: 3 },
//   { titulo: "Login", prioridade: 1 },
//   { titulo: "Dashboard", prioridade: 2 },
// ];

// const tarefasOrdenadas = [...tarefas3].sort(
//   (a, b) => a.prioridade - b.prioridade,
// );

// // console.log(tarefas3);
// // console.log(tarefasOrdenadas);

// const tarefas4 = [
//   {
//     titulo: "Corrigir bug crítico",
//     prioridade: "Alta",
//     diasAtraso: 5,
//   },
//   {
//     titulo: "Atualizar documentação",
//     prioridade: "Baixa",
//     diasAtraso: 2,
//   },
//   {
//     titulo: "Implementar login",
//     prioridade: "Alta",
//     diasAtraso: 1,
//   },
//   {
//     titulo: "Ajustar dashboard",
//     prioridade: "Média",
//     diasAtraso: 3,
//   },
// ];

// const ordemPrioridade2 = {
//   Alta: 1,
//   Média: 2,
//   Baixa: 3,
// };

// tarefas4.sort((a, b) => {
//   if (ordemPrioridade2[a.prioridade] !== ordemPrioridade2[b.prioridade]) {
//     return ordemPrioridade2[a.prioridade] - ordemPrioridade2[b.prioridade];
//   }
//   if (a.diasAtraso !== b.diasAtraso) {
//     return b.diasAtraso - a.diasAtraso;
//   }

//   return 0;
// });

// console.log(tarefas4);

// consolidação do sort

const tarefas = [
  {
    titulo: "Atualizar documentação",
    prioridade: "Baixa",
    diasAtraso: 2,
  },
  {
    titulo: "Corrigir bug crítico",
    prioridade: "Alta",
    diasAtraso: 5,
  },
  {
    titulo: "Implementar login",
    prioridade: "Alta",
    diasAtraso: 1,
  },
  {
    titulo: "Ajustar dashboard",
    prioridade: "Média",
    diasAtraso: 3,
  },
];

const ordemPrioridade = {
  Alta: 1,
  Média: 2,
  Baixa: 3,
};

tarefas.sort((a, b) => {
  if (ordemPrioridade[a.prioridade] !== ordemPrioridade[b.prioridade]) {
    return ordemPrioridade[a.prioridade] - ordemPrioridade[b.prioridade];
  } else if (a.diasAtraso !== b.diasAtraso) {
    return b.diasAtraso - a.diasAtraso;
  }
  return 0;
});

console.log(tarefas);
tarefas.reverse();
console.log(tarefas);

const tarefas2 = [
  { titulo: "Criar API", status: "pendente", prioridade: "Alta", horas: 5 },
  { titulo: "Criar Login", status: "concluida", prioridade: "Alta", horas: 3 },
  { titulo: "Dashboard", status: "pendente", prioridade: "Baixa", horas: 4 },
  { titulo: "Testes", status: "pendente", prioridade: "Alta", horas: 2 },
  {
    titulo: "Documentação",
    status: "concluida",
    prioridade: "Baixa",
    horas: 2,
  },
];

function obterTitulosTarefasPendentesOrdenadasHorasMaiorMenor(tarefas) {
  return tarefas
    .filter((tarefa) => tarefa.status === "pendente")
    .sort((a, b) => b.horas - a.horas)
    .map((tarefa) => tarefa.titulo);
}

console.log(obterTitulosTarefasPendentesOrdenadasHorasMaiorMenor(tarefas2));
