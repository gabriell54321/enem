// Contador Regressivo
document.addEventListener('DOMContentLoaded', function() {
    const countdownElement = document.getElementById('countdown');
    const urgencyBar = document.getElementById('urgencyBar');
    
    let minutes = 15;
    let seconds = 0;
    
    function updateCountdown() {
        // Formata o tempo como MM:SS
        countdownElement.textContent = 
            minutes.toString().padStart(2, '0') + ':' + 
            seconds.toString().padStart(2, '0');
        
        // Lógica do contador
        if (seconds === 0) {
            if (minutes === 0) {
                // Quando o tempo acabar
                urgencyBar.textContent = "⏰ Oferta encerrada!";
                urgencyBar.style.backgroundColor = '#D32F2F';
                return;
            }
            minutes--;
            seconds = 59;
        } else {
            seconds--;
        }
        
        // Alerta visual quando faltam 5 minutos
        if (minutes === 5 && seconds === 0) {
            urgencyBar.style.backgroundColor = '#D32F2F';
            urgencyBar.style.fontWeight = '700';
        }
    }
    
    // Atualiza a cada segundo
    setInterval(updateCountdown, 1000);
    updateCountdown();
});