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
