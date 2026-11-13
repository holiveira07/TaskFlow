const tarefas = [{ titulo: "JS" }, { titulo: "React" }, { titulo: "Docker" }];
const titulos = tarefas.map((tarefa) => tarefa.titulo);
console.log(titulos);

const tarefas1 = [
  { titulo: "Criar API", prioridade: "Alta", horas: 5 },
  { titulo: "Dashboard", prioridade: "Baixa", horas: 4 },
  { titulo: "Testes", prioridade: "Alta", horas: 2 },
];

function obterTitulosEhoras(tarefas) {
  return tarefas.map((tarefa) => {
    return {
      titulo: tarefa.titulo,
      horas: tarefa.horas,
    };
  });
}

console.log(obterTitulosEhoras(tarefas1));

const mensagem1 = obterTitulosEhoras(tarefas1)
  .map((tarefa) => `${tarefa.titulo} - ${tarefa.horas} horas`)
  .join(" , ");

document.getElementById("mensagem1").textContent =
  `Os titulos das tarefas e suas horas são:\n${mensagem1}`;

const usuarios = [
  { nomeCompleto: "Ana Souza", idade: 28, ativo: true },
  { nomeCompleto: "Carlos Lima", idade: 35, ativo: false },
  { nomeCompleto: "Marina Alves", idade: 22, ativo: true },
  { nomeCompleto: "Pedro Sobral", idade: 17, ativo: true },
];
function transformarUsuarios(usuarios) {
  return usuarios.map((usuario) => {
    const maiordIdade = usuario.idade >= 18;
    return {
      nome: usuario.nomeCompleto,
      anos: usuario.idade,
      maiorDeIdade: maiordIdade,
      status: maiordIdade && usuario.ativo ? "Ativo" : "Inativo",
    };
  });
}

console.log(transformarUsuarios(usuarios));

function temAcessoAoSistema(usuarios) {
  return usuarios.map((usuario) => {
    const maiorDeIdade = usuario.idade >= 18;
    const podeAcessarOSistema = maiorDeIdade && usuario.ativo;
    return {
      nome: usuario.nomeCompleto,
      anos: usuario.idade,
      maiorDeIdade: maiorDeIdade,
      podeAcessarOSistema: podeAcessarOSistema
        ? "Pode acessar o sistema"
        : "Não pode acessar o sistema",
    };
  });
}

console.log(temAcessoAoSistema(usuarios));
