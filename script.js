document.addEventListener('DOMContentLoaded', function() {
    // Contador regressivo mais robusto
    function startCountdown() {
        const countdownElements = [
            document.getElementById('countdown'),
            document.getElementById('countdown2')
        ];
        
        let minutes = 15;
        let seconds = 0;
        
        function update() {
            seconds--;
            if (seconds < 0) {
                seconds = 59;
                minutes--;
            }
            
            if (minutes < 0) {
                // Oferta expirada
                countdownElements.forEach(el => el.textContent = "00:00");
                document.querySelector('.alert-bar').textContent = "🚨 OFERTA ENCERRADA!";
                return;
            }
            
            const display = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            countdownElements.forEach(el => el.textContent = display);
            
            // Mudar cor quando faltar pouco tempo
            if (minutes < 3) {
                countdownElements.forEach(el => el.style.color = "#E74C3C");
            }
        }
        
        update(); // Chamada inicial
        const timer = setInterval(update, 1000);
    }
    
    startCountdown();
    
    // Botão CTA
    const ctaButton = document.getElementById('cta-button');
    ctaButton.addEventListener('click', function() {
        // Adicionar efeito de clique
        ctaButton.style.transform = "scale(0.98)";
        setTimeout(() => {
            ctaButton.style.transform = "";
            window.location.href = "https://pay.cakto.com.br/32szcio_481174";
        }, 200);
    });
    
    // Efeito de scroll suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});