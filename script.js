document.addEventListener('DOMContentLoaded', () => {
    const botao = document.getElementById('meuBotao');
    const mensagem = document.getElementById('mensagemSucesso');

    botao.addEventListener('click', (event) => {
        // Exibe a mensagem suavemente
        mensagem.classList.remove('hidden');

        // Cria o efeito de partícula/onda (Ripple) no clique
        criarEfeitoOnda(event);

        // Oculta a mensagem após 3 segundos
        setTimeout(() => {
            mensagem.classList.add('hidden');
        }, 3000);
    });

    function criarEfeitoOnda(event) {
        const btn = event.currentTarget;
        const circle = document.createElement('span');
        const diameter = Math.max(btn.clientWidth, btn.clientHeight);
        const radius = diameter / 2;

        const rect = btn.getBoundingClientRect();
        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - rect.left - radius}px`;
        circle.style.top = `${event.clientY - rect.top - radius}px`;
        
        // Estilização dinâmica da onda
        circle.style.position = 'absolute';
        circle.style.borderRadius = '50%';
        circle.style.backgroundColor = 'rgba(255, 255, 255, 0.35)';
        circle.style.transform = 'scale(0)';
        circle.style.animation = 'ripple 600ms linear';
        circle.style.pointerEvents = 'none';

        // Garante que o estilo da animação exista no DOM
        if (!document.getElementById('ripple-style')) {
            const style = document.createElement('style');
            style.id = 'ripple-style';
            style.innerHTML = `
                @keyframes ripple {
                    to {
                        transform: scale(4);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }

        const rippleExistente = btn.querySelector('.ripple');
        if (rippleExistente) {
            rippleExistente.remove();
        }

        circle.classList.add('ripple');
        btn.appendChild(circle);
    }
});
