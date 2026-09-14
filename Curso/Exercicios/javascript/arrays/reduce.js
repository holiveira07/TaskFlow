// const numeros = [5, 10, 15];

const tarefas = [
  { titulo: "API", horas: 3 },
  { titulo: "Login", horas: 5 },
  { titulo: "Dashboard", horas: 2 },
];

const soma = tarefas.reduce((acumulador, tarefa) => {
  return acumulador + tarefa.horas;
}, 0);

console.log(soma);

const tarefas1 = [
  { titulo: "API", prioridade: "Alta", horas: 3 },
  { titulo: "Login", prioridade: "Alta", horas: 5 },
  { titulo: "Dashboard", prioridade: "Média", horas: 2 },
  { titulo: "Documentação", prioridade: "Baixa", horas: 4 },
];

const tarefasPrioridadeAlta = tarefas1
  .filter((tarefa) => tarefa.prioridade === "Alta")
  .reduce((acumulador, tarefa) => {
    return acumulador + tarefa.horas;
  }, 0);
console.log(tarefasPrioridadeAlta);

const tarefas2 = [
  { titulo: "API", status: "concluida" },
  { titulo: "Login", status: "pendente" },
  { titulo: "Dashboard", status: "concluida" },
  { titulo: "Documentação", status: "pendente" },
];

const tarefasConcluidas = tarefas2.reduce((contador, tarefa) => {
  return tarefa.status === "concluida" ? contador + 1 : contador;
}, 0);

console.log(
  `As tarefas concluídas são: ${tarefasConcluidas}  ${tarefas2
    .filter((tarefa) => tarefa.status === "concluida")
    .map((tarefa) => tarefa.titulo)
    .join(", ")}`,
);

const tarefas3 = [
  { titulo: "API", prioridade: "Alta", horas: 3 },
  { titulo: "Login", prioridade: "Alta", horas: 5 },
  { titulo: "Dashboard", prioridade: "Media", horas: 2 },
  { titulo: "Documentação", prioridade: "Baixa", horas: 4 },
  { titulo: "Testes", prioridade: "Alta", horas: 2 },
];

const prioridades = tarefas3.reduce((acumulador, tarefa) => {
  if (!acumulador[tarefa.prioridade]) {
    acumulador[tarefa.prioridade] = 0;
  }
  acumulador[tarefa.prioridade] += 1;
  return acumulador;
}, {});

console.log(prioridades);

const agruparTarefasPrioridade = tarefas3.reduce((acumulador, tarefa) => {
  if (!acumulador[tarefa.prioridade]) {
    acumulador[tarefa.prioridade] = [];
  }
  acumulador[tarefa.prioridade].push(tarefa.titulo);
  return acumulador;
}, {});

console.log(agruparTarefasPrioridade);

function calcularTotalDeHorasPorStatus(tarefas, status) {
  return tarefas.reduce((acumulador, tarefa) => {
    if (tarefa.status === status) {
      return acumulador + tarefa.horas;
    }
    return acumulador;
  }, 0);
}

const totalDeHorasConcluidas = calcularTotalDeHorasPorStatus(
  tarefas3,
  "concluida",
);

const totalDeHorasPendentes = calcularTotalDeHorasPorStatus(
  tarefas3,
  "pendente",
);

console.log(`Total de horas das tarefas concluídas: ${totalDeHorasConcluidas}`);
console.log(`Total de horas das tarefas pendentes: ${totalDeHorasPendentes}`);

const tarefas4 = [
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

const somarHorasPendentesAlta = tarefas4.reduce((acumulador, tarefa) => {
  if (tarefa.status === "pendente" && tarefa.prioridade === "Alta") {
    return acumulador + tarefa.horas;
  }
  return acumulador;
}, 0);

console.log(somarHorasPendentesAlta);
