# Documentacao das cartas do tabuleiro - Jogo 2

Baseado na implementacao atual em `app.js`.

## Visao geral

O tabuleiro da **Trilha de Aprendizado de Forcas** tem:

- `Inicio`
- `48` casas entre o inicio e a chegada
- `Chegada`

As casas podem ser:

- `start` - inicio da partida
- `normal` - casa comum com pergunta
- `challenge` - casa especial com regra extra
- `finish` - chegada/fim da trilha

## Como a carta da casa e escolhida

Quando o jogador cai em uma casa normal, a pergunta e definida nesta ordem:

1. Carta customizada com `spaceNumber` igual ao numero exato da casa.
2. Carta customizada com a mesma `virtue` e `spaceNumber` vazio ou `0`.
3. Pergunta padrao da virtude correspondente.

Isso significa que as cartas customizadas podem sobrescrever uma casa especifica ou funcionar como carta generica por categoria.

## Regras gerais das cartas

- A resposta correta normalmente confirma a jogada e nao move o peao para frente nem para tras, a menos que a casa especial diga o contrario.
- A resposta errada costuma aplicar penalidade de `-2` casas, exceto quando a carta especial define outra regra.
- Em casas de armadilha, nao ha pergunta de multipla escolha: a saida depende da rolagem do dado.
- Ao concluir uma carta, o turno avanca automaticamente.

## Casas do tabuleiro

### 1. Inicio

- Posicao: `0`
- Tipo: `start`
- Regra:
  - Nao exibe pergunta.
  - Mostra a mensagem para girar a roleta.
  - O botao de avancar turno fica desativado.

### 2. Casas normais

As casas normais usam cartas de pergunta por virtude:

- `sabedoria`
- `coragem`
- `humanidade`
- `justica`
- `temperanca`
- `transcendencia`

Regra:

- Se o jogador acertar, a jogada segue normalmente.
- Se errar, volta `2` casas.
- Se houver carta customizada para a casa, ela substitui a pergunta padrao.

### 3. Casa 8 - Exagerou na Forca

- Tipo: `challenge`
- Regra da carta:
  - Se acertar: nao avanca casa extra, apenas consolida a posicao.
  - Se errar: volta ao `Inicio`.

### 4. Casa 13 - Armadilha

- Tipo: `normal`
- Virtude: `penalidade`
- Regra:
  - O jogador fica preso.
  - Para sair da armadilha, precisa tirar `4` na roleta.
  - Se nao tirar `4`, continua preso e perde a rodada.
  - Se sair da armadilha, avanca normalmente e passa a vez.

### 5. Casa 15 - Teia de Aranha

- Tipo: `challenge`
- Regra da carta:
  - Se acertar: nao avanca casa extra, apenas consolida a posicao.
  - Se errar: volta `2` casas.

### 6. Casa 20 - Exagerou na Forca

- Tipo: `challenge`
- Regra igual a casa 8:
  - Se acertar: nao avanca casa extra.
  - Se errar: volta ao `Inicio`.

### 7. Casa 23 - Armadilha

- Tipo: `normal`
- Virtude: `penalidade`
- Regra igual a casa 13:
  - Fica preso.
  - Precisa tirar `4` para sair.

### 8. Casa 25 - Voo da Borboleta

- Tipo: `challenge`
- Regra da carta:
  - Se acertar: avanca `3` casas de bonus.
  - Se errar: volta `2` casas.

### 9. Casa 28 - Exagerou na Forca

- Tipo: `challenge`
- Regra igual a casa 8:
  - Se acertar: nao avanca casa extra.
  - Se errar: volta ao `Inicio`.

### 10. Casa 35 - Abelha Apressada

- Tipo: `challenge`
- Regra da carta:
  - Se acertar: avanca `1` casa de bonus.
  - Se errar: volta `2` casas.

### 11. Casa 36 - Armadilha

- Tipo: `normal`
- Virtude: `penalidade`
- Regra igual as casas 13 e 23:
  - Fica preso.
  - Precisa tirar `4` para sair.

### 12. Casa 45 - Caminho da Formiga

- Tipo: `challenge`
- Regra da carta:
  - Se acertar: nao avanca casa extra, apenas consolida a posicao.
  - Se errar: volta `3` casas.

### 13. Chegada

- Tipo: `finish`
- Regra:
  - Nao exibe pergunta.
  - Finaliza a trilha.
  - Mostra a mensagem de vitoria.

## Resumo rapido das casas especiais

- `8` - Exagerou na Forca: acertou = fica; errou = volta ao inicio
- `13` - Armadilha: precisa tirar `4` para sair
- `15` - Teia de Aranha: acertou = fica; errou = volta `2`
- `20` - Exagerou na Forca: acertou = fica; errou = volta ao inicio
- `23` - Armadilha: precisa tirar `4` para sair
- `25` - Voo da Borboleta: acertou = avanca `3`; errou = volta `2`
- `28` - Exagerou na Forca: acertou = fica; errou = volta ao inicio
- `35` - Abelha Apressada: acertou = avanca `1`; errou = volta `2`
- `36` - Armadilha: precisa tirar `4` para sair
- `45` - Caminho da Formiga: acertou = fica; errou = volta `3`

## Observacoes importantes

- A logica do tabuleiro distingue entre:
  - carta de movimento
  - carta de consolidacao
  - casa de penalidade
- Casas de penalidade nao usam resposta de multipla escolha no momento em que o jogador ja esta preso.
- O campo `spaceNumber` nas cartas customizadas permite amarrar uma pergunta a uma casa especifica.
- Se nao existir carta customizada para a casa, o sistema usa uma pergunta padrao da virtude da casa.

