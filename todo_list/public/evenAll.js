
// even lorsqu'on a plus de Taches    
let allConfe = document.getElementById('allConfettis');
allConfe.addEventListener('click', ()=>{
    let end = Date.now() + (10 * 1000);
    // go Buckeyes!
    let colors = ['#bb0000', '#ffffff'];
    (function frame() {
    confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
    });
    confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
    });
    if (Date.now() < end) {
        requestAnimationFrame(frame);
    }
    }());
    repeatCofetti();
    setTimeout(function() { repeatCofetti() }, 3000);
    setTimeout(function() { repeatCofetti() }, 5000);
    setTimeout(function() { repeatCofetti() }, 7000);
    setTimeout(function() { repeatCofetti() }, 10000);
    setTimeout(function() { repeatCofetti() }, 12000);
});

allConfe.addEventListener("mouseover", function() {
    // on met l'accent sur la cible de mouseover
    allConfe.style.cursor = "pointer";  
});

// functions 
function repeatCofetti (){
    let count = 200;
    let defaults = {
      origin: { y: 0.7 }
    };
    
    function fire(particleRatio, opts) {
      confetti(Object.assign({}, defaults, opts, {
        particleCount: Math.floor(count * particleRatio)
      }));
    }
    
    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });  
}
