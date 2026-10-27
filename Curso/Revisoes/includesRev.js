const statusPermitidos = ["Pendente", "Em andamento", "Concluída"];
function statusEhPermitido(status) {
  return statusPermitidos.includes(status);
}

console.log(statusEhPermitido("Pendente"));
