document.addEventListener('DOMContentLoaded', () => {
    const btnWish1 = document.getElementById('btnWish1');
    const btnWish10 = document.getElementById('btnWish10');
    const modal = document.getElementById('gachaModal');
    const animation = document.getElementById('wishAnimation');
    const result = document.getElementById('wishResult');
    const resultName = document.getElementById('resultName');
    const resultStars = document.getElementById('resultStars');
    const resultQuote = document.getElementById('resultQuote');
    const btnCloseModal = document.getElementById('btnCloseModal');

    const fraseRuan = '"Ruan, você é meu amigo legal. Você é meu amigo grandão, mas gente boa! Nosso amigo grandão de todo mundo da sala!" 🤝😊';

    // Tabela de Personagens (Gacha Pool)
    const pool = [
        { name: 'RUAN 👑', stars: '⭐⭐⭐⭐⭐', quote: fraseRuan },
        { name: 'Espada de Ferro 🗡️', stars: '⭐⭐⭐', quote: 'Uma espada comum de treino.' },
        { name: 'Lança Caçadora 🏹', stars: '⭐⭐⭐', quote: 'Uma lança simples de caça.' },
        { name: 'Guia de Magia 📖', stars: '⭐⭐⭐', quote: 'Um livro antigo de feitiços.' }
    ];

    function sortearGacha(multiplo = false) {
        modal.classList.remove('hidden');
        animation.style.display = 'block';
        result.classList.add('hidden');

        setTimeout(() => {
            animation.style.display = 'none';
            result.classList.remove('hidden');

            if (multiplo) {
                resultStars.textContent = '⭐⭐⭐⭐⭐';
                resultName.textContent = 'RUAN 👑';
                resultQuote.textContent = fraseRuan;
            } else {
                const sorteado = Math.random() > 0.3 ? pool[0] : pool[Math.floor(Math.random() * pool.length)];
                resultStars.textContent = sorteado.stars;
                resultName.textContent = sorteado.name;
                resultQuote.textContent = sorteado.quote;
            }
        }, 1500);
    }

    btnWish1.addEventListener('click', () => sortearGacha(false));
    btnWish10.addEventListener('click', () => sortearGacha(true));

    btnCloseModal.addEventListener('click', () => {
        modal.classList.add('hidden');
    });
});
