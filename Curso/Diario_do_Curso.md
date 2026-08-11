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
