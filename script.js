document.addEventListener('DOMContentLoaded', function() {
    // Configuração do contador regressivo (15 minutos)
    let minutes = 15;
    let seconds = 0;
    
    function updateCountdown() {
        const countdownDisplay = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        document.getElementById('countdown').textContent = countdownDisplay;
        document.getElementById('countdown2').textContent = countdownDisplay;
        
        if (seconds === 0) {
            if (minutes === 0) {
                // Oferta expirada
                document.querySelector('.alert-bar').textContent = "🚨 OFERTA ENCERRADA!";
                clearInterval(countdownTimer);
                return;
            }
            minutes--;
            seconds = 59;
        } else {
            seconds--;
        }
    }
    
    const countdownTimer = setInterval(updateCountdown, 1000);
    updateCountdown(); // Chamada inicial
    
    // Redirecionamento para o checkout
    document.getElementById('cta-button').addEventListener('click', function() {
        window.location.href = "https://pay.cakto.com.br/32szcio_481174";
    });
});