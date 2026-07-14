// let tipoUsuario = "lider";
// if (tipoUsuario === "lider") {
//   console.log("Pode adicionar membros");
// } else {
//   console.log("Acesso negado");
// }

// let usuario = {
//   nome: "Henrique",
//   tipoUsuario: "lider",
// };

// if (usuario.tipoUsuario === "lider") {
//   console.log("Pode criar equipe");
// } else {
//   console.log("Acesso negado");
// }

// let tarefa = {
//   titulo: "Estudar React",
//   prioridade: "alta",
//   status: "em_andamento",
// };

// console.log(tarefa.titulo);
// console.log(tarefa.status);

// let usuario = [
//   {
//     nome: "Henrique",
//   },

//   {
//     nome: "Maria",
//   },
// ];

// for (let i = 0; i < usuario.length; i++) {
//   console.log(`Usuário: ${usuario[i].nome} encontrado`);
// }

// let usuario = [
//   {
//     nome: "Henrique",
//   },

//   {
//     nome: "Maria",
//   },
// ];

// for (let i = 0; i < usuario.length; i++) {
//   if (usuario[i].nome === "Henrique") {
//     console.log(`Usuário: ${usuario[i].nome} encontrado`);
//   }
// }

const tarefas = [
  { titulo: "Estudar Java Script", status: "Concluida" },
  { titulo: "Estudar React", status: "Pendente" },
  { titulo: "Estudar Docker", status: "Concluida" },
];

let total = 0;

for (let i = 0; i < tarefas.length; i++) {
  if (tarefas[i].status === "Concluida") {
    total++;
  }
}

// console.log(`Total de tarefas concluidas: ${total}`);

const exercicios = [
  { titulo: "Estudar Java Script", status: "Concluida" },
  { titulo: "Estudar React", status: "Pendente" },
  { titulo: "Estudar Docker", status: "Concluida" },
];

let pendentes = 0;

for (let i = 0; i < exercicios.length; i++) {
  if (exercicios[i].status === "Pendente") {
    pendentes++;
  }
}

console.log(`Total de exercicios pendentes: ${pendentes}`);
