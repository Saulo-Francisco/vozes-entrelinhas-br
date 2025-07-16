// Player de Podcast
document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById('audioPlayer');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const progressBar = document.getElementById('progressBar');
    const currentTimeEl = document.getElementById('currentTime');
    const durationEl = document.getElementById('duration');

    // Atualiza a barra de progresso e o tempo
    function updateProgress() {
        if (!isNaN(audio.duration)) {
            const progress = (audio.currentTime / audio.duration) * 100;
            progressBar.style.width = progress + '%';

            // Formata o tempo atual
            const minutesCurrent = Math.floor(audio.currentTime / 60);
            const secondsCurrent = Math.floor(audio.currentTime % 60).toString().padStart(2, '0');
            currentTimeEl.textContent = `${minutesCurrent}:${secondsCurrent}`;

            // Formata a duração total
            const minutesDuration = Math.floor(audio.duration / 60);
            const secondsDuration = Math.floor(audio.duration % 60).toString().padStart(2, '0');
            durationEl.textContent = `${minutesDuration}:${secondsDuration}`;
        }
    }

    // Play ou Pause
    playPauseBtn.addEventListener('click', function () {
        if (audio.paused) {
            audio.play();
            playPauseBtn.innerHTML = '⏸️';
        } else {
            audio.pause();
            playPauseBtn.innerHTML = '▶️';
        }
    });

    // Atualiza com o tempo
    audio.addEventListener('timeupdate', updateProgress);

    // Clique na barra de progresso para pular
    progressBar.parentElement.addEventListener('click', function (e) {
        const width = this.clientWidth;
        const clickX = e.offsetX;
        const duration = audio.duration;

        audio.currentTime = (clickX / width) * duration;
    });
});