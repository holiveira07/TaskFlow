const tarefas = [
  {
    titulo: "API",
    prioridade: 3,
  },

  {
    titulo: "login",
    prioridade: 1,
  },

  {
    titulo: "Dashboard",
    prioridade: 2,
  },
];

tarefas.sort((a, b) => a.prioridade - b.prioridade);

// console.log(tarefas);

const tarefas2 = [
  {
    titulo: "Criar documentação",
    prioridade: "Baixa",
  },
  {
    titulo: "Corrigir login",
    prioridade: "Alta",
  },
  {
    titulo: "Atualizar dashboard",
    prioridade: "Média",
  },
];

const ordemPrioridade = {
  Alta: 1,
  Média: 2,
  Baixa: 3,
};

tarefas2.sort(
  (a, b) => ordemPrioridade[a.prioridade] - ordemPrioridade[b.prioridade],
);

// console.log(tarefas2);

const tarefas3 = [
  { titulo: "API", prioridade: 3 },
  { titulo: "Login", prioridade: 1 },
  { titulo: "Dashboard", prioridade: 2 },
];

const tarefasOrdenadas = [...tarefas3].sort(
  (a, b) => a.prioridade - b.prioridade,
);

// console.log(tarefas3);
// console.log(tarefasOrdenadas);

const tarefas4 = [
  {
    titulo: "Corrigir bug crítico",
    prioridade: "Alta",
    diasAtraso: 5,
  },
  {
    titulo: "Atualizar documentação",
    prioridade: "Baixa",
    diasAtraso: 2,
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

const ordemPrioridade2 = {
  Alta: 1,
  Média: 2,
  Baixa: 3,
};

tarefas4.sort((a, b) => {
  if (ordemPrioridade2[a.prioridade] !== ordemPrioridade2[b.prioridade]) {
    return ordemPrioridade2[a.prioridade] - ordemPrioridade2[b.prioridade];
  }
  if (a.diasAtraso !== b.diasAtraso) {
    return b.diasAtraso - a.diasAtraso;
  }

  return 0;
});

console.log(tarefas4);
