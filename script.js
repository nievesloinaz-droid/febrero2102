document.addEventListener('DOMContentLoaded', () => {
    const redBtn = document.getElementById('redBtn');
    const blueBtn = document.getElementById('blueBtn');
    const resultContainer = document.getElementById('resultContainer');
    const resultTitle = document.getElementById('resultTitle');
    const resultMessage = document.getElementById('resultMessage');
    const resetBtn = document.getElementById('resetBtn');
    const gameButtons = document.querySelectorAll('.game-btn');

    function play(color) {
        // Randomly decide win or loss (50/50 chance)
        const isWin = Math.random() > 0.5;
        
        // Hide buttons or disable interaction
        gameButtons.forEach(btn => {
            btn.style.opacity = '0.3';
            btn.style.pointerEvents = 'none';
        });

        // Show result
        resultContainer.classList.remove('hidden');
        
        if (isWin) {
            resultContainer.className = 'result-container win';
            resultTitle.textContent = '¡HAS GANADO!';
            resultMessage.textContent = `Has tenido suerte con el color ${color}. ¡Felicidades!`;
        } else {
            resultContainer.className = 'result-container loss';
            resultTitle.textContent = 'HAS PERDIDO';
            resultMessage.textContent = `El color ${color} no era el de la suerte esta vez.`;
        }

        // Add a subtle entrance animation
        resultContainer.style.transform = 'translateY(0)';
        resultContainer.style.opacity = '1';
    }

    redBtn.addEventListener('click', () => play('ROJO'));
    blueBtn.addEventListener('click', () => play('AZUL'));

    resetBtn.addEventListener('click', () => {
        // Hide result
        resultContainer.classList.add('hidden');
        resultContainer.style.transform = 'translateY(20px)';
        resultContainer.style.opacity = '0';
        
        // Reset buttons
        gameButtons.forEach(btn => {
            btn.style.opacity = '1';
            btn.style.pointerEvents = 'auto';
        });
    });
});
