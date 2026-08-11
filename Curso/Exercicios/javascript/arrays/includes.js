const permissoesUsuario = ["visualizar", "criar", "editar"];
const usuarioTemPermissaoParaEditar = permissoesUsuario.includes("excluir");

console.log(usuarioTemPermissaoParaEditar); // false

const prioridadesPermitidas = ["alta", "média", "baixa"];

const prioridadePermitidaInformada = "Urgente";

const prioridadeValida = prioridadesPermitidas.includes(
  prioridadePermitidaInformada.toLowerCase(),
);

console.log(prioridadeValida); // false

const papelUsuario = ["editor", "membro"];

const papelNecessario = "administrador";

const usuarioTemPapelDeAdministrador = papelUsuario.includes(
  papelNecessario.toLowerCase(),
);

console.log(usuarioTemPapelDeAdministrador); // false
