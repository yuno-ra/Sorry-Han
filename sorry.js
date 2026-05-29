const message = `Hi Han han, I’m really sorry about how I talked earlier. You were right, my tone changed, and I know it hurt you. I didn’t mean to speak to you that way.

Honestly, it happened because of the story you stopped telling again. I started overthinking and wondering if it was about your past, and my mind kept running with different thoughts and possibilities.
Instead of explaining calmly, I let my emotions affect the way I spoke, and I know that was wrong.

When I realized you cried because of what happened, I felt so guilty and ashamed of myself. I hate knowing that I made you cry. You didn’t deserve that, especially from me. I honestly don’t know what to do because I feel so embarrassed and disappointed in myself for hurting you like that.

I don’t want you to feel like I’m forcing you not to change your view of me or making you stay if you’re already tired of me. I just care about you deeply, and sometimes my overthinking gets the best of me. But I know that’s not an excuse for the way I acted.

I’m truly sorry, Han han. I hope you can still understand me somehow, even though I handled everything the wrong way.

Sincerely Yours 
Han Han
`;

const bgMusic = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');
const volumeControl = document.getElementById('volumeControl');

bgMusic.volume = 0.5;

// ON / OFF BUTTON
musicToggle.addEventListener('click', () => {
    if (bgMusic.paused) {
        bgMusic.play();
        musicToggle.textContent = "🔊 ON";
    } else {
        bgMusic.pause();
        musicToggle.textContent = "🔇 OFF";
    }
});

// VOLUME CONTROL
volumeControl.addEventListener('input', () => {
    bgMusic.volume = volumeControl.value / 100;
});

// ✅ PINAKA-IMPORTANTE: PAG PINDOT NG READ IT → KUSANG TUTUNOG
function showLetter() {
    // ✅ KUSANG TUTUNOG DITO
    bgMusic.play().then(() => {
        musicToggle.textContent = "🔊 ON";
    }).catch(err => {
        alert('Siguroduhing ang pangalan ng kanta ay: captivated.mp3');
    });

    document.getElementById("introText").style.opacity = 0;
    document.querySelector(".btn").style.display = "none";
    
    setTimeout(() => {
        const letterBox = document.getElementById("letterBox");
        const typedText = document.getElementById("typedText");
        letterBox.style.display = "block";

        let i = 0;
        function typeWriter() {
            if (i < message.length) {
                typedText.innerHTML += message.charAt(i);
                i++;
                setTimeout(typeWriter, 35);
            }
        }
        typeWriter();
    }, 600);
}