document.addEventListener('DOMContentLoaded', () => {
    const btnWish1 = document.getElementById('btnWish1');
    const btnWish10 = document.getElementById('btnWish10');
    const modal = document.getElementById('gachaModal');
    const animation = document.getElementById('wishAnimation');
    const result = document.getElementById('wishResult');
    const resultName = document.getElementById('resultName');
    const resultStars = document.getElementById('resultStars');
    const btnCloseModal = document.getElementById('btnCloseModal');

    // Tabela de Personagens (Gacha Pool)
    const pool = [
        { name: 'Ruan', stars: '★★★★★', is5Star: true },
        { name: 'Espada de Ferro', stars: '★★★', is5Star: false },
        { name: 'Lança Caçadora', stars: '★★★', is5Star: false },
        { name: 'Guia de Magia', stars: '★★★', is5Star: false },
        { name: 'Sombra de 4 Estrelas', stars: '★★★★', is5Star: false }
    ];

    function sortearGacha(multiplo = false) {
        modal.classList.remove('hidden');
        animation.style.display = 'block';
        result.classList.add('hidden');

        setTimeout(() => {
            animation.style.display = 'none';
            result.classList.remove('hidden');

            if (multiplo) {
                resultStars.textContent = '★★★★★';
                resultName.textContent = 'RUAN + 9 Itens!';
            } else {
                // 50% de chance de vir o Ruan 5 estrelas no teste
                const sorteado = Math.random() > 0.3 ? pool[0] : pool[Math.floor(Math.random() * pool.length)];
                resultStars.textContent = sorteado.stars;
                resultName.textContent = sorteado.name;
            }
        }, 1500); // 1.5s de animação
    }

    btnWish1.addEventListener('click', () => sortearGacha(false));
    btnWish10.addEventListener('click', () => sortearGacha(true));

    btnCloseModal.addEventListener('click', () => {
        modal.classList.add('hidden');
    });
});
