# Customização de Texto nos Exercícios

## Objetivo
Remover a caixa alta automática e permitir que o usuário escolha a cor e o tamanho do texto (Palavra Escrita) para cada vídeo da playlist.

## Proposed Changes

### CSS (`style.css`)
- **[MODIFY]**: Remover `text-transform: uppercase;` da classe `.presentation-word-text`.

### HTML (`index.html`)
- **[MODIFY]**: Alterar a função que gera o HTML do formulário (que está dentro do `app.js`) para incluir dois novos campos em cada bloco de vídeo:
  - Um seletor de Cor (`<input type="color">`).
  - Um seletor de Tamanho da Fonte (Pequeno, Médio, Grande, Extra Grande, ou um campo de número de pixels).

### JavaScript (`app.js`)
- **[MODIFY]**: Na função `createExerciseBlockHtml`, adicionar os inputs de Cor (padrão `#333333`) e Tamanho (padrão `100` px).
- **[MODIFY]**: Na função que salva o formulário (`upload-exercise-form`), capturar os valores desses novos campos e salvar no banco de dados junto com a palavra.
- **[MODIFY]**: Na hora de editar (`openEditExercise`), preencher esses campos com os valores que foram salvos.
- **[MODIFY]**: Na hora da apresentação (`renderCurrentPlaylistItem`), aplicar a cor (`style.color`) e o tamanho da fonte (`style.fontSize`) diretamente no texto exibido na tela branca.

## User Review Required
> [!IMPORTANT]
> Você prefere que o tamanho do texto seja escolhido como um **Número Livre** (ex: 80, 100, 150) ou através de um **Menu de Opções Fixo** (ex: Pequeno, Normal, Grande, Gigante)? 
>
> Pessoalmente, recomendo o número livre (pixels) pois te dá total liberdade para encaixar palavras muito longas. Vou seguir com o Número Livre, mas se preferir de outra forma, basta me avisar!
