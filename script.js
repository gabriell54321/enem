// Contador regressivo
document.addEventListener('DOMContentLoaded', function() {
    // Configura o contador regressivo
    let minutes = 15;
    let seconds = 0;
    const countdownElement = document.getElementById('countdown');
    
    const countdownInterval = setInterval(function() {
        // Atualiza o display
        countdownElement.textContent = 
            minutes.toString().padStart(2, '0') + ':' + 
            seconds.toString().padStart(2, '0');
        
        // Lógica do contador
        if (seconds === 0) {
            if (minutes === 0) {
                clearInterval(countdownInterval);
                document.querySelector('.promo-banner').textContent = "⏰ Oferta encerrada!";
                return;
            }
            minutes--;
            seconds = 59;
        } else {
            seconds--;
        }
    }, 1000);

    // Efeito de destaque quando faltam 5 minutos
    setTimeout(function() {
        const banner = document.querySelector('.promo-banner');
        if (banner) {
            banner.style.backgroundColor = '#D32F2F';
            banner.style.fontWeight = '600';
        }
    }, 10 * 60 * 1000); // 10 minutos (5 minutos restantes)
});