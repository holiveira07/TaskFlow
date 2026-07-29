const permissoesUsuario = ["visualizar", "criar", "editar"];
const usuarioTemPermissaoParaEditar = permissoesUsuario.includes("excluir");

console.log(usuarioTemPermissaoParaEditar); // false
