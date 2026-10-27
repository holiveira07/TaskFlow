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
