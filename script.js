document.addEventListener('DOMContentLoaded', function() {
    const numStars = 12;
    const starContainer = document.getElementById('star-container');
    const darkModeToggle = document.getElementById('dark-mode-toggle');

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        const posX = Math.floor(Math.random() * window.innerWidth);
        const posY = Math.floor(Math.random() * window.innerHeight);
        star.style.left = posX + 'px';
        star.style.top = posY + 'px';
        starContainer.appendChild(star);
    }

    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });
});