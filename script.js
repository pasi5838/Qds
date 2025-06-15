
const questions = [
  { question: "Hewan apa yang punya capit dan berjalan miring?", answer: "kepiting" },
  { question: "Hewan apa yang hidup di pasir dan menggali lubang?", answer: "ular" },
  { question: "Hewan apa yang bisa berjalan di dinding?", answer: "cicak" },
  { question: "Hewan apa yang suka bermain di air dan punya sirip?", answer: "lumba-lumba" },
  { question: "Hewan apa yang punya cangkang dan lambat?", answer: "kura-kura" },
  { question: "Hewan berkaki delapan yang bisa buat jaring?", answer: "laba-laba" },
  { question: "Hewan yang hidup di laut dan punya delapan lengan?", answer: "gurita" },
  { question: "Hewan berbulu yang bisa terbang dan berkicau?", answer: "burung" },
  { question: "Hewan besar bertaring yang tinggal di hutan?", answer: "harimau" },
  { question: "Hewan berbulu putih yang mengembik?", answer: "domba" },
  { question: "Hewan yang sering dijadikan teman manusia dan menggonggong?", answer: "anjing" },
  { question: "Hewan lucu yang suka wortel dan lompat-lompat?", answer: "kelinci" },
  { question: "Hewan yang bersirip dan bernapas dengan insang?", answer: "ikan" },
  { question: "Hewan pemakan rumput dan berkaki empat yang sering diperah?", answer: "sapi" },
  { question: "Hewan kecil bersayap yang bisa menyengat?", answer: "lebah" },
  { question: "Hewan licin yang tidak punya kaki dan hidup di sawah?", answer: "belut" },
  { question: "Hewan malam yang bisa melihat dalam gelap dan mengeong?", answer: "kucing" },
  { question: "Hewan kecil yang menggelinding saat merasa terancam?", answer: "trenggiling" },
  { question: "Hewan pemalas yang suka tidur di pohon?", answer: "kukang" },
  { question: "Hewan cerdas yang mirip manusia dan suka pisang?", answer: "monyet" },
  { question: "Hewan besar bertelinga panjang yang suka kacang?", answer: "gajah" },
  { question: "Hewan yang bisa berubah warna untuk berkamuflase?", answer: "bunglon" },
  { question: "Hewan yang bisa menyemburkan tinta saat terancam?", answer: "cumi-cumi" },
  { question: "Hewan yang sering dijadikan peliharaan dan pandai menirukan suara?", answer: "burung beo" },
  { question: "Hewan yang punya dua kaki panjang dan suka melompat?", answer: "kanguru" },
  { question: "Hewan yang dikenal sebagai raja hutan?", answer: "singa" },
  { question: "Hewan yang lambat dan memiliki cangkang di laut?", answer: "siput laut" },
  { question: "Hewan dengan duri di tubuhnya untuk pertahanan?", answer: "landak" },
  { question: "Hewan yang bisa terbang dan hidup di malam hari?", answer: "kelelawar" },
  { question: "Hewan yang suka madu dan tinggal di sarang?", answer: "lebah madu" },
  { question: "Hewan berbisa yang berderik ekornya?", answer: "ular derik" },
  { question: "Hewan air dengan bentuk tubuh seperti bintang?", answer: "bintang laut" },
  { question: "Hewan kecil penghisap darah?", answer: "nyamuk" },
  { question: "Hewan yang membawa rumahnya ke mana-mana?", answer: "siput" },
  { question: "Hewan berleher panjang yang suka makan daun?", answer: "jerapah" },
  { question: "Hewan yang bisa memotong kayu dengan giginya?", answer: "berang-berang" },
  { question: "Hewan penghisap darah yang hidup di air?", answer: "lintah" },
  { question: "Hewan kuat yang bisa menarik beban berat?", answer: "kerbau" },
  { question: "Hewan bertanduk yang suka memanjat gunung?", answer: "kambing" },
  { question: "Hewan langka berwarna hitam putih dari China?", answer: "panda" },
  { question: "Hewan kecil bersayap yang indah warnanya?", answer: "kupu-kupu" },
  { question: "Hewan yang suka tidur sepanjang musim dingin?", answer: "beruang" },
  { question: "Hewan berkaki banyak dan hidup di tanah?", answer: "kelabang" },
  { question: "Hewan air beracun yang cantik bentuknya?", answer: "ubur-ubur" },
  { question: "Hewan berkepala keras dan suka menanduk?", answer: "banteng" },
  { question: "Hewan yang sering dikaitkan dengan kecepatan tinggi?", answer: "cheetah" },
  { question: "Hewan yang hidup di laut dan bertulang lunak?", answer: "kerang" },
  { question: "Hewan pemakan daging dan bertaring tajam?", answer: "serigala" },
  { question: "Hewan dengan suara 'meee' dan suka rumput?", answer: "kambing" }
];

let current = 0;
let score = 0;
let lives = 3;

const qEl = document.getElementById('question');
const aEl = document.getElementById('answer');
const feedback = document.getElementById('feedback');
const scoreEl = document.getElementById('score');
const livesEl = document.getElementById('lives');
const confettiCanvas = document.getElementById('confetti-canvas');

function showQuestion() {
  if (current < questions.length) {
    qEl.textContent = questions[current].question;
  } else {
    qEl.textContent = "Kamu sudah menyelesaikan semua soal!";
  }
}

function checkAnswer() {
  if (aEl.value.toLowerCase().trim() === questions[current].answer.toLowerCase()) {
    score++;
    feedback.textContent = "Benar!";
    launchConfetti();
  } else {
    lives--;
    feedback.textContent = "Salah! Jawabannya: " + questions[current].answer;
  }
  scoreEl.textContent = score;
  livesEl.textContent = lives;
  aEl.value = "";
  current++;
  if (lives > 0) {
    showQuestion();
  } else {
    qEl.textContent = "Game Over!";
  }
}

function restartGame() {
  current = 0;
  score = 0;
  lives = 3;
  scoreEl.textContent = score;
  livesEl.textContent = lives;
  feedback.textContent = "";
  showQuestion();
}

function launchConfetti() {
  const duration = 3000;
  const end = Date.now() + duration;
  const colors = ['#bb0000', '#ffffff'];
  const confetti = window.confetti.create(confettiCanvas, {
    resize: true,
    useWorker: true
  });
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
  })();
}

window.onload = () => {
  showQuestion();
};
