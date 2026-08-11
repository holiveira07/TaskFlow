# Diário do Desenvolvedor

## Data: 14/07/2026

### Evolução técnica

Nesta etapa do curso, consolidei o entendimento do método `some()` e sua aplicação em cenários semelhantes aos encontrados em sistemas reais.

Também deixei de focar apenas na sintaxe e passei a interpretar primeiro os requisitos para, em seguida, escolher a melhor solução.

### Melhorias na metodologia

- O VS Code passou a ser o ambiente principal para desenvolvimento e prática.
- O chat será utilizado para explicações, revisões de código e discussões técnicas.
- Os exercícios foram reorganizados para manter uma estrutura mais organizada.

### Boas práticas adotadas

- Utilização de nomes de variáveis mais descritivos.
- Organização dos exercícios por assunto.
- Versionamento das alterações utilizando commits padronizados.
- Execução dos exercícios diretamente no terminal do VS Code.

### Reflexão

Percebo uma evolução na forma de resolver problemas. Antes eu pensava principalmente na sintaxe; agora procuro entender o problema, definir as regras de negócio e só então implementar a solução.

---

## `Diario_do_Desenvolvedor.md`

Adicionar uma reflexão:

```markdown
# Evolução como Desenvolvedor

## Raciocínio sobre regras de negócio

Durante os exercícios com arrays em JavaScript foi praticada a transformação de requisitos em lógica de programação.

Exemplo:

Regra:

"Todas as tarefas de prioridade Alta da equipe Backend estão concluídas?"

Processo:

1. Identificar quais dados participam da regra.
2. Selecionar esses dados com `filter()`.
3. Validar a condição usando `every()`.

---

## Aprendizado importante

Foi reforçado que a escolha de um método deve partir da pergunta que o sistema precisa responder.

Exemplos:

- Existe algum? → `some()`
- Todos atendem? → `every()`
- Quais atendem? → `filter()`
- Encontrar um elemento → `find()`

---

## Mentalidade desenvolvida

O objetivo não é apenas escrever código que funciona.

O objetivo é criar soluções:

- claras;
- legíveis;
- fáceis de manter;
- alinhadas às regras do sistema.
```

## 24/07/2026

## Evolução do raciocínio de desenvolvimento

Nesta etapa, continuei praticando JavaScript utilizando métodos de arrays em situações inspiradas em regras de negócio do TaskFlow.

O estudo reforçou a diferença entre `some()` e `every()` e mostrou como utilizar um array previamente filtrado para realizar diferentes análises sobre o mesmo conjunto de dados.

Também pratiquei condições compostas com operadores lógicos e desenvolvi maior atenção ao comportamento dos métodos durante a execução, especialmente ao fato de que `some()` e `every()` podem interromper a iteração assim que o resultado já pode ser determinado.

Um ponto importante aprendido foi analisar o estado dos dados após cada operação. Depois que um array é filtrado, o resultado pode ser armazenado em uma variável e reutilizado em outras operações, evitando repetir uma filtragem que já foi realizada.

A prática também reforçou uma habilidade importante para o desenvolvimento de software: traduzir perguntas de negócio em operações lógicas.

Exemplos:

- "Existe alguma tarefa que atende à condição?" → `some()`
- "Todas as tarefas atendem à condição?" → `every()`
- "Quais tarefas atendem à condição?" → `filter()`

O aprendizado continua avançando da compreensão isolada da sintaxe para a construção de soluções baseadas em regras de negócio.

### 27/07/2026 `Diario_do_Desenvolvedor.md`

```markdown
## Registro de Evolução — JavaScript

### Estudo realizado

Continuidade dos estudos de JavaScript com foco em métodos de arrays e aplicação prática em regras de negócio relacionadas ao projeto TaskFlow.

Nesta etapa, foi aprofundado o método `find()`.

### Principais aprendizados

Foi consolidado o entendimento de que o `find()` deve ser utilizado quando a aplicação precisa localizar um elemento específico.

O método retorna o primeiro elemento que atende à condição definida no callback e interrompe a busca após encontrar esse elemento.

Também foi compreendido que, quando nenhum elemento atende à condição, o retorno é `undefined`.

Durante os exercícios, foram praticadas buscas utilizando:

- `id`;
- nome;
- prioridade;
- status de conclusão;
- múltiplas condições combinadas com `&&`.

### Aplicação prática

Os exercícios foram relacionados ao contexto do TaskFlow, simulando situações como:

- localizar uma tarefa pelo `id`;
- verificar se uma tarefa foi encontrada;
- verificar se uma tarefa está concluída;
- localizar a primeira tarefa de alta prioridade ainda não concluída;
- localizar usuários por nome;
- tratar situações em que o elemento procurado não existe.

### Evolução do raciocínio

O estudo reforçou que a escolha de um método de array deve partir da regra de negócio e do resultado esperado.
```

## Foi consolidada a diferença entre:

```text
filter()
→ retorna vários elementos.

find()
→ retorna o primeiro elemento encontrado.

some()
→ retorna true ou false para verificar se existe algum elemento.

every()
→ retorna true ou false para verificar se todos atendem à condição.

Também foi reforçada a importância de diferenciar:

localizar um objeto;
verificar se o objeto existe;
analisar as propriedades do objeto encontrado.
Conceitos de JavaScript reforçados
Callback.
Retorno de métodos de array.
find().
undefined.
Valores truthy e falsy.
Operador lógico &&.
Short-circuit.
Condições compostas.
Estruturas condicionais com if e else.

```

## Reflexão profissional

O estudo mostrou que escrever código funcional não é suficiente. É necessário compreender o requisito e garantir que a implementação corresponda exatamente à regra de negócio.

A prática com find() ajudou a desenvolver a capacidade de transformar uma necessidade do sistema em uma condição de busca precisa.

O aprendizado continua seguindo a abordagem de compreender o problema, interpretar a regra de negócio, escolher a ferramenta adequada e então implementar a solução.

## Registro de Evolução — JavaScript

### Estudo de `includes()`

Foi estudado o método `includes()` e sua aplicação em verificações simples de existência de valores dentro de arrays.

Os exercícios foram relacionados a situações de regras de negócio, especialmente permissões e papéis de usuários.

A prática reforçou uma habilidade importante: identificar o tipo de pergunta que o sistema precisa responder antes de escolher o método.

Exemplo:

```text
"Esse usuário possui a permissão editar?"
→ includes()
```

Isso complementa o raciocínio desenvolvido nos estudos anteriores:

```text
Existe algum elemento que atende?
→ some()

Todos atendem?
→ every()

Qual é o primeiro elemento?
→ find()

Quais elementos atendem?
→ filter()

Esse valor existe na coleção?
→ includes()
```

### Evolução no estudo de `sort()`

O estudo do `sort()` representou uma evolução na complexidade das regras implementadas.

Inicialmente, a ordenação foi praticada com números. Depois, os exercícios passaram para objetos e, posteriormente, para regras de negócio mais próximas de um sistema real.

Um ponto importante foi compreender que o computador não possui conhecimento sobre o significado de valores como:

```text
Alta
Média
Baixa
```

Foi necessário transformar essa regra em uma representação que pudesse ser processada pelo algoritmo:

```javascript
const ordemPrioridade = {
  Alta: 1,
  Média: 2,
  Baixa: 3,
};
```

Isso ajudou a reforçar um conceito importante de desenvolvimento:

> Regras do mundo real precisam ser traduzidas para estruturas e operações que o computador consiga processar.

### Raciocínio sobre o funcionamento do `sort()`

Inicialmente houve dificuldade para compreender a comparação entre `a` e `b`.

Foi esclarecido que `a` e `b` não representam elementos específicos escolhidos pelo programador. São os dois elementos que o algoritmo de ordenação está comparando naquele momento.

A função de comparação funciona como uma regra geral que pode ser aplicada a diferentes pares de elementos.

Esse entendimento foi importante para deixar de interpretar a função como uma comparação fixa entre valores específicos.

### Múltiplos critérios

Também foi praticada uma regra de negócio com dois critérios:

1. ordenar pela prioridade;
2. em caso de empate, ordenar pela quantidade de dias de atraso.

Esse exercício exigiu a utilização de estruturas condicionais dentro da função de comparação.

O aprendizado mostrou que métodos de array podem representar regras de negócio progressivamente mais complexas e que a lógica deve ser construída de acordo com o requisito.

### Mutabilidade e imutabilidade

Outro aprendizado importante foi perceber que `sort()` modifica o array original.

Foi então praticada a utilização do spread operator:

```javascript
[...array].sort(...)
```

para criar uma cópia antes da ordenação.

Essa diferença foi registrada como um conceito importante para etapas futuras do curso, especialmente quando forem estudados frameworks e gerenciamento de estado.

### Reflexão profissional

Os exercícios de `includes()` e `sort()` reforçaram que aprender programação não significa apenas memorizar métodos.

O objetivo é compreender:

```text
Problema
↓
Regra de negócio
↓
Estrutura dos dados
↓
Operação necessária
↓
Implementação
↓
Validação do resultado
```

O estudo também mostrou que uma solução pode exigir estruturas auxiliares para representar regras que existem no domínio do sistema.

Essa forma de raciocínio será importante quando o curso avançar para backend, banco de dados, APIs e arquitetura do TaskFlow.

A evolução continua sendo direcionada para a capacidade de construir sistemas reais, e não apenas para a resolução isolada de exercícios de JavaScript.
