document.addEventListener('DOMContentLoaded', function() {
    // Configuração do contador regressivo (15 minutos)
    let minutes = 15;
    let seconds = 0;
    
    function updateCountdown() {
        const countdownElements = [
            document.getElementById('countdown'),
            document.getElementById('countdown2')
        ];
        
        seconds--;
        if (seconds < 0) {
            seconds = 59;
            minutes--;
        }
        
        if (minutes < 0) {
            // Oferta expirada
            countdownElements.forEach(el => el.textContent = "00:00");
            document.querySelector('.promo-banner').textContent = "Oferta encerrada!";
            return;
        }
        
        const display = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        countdownElements.forEach(el => el.textContent = display);
    }
    
    updateCountdown(); // Chamada inicial
    const timer = setInterval(updateCountdown, 1000);
});