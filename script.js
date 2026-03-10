// Espera o site carregar completamente
document.addEventListener("DOMContentLoaded", function() {
    
    // Seleciona o botão e o parágrafo da mensagem secreta
    const botao = document.getElementById("btn-mensagem");
    const mensagem = document.getElementById("msg-secreta");

    // Adiciona o evento de clique
    botao.addEventListener("click", function() {
        // Faz a mensagem aparecer ou sumir
        if (mensagem.classList.contains("hidden")) {
            mensagem.classList.remove("hidden");
            botao.textContent = "Fechar Mensagem";
            botao.style.backgroundColor = "#ffffff"; // Muda cor do botão
        } else {
            mensagem.classList.add("hidden");
            botao.textContent = "Clique para uma dose de inspiração";
            botao.style.backgroundColor = ""; // Volta cor original
        }
    });
});