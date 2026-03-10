// ===== MENU MOBILE =====
// Seleciona os elementos do menu
const menuToggle = document.querySelector('.menu-toggle');
const menuLista = document.querySelector('.menu-lista');

// Quando clicar no botão do menu
menuToggle.addEventListener('click', () => {
    menuLista.classList.toggle('ativo'); // Adiciona ou remove a classe 'ativo'
    // Muda o ícone do botão
    if (menuLista.classList.contains('ativo')) {
        menuToggle.textContent = '✕'; // Ícone de fechar
    } else {
        menuToggle.textContent = '☰'; // Ícone de menu
    }
});

// ===== FECHA MENU AO CLICAR EM UM LINK =====
// Seleciona todos os links do menu
const menuLinks = document.querySelectorAll('.menu-link');

// Para cada link, adiciona um evento de clique
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuLista.classList.remove('ativo'); // Fecha o menu
        menuToggle.textContent = '☰'; // Volta ao ícone de menu
    });
});

// ===== EFEITO DE ROLAGEM SUAVE =====
// Para cada link do menu
menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Previne o comportamento padrão do link
        
        // Pega o ID da seção alvo (ex: #inicio)
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        // Rola suavemente até a seção
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// ===== BOTÃO INTERATIVO =====
// Seleciona o botão
const btnMensagem = document.getElementById('btnMensagem');

// Adiciona evento de clique
btnMensagem.addEventListener('click', () => {
    // Cria uma mensagem personalizada
    const mensagens = [
        '🌱 Pequenas atitudes mudam o mundo!',
        '♻️ Reciclar é transformar!',
        '💚 Sustentabilidade é o caminho!',
        '🌍 Juntos por um futuro melhor!'
    ];
    
    // Escolhe uma mensagem aleatória
    const mensagemAleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
    
    // Mostra a mensagem
    alert(mensagemAleatoria);
    
    // Muda a cor do botão temporariamente
    btnMensagem.style.backgroundColor = '#2e7d32';
    setTimeout(() => {
        btnMensagem.style.backgroundColor = '#4caf50';
    }, 300);
});

// ===== ÁREA INTERATIVA (BARRA DE PROGRESSO) =====
const areaInterativa = document.getElementById('areaInterativa');
const barraProgresso = document.getElementById('progresso');
let progresso = 0;

// Evento quando o mouse entra na área
areaInterativa.addEventListener('mouseenter', () => {
    progresso = 0;
    const intervalo = setInterval(() => {
        progresso += 10;
        barraProgresso.style.width = progresso + '%';
        
        // Quando chegar a 100%, para o intervalo
        if (progresso >= 100) {
            clearInterval(intervalo);
            // Muda a cor da barra
            barraProgresso.style.backgroundColor = '#ffc107';
            // Mostra mensagem
            const msg = document.createElement('p');
            msg.textContent = '🌱 Você é parte da mudança!';
            msg.style.color = 'white';
            msg.style.marginTop = '10px';
            areaInterativa.appendChild(msg);
            
            // Remove a mensagem após 3 segundos
            setTimeout(() => {
                msg.remove();
                barraProgresso.style.backgroundColor = '#a7f0e6';
            }, 3000);
        }
    }, 100);
});

// Evento quando o mouse sai da área
areaInterativa.addEventListener('mouseleave', () => {
    progresso = 0;
    barraProgresso.style.width = '0%';
});

// ===== DESTAQUE DO MENU ATIVO DURANTE ROLAGEM =====
// Função para destacar o link da seção visível
function destacaMenuAtivo() {
    const secoes = document.querySelectorAll('.secao');
    const scrollPos = window.scrollY + 100; // Posição atual + offset
    
    secoes.forEach(secao => {
        const topo = secao.offsetTop;
        const base = topo + secao.offsetHeight;
        const id = secao.getAttribute('id');
        
        // Verifica se a seção está visível
        if (scrollPos >= topo && scrollPos < base) {
            // Remove a classe 'ativo' de todos os links
            menuLinks.forEach(link => {
                link.classList.remove('ativo');
            });
            
            // Adiciona a classe 'ativo' ao link correspondente
            const linkAtivo = document.querySelector(`.menu-link[href="#${id}"]`);
            if (linkAtivo) {
                linkAtivo.classList.add('ativo');
            }
        }
    });
}

// Adiciona evento de rolagem
window.addEventListener('scroll', destacaMenuAtivo);

// ===== EFEITO DE APARECER AO ROLAR =====
// Cria um observador de interseção
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
});

// Aplica a todas as seções
document.querySelectorAll('.secao').forEach(secao => {
    secao.style.opacity = '0';
    secao.style.transform = 'translateY(50px)';
    secao.style.transition = 'opacity 0.6s, transform 0.6s';
    observer.observe(secao);
});