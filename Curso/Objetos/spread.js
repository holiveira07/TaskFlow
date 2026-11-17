// ---------  Aula 2.3 — Spread Operator com objetos  ----------//

// ----- 1. O problema que o Spread resolve

// Nos ajuda a criar novos objetos a partir de objetos existentes, copiando suas propriedades e valores.

const produto = {
  nome: "Notebook",
  preco: 3000,
  memoriaRam: "16GB",
  armazenamento: "512GB SSD",
};

const produtoAtualizado = {
  ...produto,
  preco: 3200,
  desconto: true,
};
console.log(produto);
console.log(produtoAtualizado); // saída: { nome: 'Notebook', preco: '3200', memoriaRam: '16GB', armazenamento: '512GB SSD', desconto: true }

// Próximo conceito — Shallow Copy (cópia rasa)

const usuario = {
  nome: "Henrique Oliveira",
  endereco: {
    cidade: "Mangaratiba",
  },
};

const novoUsuario = {
  ...usuario,
};

// novoUsuario.nome = "Henrique";

// novoUsuario.endereco.cidade = "Rio de Janeiro";

// console.log(usuario);

// 2. Agora vamos resolver o problema: Deep Copy

const usuarioAtualizado = {
  ...usuario,
  endereco: {
    ...usuario.endereco,
    cidade: "Rio de Janeiro",
  },
};

usuarioAtualizado.nome = "Henrique";
usuarioAtualizado.endereco.cidade = "Rio de Janeiro";

console.log(usuario);
console.log(usuarioAtualizado);

const tecnologias = ["HTML", "CSS", "JavaScript"];

const novasTecnologias = [...tecnologias, "react", "TypeScript"];

console.log(tecnologias);
console.log(novasTecnologias);

const tarefa = {
  titulo: " Estudar Java script ",
  horas: 2,
  prioridade: 3,
  status: "Pendente",
};
const tarefaAtualizada = {
  ...tarefa,
  status: "Concluída",
};

console.log(tarefaAtualizada);

const produtoAtualizado1 = {
  ...produto,
  preco: 3200,
  desconto: true,
};

const usuarioAtualizado1 = {
  ...usuario,
  endereco: {
    ...usuario.endereco,
    cidade: "Rio de Janeiro",
  },
};

const funcionario = {
  nome: "Carlos",
  cargo: "Analista",
  endereco: {
    cidade: "Mangaratiba",
    estado: "RJ",
  },
};

const funcionarioAtualizado = {
  ...funcionario,
  cargo: "Desenvolvedor",
  endereco: {
    ...funcionario.endereco,
    cidade: "Angra dos Reis",
  },
};

console.log(funcionario.endereco.cidade);
console.log(funcionarioAtualizado.endereco.cidade);

const tarefas = [
  { id: 1, titulo: "Estudar JavaScript", status: "Pendente" },
  { id: 2, titulo: "Praticar CSS", status: "Pendente" },
  { id: 3, titulo: "Estudar React", status: "Pendente" },
];

const tarefasAtualizadas = tarefas.map((tarefa) => {
  if (tarefa.id === 2) {
    return {
      ...tarefa,
      status: "Concluída",
    };
  } else if (tarefa.id === 3) {
    return {
      ...tarefa,
      status: "Em andamento",
    };
  } else {
    return tarefa;
  }
});

console.log(tarefas);

console.log(tarefasAtualizadas);

const tarefasPendentes = tarefas.filter(
  (tarefa) => tarefa.status === "Pendente",
);

const tarefasPendentesAtualizadas = tarefas
  .filter((tarefa) => tarefa.status === "Pendente")
  .map((tarefa) => ({ id: tarefa.id, titulo: tarefa.titulo }));

console.log(tarefasPendentesAtualizadas);

const ahFazer = [
  {
    id: 1,
    titulo: "Estudar JavaScript",
    horas: 2,
    status: "Pendente",
    prioridade: 3,
  },
  {
    id: 2,
    titulo: "Revisar CSS",
    horas: 1,
    status: "Concluída",
    prioridade: 2,
  },
  {
    id: 3,
    titulo: "Praticar React",
    horas: 3,
    status: "Pendente",
    prioridade: 1,
  },
  {
    id: 4,
    titulo: "Estudar TypeScript",
    horas: 4,
    status: "Pendente",
    prioridade: 2,
  },
  {
    id: 5,
    titulo: "Praticar Git",
    horas: 2,
    status: "Concluída",
    prioridade: 1,
  },
];

const resumoAhFazer = ahFazer
  .filter((tarefa) => tarefa.status === "Pendente")
  .map(({ titulo, horas, prioridade }) => ({
    titulo,
    horas,
    prioridade,
  }));

console.log(resumoAhFazer);

const item1 = {
  nome: "carderno",
};

const item2 = {
  nome: "lápis",
};

const item3 = {
  nome: "borracha",
};

const Itens = [item1, item2, item3];

const novosItens = [item1, { ...item2, preco: 300 }, item3];

// console.log(itens);
console.log(novosItens);

const tarefas1 = [
  {
    id: 1,
    titulo: "Estudar JavaScript",
    status: "Pendente",
    responsavel: {
      nome: "Ana",
    },
  },
  {
    id: 2,
    titulo: "Criar tela de login",
    status: "Em andamento",
    responsavel: {
      nome: "Carlos",
    },
  },
  {
    id: 3,
    titulo: "Configurar banco de dados",
    status: "Pendente",
    responsavel: {
      nome: "Mariana",
    },
  },
];

const tarefas1Atualizadas = tarefas1.map((tarefa) => {
  if (tarefa.id === 2) {
    return {
      ...tarefa,
      status: "Concluída",
      responsavel: {
        ...tarefa.responsavel,
        nome: "Henrique",
      },
    };
  }
  return tarefa;
});

console.log(tarefas1Atualizadas);
