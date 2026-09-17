# Diário do Curso

## Data: 14/07/2026

### Conteúdo estudado

- Conclusão do método `some()`.
- Revisão do funcionamento de callbacks.
- Revisão da diferença entre `some()`, `find()` e `filter()`.
- Exercícios práticos realizados no VS Code.

### Conceitos consolidados

- Identificar quando utilizar `some()`.
- Compreender que o callback é executado pelo método.
- Entender que o `some()` interrompe a execução ao encontrar o primeiro resultado verdadeiro.
- Transformar requisitos de negócio em expressões booleanas.

### Aplicação no TaskFlow

Foi simulada uma regra de negócio para verificar a existência de tarefas de alta prioridade, pendentes e atrasadas, utilizando o método `some()`.

### Próximo conteúdo

- Atualizar a documentação do curso.
- Iniciar o próximo método de arrays.

## Data: 20/07/2026

# Estudo de JavaScript — Método every()

## Conteúdo estudado

Foi estudado o método `every()` do JavaScript.

Objetivo:

Verificar se todos os elementos de um array atendem determinada condição.

---

## Conceito principal

O método `every()` retorna:

- `true` quando todos os elementos atendem à condição;
- `false` quando encontra pelo menos um elemento que não atende.

---

## Funcionamento

O método percorre o array executando um callback para cada elemento.

O callback retorna um valor booleano.

Exemplo:

```javascript
tarefas.every((tarefa) => tarefa.concluida);


O método interrompe a execução assim que encontra o primeiro resultado false.

Comparação com some()

Foi estudada a diferença entre:

some()

Pergunta:

"Existe algum elemento que atende à condição?"

Retorna true ao encontrar o primeiro elemento válido.

every()

Pergunta:

"Todos os elementos atendem à condição?"

Retorna false ao encontrar o primeiro elemento inválido.

Composição de métodos

Foi praticada a combinação:

filter() + every()

Exemplo aplicado ao TaskFlow:

Verificar se todas as tarefas de prioridade alta de uma equipe estão concluídas.

Raciocínio:

Filtrar as tarefas relevantes.
Verificar se todas atendem à regra.
Evolução do aprendizado

O foco deixou de ser apenas conhecer métodos isolados.

O aprendizado passou a envolver:

interpretar regras de negócio;
escolher métodos adequados;
combinar operações;
```

## 24/07/2026

## Estudo de JavaScript — Consolidação de some() e every()

Foi realizada uma revisão prática dos métodos `some()` e `every()`, com foco na interpretação e implementação de regras de negócio.

### some()

O método `some()` é utilizado para responder perguntas do tipo:

> "Existe pelo menos um elemento que atende à condição?"

O método percorre o array e retorna `true` assim que encontra o primeiro elemento que atende à condição. Caso percorra todos os elementos sem encontrar nenhum que atenda à condição, retorna `false`.

Exemplo trabalhado:

```javascript
const existeAlgumaTarefaAltaAtrasada = tarefasPrioridadeAlta.some(
  (tarefa) => tarefa.diasDeAtraso > 3,
);
```

## Revisão: Estudo de JavaScript — Método `find()`

### Objetivo da aula

Nesta etapa do curso, foi realizado um estudo aprofundado do método `find()` em JavaScript, relacionando seu funcionamento com regras de negócio do projeto TaskFlow.

O objetivo foi compreender não apenas a sintaxe do método, mas principalmente como identificar situações em que ele é adequado e diferenciá-lo de outros métodos de array já estudados.

### Método `find()`

O método `find()` é utilizado quando precisamos localizar um elemento específico dentro de um array.

Ele percorre o array e executa o callback para cada elemento.

Assim que encontra o primeiro elemento que atende à condição, interrompe a busca e retorna esse elemento.

Exemplo:

```javascript
const tarefaEncontrada = tarefas.find((tarefa) => tarefa.id === 2);
```

## Nesse caso, o método procura a primeira tarefa cujo id seja igual a 2.

O resultado retornado é o próprio objeto encontrado.

Comportamento quando o elemento não é encontrado

Quando nenhum elemento do array atende à condição do callback, o método find() retorna undefined.

Exemplo:

```javascript
const tarefaEncontrada = tarefas.find(
  (tarefa) => tarefa.id === 99,
);

Como não existe uma tarefa com id igual a 99, o resultado será:

undefined

Foi praticado o tratamento desse cenário utilizando if e else:

if (tarefaEncontrada) {
  console.log("Tarefa encontrada:", tarefaEncontrada);
} else {
  console.log("Tarefa não encontrada");
}
Comparação entre find(), filter(), some() e every()

Foi reforçada a diferença entre os métodos de array estudados:

filter()
→ seleciona todos os elementos que atendem à condição.
→ retorna um novo array.

find()
→ localiza o primeiro elemento que atende à condição.
→ retorna o elemento encontrado ou undefined.

some()
→ verifica se pelo menos um elemento atende à condição.
→ retorna true ou false.

every()
→ verifica se todos os elementos atendem à condição.
→ retorna true ou false.
```

## A escolha do método deve considerar a pergunta da regra de negócio.

Exemplos:

```javascript

"Quais tarefas são de prioridade Alta?"
→ filter()

"Qual é a tarefa de id 2?"
→ find()

"Existe alguma tarefa de prioridade Alta?"
→ some()

"Todas as tarefas estão concluídas?"
→ every()


find() utilizando diferentes propriedades

## Foi praticada a utilização do find() para localizar elementos utilizando diferentes propriedades.

Exemplo de busca por id:

const tarefaEncontrada = tarefas.find(
  (tarefa) => tarefa.id === 2,
);

Exemplo de busca por nome:

const usuarioEncontrado = usuarios.find(
  (usuario) => usuario.nome === "Maria",
);

Foi reforçado que a condição do callback pode utilizar diferentes propriedades do objeto, conforme a regra de negócio.

find() retorna apenas o primeiro resultado

Foi estudado o comportamento do find() quando existem vários elementos que atendem à mesma condição.

Exemplo:

const usuarioEncontrado = usuarios.find(
  (usuario) => usuario.nome === "Maria",
);

Se houver duas pessoas chamadas Maria, o find() retornará apenas a primeira encontrada.

Isso ocorre porque o método interrompe a execução assim que encontra o primeiro elemento válido.

Quando a regra de negócio exige todos os elementos que atendem à condição, o método adequado é filter().

const usuariosEncontrados = usuarios.filter(
  (usuario) => usuario.nome === "Maria",
);

Resultado:

[
  { id: 2, nome: "Maria" },
  { id: 4, nome: "Maria" }
]
Condições compostas com find()

Foi praticada a utilização de operadores lógicos dentro do callback.

Exemplo:

const tarefaEncontrada = tarefas.find(
  (tarefa) =>
    tarefa.prioridade === "Alta" &&
    !tarefa.concluida,
);

Nesse caso, a tarefa precisa atender simultaneamente a duas condições:

prioridade === "Alta"
E
tarefa não concluída

O find() retorna a primeira tarefa que satisfaz ambas as condições.

Foi reforçado que o find() não retorna simplesmente o primeiro elemento do array. Ele retorna o primeiro elemento que atende à condição definida no callback.

Separação entre busca e validação

Foi praticada a diferença entre utilizar o find() para localizar um elemento e utilizar uma estrutura condicional para validar uma propriedade desse elemento.

Exemplo:

const tarefaEncontrada = tarefas.find(
  (tarefa) => tarefa.id === 2,
);

if (
  tarefaEncontrada &&
  tarefaEncontrada.prioridade === "Alta"
) {
  console.log(
    "Tarefa encontrada e possui prioridade Alta",
  );
} else {
  console.log(
    "Tarefa não encontrada ou não possui prioridade Alta",
  );
}

Nesse caso:

find()
→ localiza a tarefa pelo id.

if
→ verifica se a tarefa foi encontrada.
→ verifica a prioridade da tarefa.

Essa separação ajuda a representar regras de negócio de forma mais clara.

Uso do operador && e short-circuit

Foi estudado o uso do operador lógico && para verificar a existência de um objeto antes de acessar uma de suas propriedades.

Exemplo:

if (
  tarefaEncontrada &&
  tarefaEncontrada.concluida
) {
  console.log("Tarefa concluída");
}

A primeira condição verifica se tarefaEncontrada existe.

Somente se essa condição for verdadeira será avaliada a segunda condição.

Isso evita tentar acessar uma propriedade de undefined.

Foi compreendido que:

Objeto encontrado
→ objeto é truthy.

Nenhum objeto encontrado
→ find() retorna undefined.
→ undefined é falsy.

Também foi praticado o cenário:

if (
  tarefaEncontrada &&
  !tarefaEncontrada.concluida
) {
  console.log(
    "Tarefa encontrada e não concluída",
  );
}

Nesse caso, o sistema verifica primeiro se a tarefa existe e depois verifica seu estado.

Regra de negócio e implementação

Foi reforçado um conceito importante de Engenharia de Software:

Um código pode estar sintaticamente correto e funcionar, mas ainda assim não implementar exatamente o requisito solicitado.

Foi observado que buscar uma tarefa pelo id e depois verificar sua prioridade é diferente de procurar diretamente a primeira tarefa que atende simultaneamente a critérios de prioridade e status.

Exemplo:

const tarefaEncontrada = tarefas.find(
  (tarefa) =>
    tarefa.prioridade === "Alta" &&
    !tarefa.concluida,
);

Nesse caso, o próprio critério do find() representa a regra de negócio.

Consolidação do aprendizado

O estudo do find() reforçou os seguintes conceitos:

Localização de elementos em arrays.
Retorno do primeiro elemento que atende a uma condição.
Retorno de undefined quando nenhum elemento é encontrado.
Uso de if e else para tratar resultados.
Busca utilizando diferentes propriedades.
Busca utilizando múltiplas condições.
Diferença entre primeiro resultado e todos os resultados.
Diferença entre find() e filter().
Uso de && para combinar condições.
Conceito de short-circuit.
Validação da existência de objetos antes do acesso às suas propriedades.
Relação entre métodos de array e regras de negócio.

O foco do aprendizado continua evoluindo de uma abordagem baseada apenas em conhecer métodos isolados para uma abordagem orientada à resolução de problemas e implementação de regras de negócio.

A escolha do método deve partir da pergunta que o sistema precisa responder e do tipo de resultado esperado.

Resumo:

filter()
→ vários elementos.

find()
→ primeiro elemento encontrado.

some()
→ existe pelo menos um?

every()
→ todos atendem à condição?

O método find() foi consolidado como ferramenta para localizar um elemento específico dentro de uma coleção, retornando o primeiro resultado compatível com a regra definida.
```

## Data: 10/08/2026

# Estudo de JavaScript — Método `includes()`

### Conteúdo estudado

Foi estudado o método `includes()` do JavaScript, utilizado para verificar se determinado valor existe dentro de um array.

O método retorna um valor booleano:

- `true` → quando o valor existe;
- `false` → quando o valor não existe.

Exemplo:

```javascript
const permissoesUsuario = ["visualizar", "criar", "editar"];

const usuarioTemPermissaoParaEditar = permissoesUsuario.includes("editar");

console.log(usuarioTemPermissaoParaEditar);
```

Resultado:

```text
true
```

Também foi praticado o cenário em que o valor não existe:

```javascript
const usuarioTemPermissaoParaExcluir = permissoesUsuario.includes("excluir");

console.log(usuarioTemPermissaoParaExcluir);
```

Resultado:

```text
false
```

### Aplicação em regras de negócio

O `includes()` foi relacionado ao controle de permissões e validações do TaskFlow.

Exemplo:

```javascript
const papelUsuario = ["editor", "membro"];

const usuarioEhAdministrador = "administrador";

const usuarioTemPapelDeAdministrador = papelUsuario.includes(
  usuarioEhAdministrador,
);

console.log(usuarioTemPapelDeAdministrador);
```

Nesse caso, o sistema verifica se o usuário possui determinado papel.

Também foi praticada a utilização de `toLowerCase()` antes da verificação, reforçando a importância de normalizar dados antes de realizar determinadas comparações.

### Conceito consolidado

O `includes()` deve ser utilizado quando a pergunta da regra de negócio for semelhante a:

> "Esse valor existe dentro desta coleção?"

Comparação com os métodos estudados:

```text
includes()
→ determinado valor existe?

some()
→ existe algum elemento que atende a uma condição?

every()
→ todos os elementos atendem à condição?

find()
→ qual é o primeiro elemento que atende à condição?

filter()
→ quais elementos atendem à condição?
```

---

## Data: 11/08/2026

# Estudo de JavaScript — Método `sort()`

### Conteúdo estudado

Foi iniciado o estudo do método `sort()` do JavaScript, utilizado para ordenar elementos de um array.

Foi praticada a utilização de uma função de comparação para realizar ordenações numéricas.

Exemplo:

```javascript
const numeros = [5, 2, 8, 1];

numeros.sort((a, b) => a - b);
```

Resultado:

```text
[1, 2, 5, 8]
```

### Ordenação de objetos

Foi praticada a ordenação de objetos utilizando uma propriedade numérica.

Exemplo:

```javascript
tarefas.sort((a, b) => a.prioridade - b.prioridade);
```

Nesse caso, a propriedade `prioridade` é utilizada como critério de comparação.

### Regras de negócio com `sort()`

Foi estudada uma situação mais próxima de um sistema real, na qual as prioridades são representadas por textos:

```javascript
const ordemPrioridade = {
  Alta: 1,
  Média: 2,
  Baixa: 3,
};
```

Esse objeto funciona como uma estrutura auxiliar para transformar valores textuais em valores numéricos que podem ser comparados pelo `sort()`.

A comparação:

```javascript
ordemPrioridade[a.prioridade] - ordemPrioridade[b.prioridade];
```

permite ordenar as tarefas de acordo com a regra:

```text
Alta → Média → Baixa
```

Foi reforçado que `a` e `b` representam dois elementos que o algoritmo de ordenação escolhe para comparar. A função de comparação fornece ao `sort()` a regra utilizada para determinar qual elemento deve aparecer primeiro.

### Múltiplos critérios

Também foi praticada uma ordenação com mais de um critério.

Regra:

1. maior prioridade primeiro;
2. em caso de mesma prioridade, maior quantidade de dias de atraso primeiro.

Exemplo:

```javascript
tarefas.sort((a, b) => {
  if (ordemPrioridade[a.prioridade] !== ordemPrioridade[b.prioridade]) {
    return ordemPrioridade[a.prioridade] - ordemPrioridade[b.prioridade];
  }

  return b.diasAtraso - a.diasAtraso;
});
```

O exercício reforçou que uma função de comparação pode representar regras de negócio compostas.

### Mutação do array original

Foi identificado um comportamento importante do `sort()`:

> O método modifica o array original.

Exemplo:

```javascript
const numeros = [5, 2, 8, 1];

const numerosOrdenados = numeros.sort((a, b) => a - b);
```

Nesse caso, tanto `numeros` quanto `numerosOrdenados` apontam para o array já ordenado.

### Ordenação sem modificar o array original

Foi praticado o uso do spread operator para criar uma cópia antes da ordenação:

```javascript
const numerosOrdenados = [...numeros].sort((a, b) => a - b);
```

Nesse caso, o array original permanece inalterado e a ordenação é aplicada à cópia.

### Conceitos consolidados

- Função de comparação do `sort()`.
- Ordenação crescente.
- Ordenação de objetos.
- Acesso a propriedades de objetos.
- Acesso dinâmico utilizando colchetes.
- Uso de objetos auxiliares para representar regras de negócio.
- Ordenação por múltiplos critérios.
- Mutabilidade do `sort()`.
- Criação de cópia com spread operator antes da ordenação.

### Aplicação no TaskFlow

O `sort()` foi relacionado à necessidade de organizar tarefas por critérios relevantes para o sistema, como:

- prioridade;
- atraso;
- futuramente, datas;
- status;
- outros critérios definidos pelas regras de negócio.

O estudo reforçou que a ordenação não deve ser tratada apenas como uma operação técnica, mas como uma implementação de uma regra definida pelo sistema.

### Próximo conteúdo

- Consolidar o método `sort()`.
- Estudar o método `reverse()`.

## Data: 26/08/2026

# Estudo de JavaScript — Método `reduce()`

### Conteúdo estudado

Foi iniciado o estudo do método `reduce()` do JavaScript, com foco na compreensão do acumulador, do elemento atual e do valor inicial.

Foi reforçado que o `reduce()` percorre os elementos do array em sequência, executando o callback uma vez para cada elemento e utilizando o resultado de uma rodada como acumulador da rodada seguinte.

### Conceito principal

O método `reduce()` permite transformar uma coleção de elementos em um único resultado acumulado.

O acumulador não precisa ser necessariamente um número. Ele pode ser:

- um número;
- um array;
- um objeto;
- outra estrutura utilizada para construir o resultado desejado.

### Acumulador e elemento atual

Foi estudada a diferença entre os parâmetros do callback:

```javascript
(acumulador, elemento)

O acumulador representa o resultado construído até aquele momento.

O segundo parâmetro representa o elemento atual do array.

Foi utilizado o exemplo de soma:

const numeros = [5, 10, 15];

const soma = numeros.reduce((acumulador, numero) => {
  return acumulador + numero;
}, 0);

Funcionamento:

0 + 5 = 5
5 + 10 = 15
15 + 15 = 30

Foi reforçado que o resultado de cada rodada passa a ser o acumulador da rodada seguinte.

Reduce com objetos

Foi praticado o acesso às propriedades do objeto atual durante a acumulação.

 Exemplo:

const tarefas = [
  { titulo: "API", horas: 3 },
  { titulo: "Login", horas: 5 },
  { titulo: "Dashboard", horas: 2 },
];

const soma = tarefas.reduce((acumulador, tarefa) => {
  return acumulador + tarefa.horas;
}, 0);

Nesse caso, o reduce() soma a propriedade horas de cada tarefa.

Combinação de métodos

Foi praticada a combinação de filter() e reduce() para implementar uma regra de negócio.

Exemplo:

Calcular o total de horas das tarefas de prioridade Alta.

Foi utilizado:

filter()
→ seleciona as tarefas relevantes.

reduce()
→ acumula as horas das tarefas selecionadas.

Também foi praticado o encadeamento dos métodos.

Reduce como contador

Foi estudado o uso de um acumulador numérico para contar ocorrências.

Exemplo:

const tarefasConcluidas = tarefas.reduce((contador, tarefa) => {
  if (tarefa.status === "concluida") {
    return contador + 1;
  }

  return contador;
}, 0);

Nesse caso, cada tarefa concluída acrescenta 1 ao contador.

Reduce construindo arrays

Foi praticado o uso de um array como acumulador.

Exemplo:

const tarefasConcluidas = tarefas.reduce((acumulador, tarefa) => {
  if (tarefa.status === "concluida") {
    acumulador.push(tarefa.titulo);
  }

  return acumulador;
}, []);


Foi reforçado que o acumulador pode ser uma estrutura diferente de um número.

Reduce construindo objetos

Foi estudada a utilização de um objeto vazio como acumulador para agrupar dados por uma propriedade.

Exemplo:

const agruparTarefasPrioridade = tarefas.reduce((acumulador, tarefa) => {
  if (!acumulador[tarefa.prioridade]) {
    acumulador[tarefa.prioridade] = [];
  }

  acumulador[tarefa.prioridade].push(tarefa.titulo);

  return acumulador;
}, {});

Resultado:

{
  Alta: ["API", "Login", "Testes"],
  Média: ["Dashboard"],
  Baixa: ["Documentação"]
}

Foi explicado que:

acumulador[tarefa.prioridade]

acessa dinamicamente a propriedade correspondente à prioridade da tarefa atual.

Assim, valores como "Alta", "Média" e "Baixa" determinam dinamicamente em qual grupo a informação será armazenada.

Funcionamento por rodadas

Foi consolidado que o reduce() não permanece processando um único objeto várias vezes.

Ele percorre o array em sequência:

elemento 1
↓
callback
↓
acumulador atualizado
↓
elemento 2
↓
callback
↓
acumulador atualizado
↓
próximo elemento

O acumulador é carregado de uma rodada para a seguinte até chegar ao resultado final.

Consolidação

O estudo ampliou a compreensão dos métodos de array e reforçou a escolha de métodos de acordo com a pergunta da regra de negócio.

Resumo:

filter()
→ selecionar elementos.

map()
→ transformar elementos.

find()
→ localizar o primeiro elemento.

some()
→ verificar se existe algum.

every()
→ verificar se todos atendem à condição.

reduce()
→ acumular, contar, agrupar ou construir um resultado.
Próximo conteúdo
Continuar a prática integrada dos métodos de arrays.
Consolidar reduce() em situações diferentes.
Prosseguir com o fluxo da Fase 1.
```

## Data: 03/09/2026

# Estudo de JavaScript — Funções e reutilização de métodos

### Conteúdo estudado

Foi iniciada a etapa de estudo de funções em JavaScript, com foco em parâmetros, argumentos, `return` e criação de funções reutilizáveis.

Foi reforçada a diferença entre:

- parâmetro → variável definida na declaração da função;
- argumento → valor fornecido na chamada da função;
- `return` → resultado devolvido pela função.

### Funções com métodos de array

Foi praticada a utilização de métodos de array dentro de funções, transformando operações que antes eram executadas diretamente em funções reutilizáveis.

Exemplo:

```javascript
function obterTarefasPendentes(tarefas) {
  return tarefas.filter((tarefa) => tarefa.status === "pendente");
}
```

Nesse caso, a função recebe um array por meio do parâmetro `tarefas` e retorna somente as tarefas pendentes.

### Combinação de `filter()` e `map()`

Foi praticada a combinação de métodos para selecionar e transformar dados.

Exemplo:

```javascript
function obterTitulosTarefasPendentes(tarefas) {
  return tarefas
    .filter((tarefa) => tarefa.status === "pendente")
    .map((tarefa) => tarefa.titulo);
}
```

O `filter()` seleciona os objetos relevantes e o `map()` transforma os objetos selecionados em seus respectivos títulos.

### Condições compostas

Foi praticada a utilização do operador `&&` dentro do `filter()` para representar regras que exigem mais de uma condição.

Exemplo:

```javascript
function obterTitulosPorStatusEPrioridade(tarefas, status, prioridade) {
  return tarefas
    .filter(
      (tarefa) => tarefa.status === status && tarefa.prioridade === prioridade,
    )
    .map((tarefa) => tarefa.titulo);
}
```

A função passou a receber `status` e `prioridade` como parâmetros, tornando a regra reutilizável para diferentes combinações.

### Funções com `reduce()`

Foi praticada a utilização do `reduce()` dentro de funções reutilizáveis.

Exemplo:

```javascript
function obterTotalHorasPorPrioridade(tarefas, prioridade) {
  return tarefas.reduce((totalHoras, tarefa) => {
    if (tarefa.prioridade === prioridade) {
      return totalHoras + tarefa.horas;
    }

    return totalHoras;
  }, 0);
}
```

Nesse caso:

- `totalHoras` representa o total acumulado;
- `tarefa` representa o elemento atual;
- `tarefa.horas` representa o valor acrescentado ao acumulador;
- `0` é o valor inicial do acumulador.

### Consolidação

Foi reforçado que uma função pode encapsular uma regra de negócio e receber os valores que determinam seu comportamento por meio de parâmetros.

O estudo avançou de operações isoladas com métodos de array para funções reutilizáveis que combinam:

```text
função
↓
parâmetros
↓
regra de negócio
↓
método de array
↓
resultado
```

### Aplicação no TaskFlow

Os exercícios foram relacionados ao contexto de tarefas, utilizando regras como:

- obter tarefas por status;
- obter títulos de tarefas;
- filtrar por status e prioridade;
- calcular horas por prioridade.

### Próximo conteúdo

- Continuar a prática de funções reutilizáveis.
- Integrar funções com `filter()`, `map()`, `reduce()` e outros métodos já estudados.
- Começar a analisar o problema e escolher a operação adequada antes de implementar a função.

## Data: 16/09/2026

# Estudo de JavaScript — Consolidação de filter(), map() e reduce()

### Conteúdo estudado

Foi realizada uma revisão prática dos métodos `filter()`, `map()` e `reduce()`, com foco não apenas na sintaxe, mas também na escolha do método de acordo com a regra de negócio.

Foi reforçado que:

- `filter()` seleciona elementos com base em uma condição e retorna um novo array;
- `map()` transforma os elementos e também retorna um novo array;
- `reduce()` percorre o array acumulando valores até produzir um único resultado.

### `reduce()` e valor inicial

Foi revisado o papel do valor inicial do acumulador.

Exemplo:

```javascript
const numeros = [2, 4, 6];

const total = numeros.reduce((acumulador, numero) => {
  return acumulador + numero;
}, 10);

Nesse caso, o acumulador começa em 10.
A execução ocorre assim:
10 + 2 = 12
12 + 4 = 16
16 + 6 = 22
Também foi reforçado que, quando um valor inicial é informado, um array vazio não causa erro.
Exemplo:
[].reduce((acumulador, numero) => {
  return acumulador + numero;
}, 0);
Resultado:
0
Combinação de filter() e reduce()
Foi criada uma função para calcular o total de horas das tarefas de alta prioridade.
function obterTotalDeHorasPorTarefasDeAltaPrioridade(tarefas) {
  return tarefas
    .filter((tarefa) => tarefa.prioridade === "Alta")
    .reduce((acumulador, tarefa) => {
      return acumulador + tarefa.horas;
    }, 0);
}
Nesse fluxo:
filter()
↓
seleciona as tarefas de prioridade alta
↓
reduce()
↓
soma as horas das tarefas selecionadas
Regra de negócio
Foi discutida a diferença entre:
tarefa.prioridade === "Alta"
e:
tarefa.prioridade !== "Baixa"
Apesar de, em determinados dados, os resultados poderem ser iguais, as regras de negócio são diferentes.
A segunda regra é mais abrangente, pois também permite valores futuros como:
Urgente
Média
Crítica
Combinação de filter() e map()
Foi criada uma função para obter somente os títulos das tarefas de prioridade alta.
function obterTitulosDeTarefasPrioridadeAlta(tarefas) {
  return tarefas
    .filter((tarefa) => tarefa.prioridade === "Alta")
    .map((tarefa) => tarefa.titulo);
}
O resultado produzido pelo filter() mantém os objetos completos.
Exemplo:
[
  { titulo: "API", prioridade: "Alta", horas: 5 },
  { titulo: "Testes", prioridade: "Alta", horas: 2 }
]
Após o map():
["API", "Testes"]
Foi consolidada a diferença:
filter()
→ seleciona

map()
→ transforma
Formatação para exibição
Foi utilizado o método join() para transformar o array de títulos em uma string adequada para exibição.
Exemplo:
const mensagem = titulosPrioridadeAlta.join(", ");
Também foi feita uma renderização simples no HTML utilizando:
document.getElementById("mensagem").textContent =
  `Títulos de tarefas com prioridade alta: ${mensagem}`;
Foi reforçado que textContent é adequado quando o objetivo é inserir somente texto, sem necessidade de interpretar HTML.
Separação de responsabilidades
Foi discutida a importância de manter diferentes etapas com responsabilidades claras.
Exemplo:
filter()
→ seleção

map()
→ transformação

join()
→ formatação para apresentação

textContent
→ exibição na interface
Essa separação facilita a leitura, a manutenção e a explicação do código.
Explicação técnica
Além da implementação, foi iniciada uma nova prática: explicar o código como em uma entrevista técnica.
Foram treinadas perguntas como:
- por que utilizar filter() antes de map()?
- por que utilizar filter() junto com reduce()?
- qual a diferença entre filter() e map()?
- qual o papel do valor inicial do reduce()?
- por que duas regras diferentes podem gerar o mesmo resultado?
Aplicação no TaskFlow
Os exercícios continuaram utilizando o domínio do TaskFlow, trabalhando com:
- prioridade;
- horas;
- títulos;
- seleção de tarefas;
- transformação de dados;
- acumulação;
- exibição de resultados no HTML.
Próximo conteúdo
- Continuar a prática de map().
- Criar novos objetos a partir de objetos existentes.
- Combinar título e horas em novos arrays.
- Continuar o treino de explicação técnica das soluções.
```
