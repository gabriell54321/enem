document.addEventListener('DOMContentLoaded', function() {
    // Contador regressivo
    let minutes = 15;
    let seconds = 0;
    
    function updateCountdown() {
        const countdownElements = document.querySelectorAll('#countdown, #countdown2, #countdown3');
        
        seconds--;
        if (seconds < 0) {
            seconds = 59;
            minutes--;
        }
        
        if (minutes < 0) {
            countdownElements.forEach(el => el.textContent = "00:00");
            document.querySelector('.urgency-bar').textContent = "⚠️ PROMOÇÃO ENCERRADA!";
            return;
        }
        
        const display = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        countdownElements.forEach(el => el.textContent = display);
        
        if (minutes < 3) {
            countdownElements.forEach(el => {
                el.style.color = "#E74C3C";
                el.style.fontWeight = "bold";
            });
        }
    }
    
    setInterval(updateCountdown, 1000);
    updateCountdown();

    // FAQ accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });

    // Animação de scroll suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Contador de pessoas visualizando
    function updateViewerCount() {
        const randomIncrement = Math.floor(Math.random() * 3) + 1;
        const currentCount = parseInt(localStorage.getItem('viewerCount')) || 15;
        const newCount = currentCount + randomIncrement;
        localStorage.setItem('viewerCount', newCount);
        
        const viewerElements = document.querySelectorAll('.viewer-count');
        viewerElements.forEach(el => {
            el.textContent = newCount;
        });
    }

    setInterval(updateViewerCount, 5000);
    updateViewerCount();
});