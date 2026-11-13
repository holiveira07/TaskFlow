const usuarios = [
  {
    nome: "João",
    idade: 30,
  },

  {
    nome: "Maria",
    idade: 25,
  },
  {
    nome: "Pedro",
    idade: 35,
  },
  {
    nome: "Ana",
    idade: 17,
  },
];

function maiorIdade(usuarios) {
  return usuarios.map((usuario) => {
    const maiorDeIdade = usuario.idade >= 18;
    return {
      nome: usuario.nome,
      ehMaiorDeIdade: maiorDeIdade,
    };
  });
}

console.log(maiorIdade(usuarios));

const usuarios1 = [
  { nome: "Ana", idade: 22, ativo: true },
  { nome: "Carlos", idade: 16, ativo: true },
  { nome: "Marina", idade: 30, ativo: false },
];

function trasformarUsuario(usuarios1) {
  return usuarios1.map((usuario) => {
    const maiorIdade = usuario.idade >= 18;
    return {
      ...usuario,
      nome: usuario.nome,
      anos: usuario.idade,
      maiorIdade: maiorIdade,
      status: maiorIdade && usuario.ativo ? "Ativo" : "Inativo",
      podeAcessarOSistema: maiorIdade && usuario.ativo,
    };
  });
}

console.log(trasformarUsuario(usuarios1));

const tarefas = [
  { titulo: "Estudar JavaScript", horas: 2 },
  { titulo: "Revisar CSS", horas: 1.5 },
  { titulo: "Praticar Git", horas: 1 },
];

function tarefasTransformadas(tarefas) {
  return tarefas.map((tarefa) => {
    const minutos = tarefa.horas * 60;
    return {
      ...tarefa,

      minutos,
    };
  });
}

console.log(tarefasTransformadas(tarefas));
console.log(tarefas);
