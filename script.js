document.getElementById('meuBotao').addEventListener('click', function() {
    const mensagem = document.getElementById('mensagem');
    mensagem.textContent = 'gremio melhor time do mundo!';
    mensagem.classList.remove('hidden');
});

// Seleciona os botões e a div de resposta
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const responseDiv = document.getElementById('response');

// Adiciona evento de clique para o botão "Sim!"
yesButton.addEventListener('click', function() {
    responseDiv.classList.remove('hidden'); // Mostra a div de resposta
    responseDiv.textContent = "Te amo, momoxii! ❤️";
});

// Adiciona evento de clique para o botão "Não!"
noButton.addEventListener('click', function() {
    responseDiv.classList.remove('hidden'); // Mostra a div de resposta
    responseDiv.textContent = "Coi né, coitado, não tem opção de não rss.";
});