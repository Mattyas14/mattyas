
// =========================
// MATTYAS — STARS
// =========================

const stars = 35;

for (let i = 0; i < stars; i++) {
  const star = document.createElement("div");

  star.className = "star";

  star.style.left = Math.random() * 100 + "vw";
  star.style.top = Math.random() * 100 + "vh";
  star.style.animationDelay = Math.random() * 4 + "s";

  document.body.appendChild(star);
}


// =========================
// MATTYAS — MUSIC PLAYER
// =========================

const playButton = document.getElementById("playButton");
const musicPlayer = document.getElementById("musicPlayer");
const progressBar = document.getElementById("progressBar");
const trackStatus = document.getElementById("trackStatus");

if (playButton && musicPlayer) {

  playButton.addEventListener("click", async () => {

    if (musicPlayer.paused) {

      try {

        await musicPlayer.play();

        playButton.textContent = "⏸";
        trackStatus.textContent = "Lecture en cours...";

      } catch (error) {

        trackStatus.textContent = "Audio indisponible";
        console.error("Erreur audio :", error);

      }

    } else {

      musicPlayer.pause();

      playButton.textContent = "▶";
      trackStatus.textContent = "En pause";

    }

  });


  musicPlayer.addEventListener("timeupdate", () => {

    if (!musicPlayer.duration) return;

    const progress =
      (musicPlayer.currentTime / musicPlayer.duration) * 100;

    progressBar.style.width = progress + "%";

  });


  musicPlayer.addEventListener("ended", () => {

    playButton.textContent = "▶";
    trackStatus.textContent = "Prêt à écouter";
    progressBar.style.width = "0%";

  });

}
