

// even sur le title
let doneConfe = document.querySelector('h1');
doneConfe.addEventListener('click', ()=>{
        let duration = 15 * 1000;
        let animationEnd = Date.now() + duration;
        let defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
        }

        let interval = setInterval(function() {
        let timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        let particleCount = 50 * (timeLeft / duration);
        // since particles fall down, start a bit higher than random
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
        }, 250);
    });

doneConfe.addEventListener("mouseover", function() {
        // on met l'accent sur la cible de mouseover
        doneConfe.style.cursor = "pointer";  
});

// even sur une seul taches terminer
let oneConfe = document.getElementById('oneConfetti');
oneConfe.addEventListener('click', ()=>{
    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
      }
      confetti({
        angle: randomInRange(55, 150),
        spread: randomInRange(50, 70),
        particleCount: randomInRange(100, 300),
        origin: { y: 0.6 }
      });
});

oneConfe.addEventListener("mouseover", function() {
        // on met l'accent sur la cible de mouseover
        oneConfe.style.cursor = "pointer";  
});
