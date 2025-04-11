// Seleciona todos os botões com a classe 'botao'
const botoes = document.querySelectorAll('.botao');

// Seleciona todos os elementos com a classe 'personagem'
const personagens = document.querySelectorAll('.personagem');

// Adiciona um ouvinte de evento de clique para cada botão
botoes.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        
        // === Botão ===

        // Remove a classe 'selecionado' do botão que já está selecionado
        const botaoSelecionado = document.querySelector('.botao.selecionado');
        if (botaoSelecionado) {
            botaoSelecionado.classList.remove('selecionado');
        }

        // Adiciona a classe 'selecionado' ao botão clicado
        botao.classList.add('selecionado');

        // === Personagem ===

        // Remove a classe 'selecionado' do personagem visível atualmente
        const personagemSelecionado = document.querySelector('.personagem.selecionado');
        if (personagemSelecionado) {
            personagemSelecionado.classList.remove('selecionado');
        }

        // Adiciona a classe 'selecionado' ao personagem correspondente ao botão clicado
        personagens[indice].classList.add('selecionado');
    });
});




