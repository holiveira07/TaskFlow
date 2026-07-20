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
