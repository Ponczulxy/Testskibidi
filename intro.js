document.addEventListener('DOMContentLoaded', () => {
    const intro = document.getElementById('intro-overlay');
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
        if(intro) {
            intro.classList.add('intro-hidden');
            setTimeout(() => {
                document.body.style.overflow = 'auto';
            }, 1000);
        }
    }, 2800);
});