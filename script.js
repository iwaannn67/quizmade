// ==========================================
// DATA SOAL
// ==========================================

const soal = [

    {
        pertanyaan: "Fenomena ketika Bulan terlihat melintas di depan Venus dari sudut pandang pengamat di Bumi disebut...",
        pilihan: [
            "Gerhana Venus",
            "Okultasi",
            "Konjungsi",
            "Transit"
        ],
        jawaban: 1
    },

    {
        pertanyaan: "Siapa yang dilantik Presiden Prabowo sebagai Menteri Keuangan pada 14 September 2026?",
        pilihan: [
            "Bahlil Lahadalia",
            "Suahasil Nazara",
            "Sri Mulyani",
            "Sugiono"
        ],
        jawaban: 1
    },

    {
        pertanyaan: "Planet yang dikenal sebagai Planet Merah adalah...",
        pilihan: [
            "Venus",
            "Mars",
            "Jupiter",
            "Merkurius"
        ],
        jawaban: 1
    },

    {
        pertanyaan: "Ketika seseorang membuat judul yang sengaja dibuat berlebihan agar orang tertarik mengekliknya, istilah yang paling tepat adalah...",
        pilihan: [
            "Clickbait",
            "Bookmark",
            "Firewall",
            "Streaming"
        ],
        jawaban: 0
    },

    {
        pertanyaan: "Perangkat yang digunakan untuk menentukan lokasi berdasarkan sinyal dari satelit adalah...",
        pilihan: [
            "NFC",
            "GPS",
            "RAM",
            "USB"
        ],
        jawaban: 1
    },

    {
        pertanyaan: "Jalur LRT Jakarta yang diresmikan Presiden Prabowo pada September 2026 menghubungkan...",
        pilihan: [
            "Kelapa Gading - Manggarai",
            "Bekasi - Tanah Abang",
            "Depok - Jakarta Kota",
            "Bogor - Manggarai"
        ],
        jawaban: 0
    },

    {
        pertanyaan: "Jika sebuah video terlihat meyakinkan tetapi dibuat atau dimanipulasi menggunakan teknologi AI, istilah yang sering digunakan adalah...",
        pilihan: [
            "Deepfake",
            "Screenshot",
            "Podcast",
            "Thumbnail"
        ],
        jawaban: 0
    },

    {
        pertanyaan: "Apa fungsi utama QR Code pada pembayaran digital?",
        pilihan: [
            "Memperbesar sinyal internet",
            "Menyimpan dan membaca informasi secara cepat",
            "Mengisi baterai ponsel",
            "Meningkatkan kualitas kamera"
        ],
        jawaban: 1
    },

    {
        pertanyaan: "Berapa bonus yang dijanjikan Presiden Prabowo bagi atlet Indonesia yang meraih medali emas di Asian Games 2026?",
        pilihan: [
            "Rp1 miliar",
            "Rp2 miliar",
            "Rp3 miliar",
            "Rp5 miliar"
        ],
        jawaban: 2
    },

    {
        pertanyaan: "Benda langit yang mengelilingi sebuah planet disebut...",
        pilihan: [
            "Asteroid",
            "Komet",
            "Satelit",
            "Meteor"
        ],
        jawaban: 2
    },

    {
        pertanyaan: "Dalam keamanan akun, kode OTP seharusnya...",
        pilihan: [
            "Dibagikan kepada teman",
            "Diposting di media sosial",
            "Dirahasiakan",
            "Disimpan di kolom komentar"
        ],
        jawaban: 2
    },

    {
        pertanyaan: "Pada 1 Oktober 2026, Presiden Prabowo memimpin upacara peringatan...",
        pilihan: [
            "Hari Kemerdekaan",
            "Hari Kesaktian Pancasila",
            "Hari Kebangkitan Nasional",
            "Hari Sumpah Pemuda"
        ],
        jawaban: 1
    },

    {
        pertanyaan: "Apa nama satuan yang umum digunakan untuk mengukur kapasitas penyimpanan data?",
        pilihan: [
            "Gigabyte",
            "Gigawatt",
            "Gigahertz",
            "Gigapascal"
        ],
        jawaban: 0
    },

    {
        pertanyaan: "Jika sebuah informasi di media sosial belum dikonfirmasi oleh sumber resmi, tindakan yang paling tepat adalah...",
        pilihan: [
            "Langsung membagikannya",
            "Menganggapnya pasti benar",
            "Memeriksa sumber dan konteksnya",
            "Menghapus semua media sosial"
        ],
        jawaban: 2
    },

    {
        pertanyaan: "Setelah memimpin upacara Hari Kesaktian Pancasila pada 1 Oktober 2026, Presiden Prabowo meresmikan...",
        pilihan: [
            "Museum Nasional Indonesia",
            "Museum Kesaktian Pancasila",
            "Museum Sumpah Pemuda",
            "Museum Proklamasi"
        ],
        jawaban: 1
    }

];

// ==========================================
// VARIABEL GAME
// ==========================================

let nomorSoal = 0;
let skor = 0;


// ==========================================
// ELEMENT HTML
// ==========================================

const gameContainer = document.querySelector(".game-container");

const mulaiBtn = document.getElementById("mulaiBtn");


// ==========================================
// MULAI GAME
// ==========================================

mulaiBtn.addEventListener("click", function () {

    nomorSoal = 0;

    skor = 0;

    tampilkanSoal();

});


// ==========================================
// TAMPILKAN SOAL
// ==========================================

function tampilkanSoal() {

    const dataSoal = soal[nomorSoal];

    const progress =
        ((nomorSoal + 1) / soal.length) * 100;


    gameContainer.innerHTML = `

        <div class="game-header">

            <p class="nomor-soal">
                Soal ${nomorSoal + 1} / ${soal.length}
            </p>

            <p class="skor-game">
                Skor ${skor}
            </p>

        </div>


        <div class="progress-container">

            <div
                class="progress-bar"
                style="width: ${progress}%"
            ></div>

        </div>


        <h2 class="pertanyaan">
            ${dataSoal.pertanyaan}
        </h2>


        <div class="pilihan">

            <button class="jawaban" data-jawaban="0">
                A. ${dataSoal.pilihan[0]}
            </button>

            <button class="jawaban" data-jawaban="1">
                B. ${dataSoal.pilihan[1]}
            </button>

            <button class="jawaban" data-jawaban="2">
                C. ${dataSoal.pilihan[2]}
            </button>

            <button class="jawaban" data-jawaban="3">
                D. ${dataSoal.pilihan[3]}
            </button>

        </div>


        <p class="feedback"></p>

    `;


    const tombolJawaban =
        document.querySelectorAll(".jawaban");


    tombolJawaban.forEach(function (tombol) {

        tombol.addEventListener("click", function () {

            const jawabanDipilih =
                Number(
                    tombol.getAttribute("data-jawaban")
                );


            cekJawaban(
                jawabanDipilih,
                tombol,
                tombolJawaban
            );

        });

    });

}


// ==========================================
// CEK JAWABAN
// ==========================================

function cekJawaban(
    jawabanDipilih,
    tombolDipilih,
    semuaTombol
) {

    const jawabanBenar =
        soal[nomorSoal].jawaban;


    // Mencegah klik berkali-kali

    semuaTombol.forEach(function (tombol) {

        tombol.disabled = true;

    });


    const feedback =
        document.querySelector(".feedback");


    if (jawabanDipilih === jawabanBenar) {

        skor += 10;

        tombolDipilih.classList.add("benar");

        feedback.textContent =
            "Benar! +10 poin";

        feedback.style.color = "#16a34a";

    } else {

        tombolDipilih.classList.add("salah");

        feedback.textContent =
            "Kurang tepat.";

        feedback.style.color = "#dc2626";


        // Tampilkan jawaban yang benar

        semuaTombol.forEach(function (tombol) {

            const nomorJawaban =
                Number(
                    tombol.getAttribute("data-jawaban")
                );


            if (nomorJawaban === jawabanBenar) {

                tombol.classList.add("benar");

            }

        });

    }


    // Tunggu sebentar sebelum pindah

    setTimeout(function () {

        nomorSoal++;


        if (nomorSoal < soal.length) {

            tampilkanSoal();

        } else {

            tampilkanHasil();

        }

    }, 900);

}


// ==========================================
// HASIL AKHIR
// ==========================================

function tampilkanHasil() {

    const totalSkor =
        soal.length * 10;


    gameContainer.innerHTML = `

        <div style="text-align: center;">

            <p style="
                color: #6b7280;
                font-size: 14px;
                margin-bottom: 8px;
            ">
                GAME SELESAI
            </p>


            <h1>
                Hasil Kamu
            </h1>


            <h2 class="skor-akhir">
                ${skor}
            </h2>


            <p class="deskripsi">
                dari ${totalSkor} poin
            </p>


            <button id="mainLagiBtn">
                Main Lagi
            </button>

        </div>

    `;


    const mainLagiBtn =
        document.getElementById("mainLagiBtn");


    mainLagiBtn.addEventListener(
        "click",
        function () {

            nomorSoal = 0;

            skor = 0;

            tampilkanSoal();

        }
    );

/* ==================================
   QUIZMADE AUDIO SYSTEM
   Musik background + sound effects
================================== */

(() => {
    // Mencegah sistem audio dipasang dua kali
    if (window.quizMadeAudioLoaded) return;
    window.quizMadeAudioLoaded = true;

    let audioContext;
    let musicTimer = null;
    let musicIndex = 0;
    let musicOn = false;

    function getAudioContext() {
        if (!audioContext) {
            const AudioContextClass =
                window.AudioContext || window.webkitAudioContext;

            if (!AudioContextClass) return null;

            audioContext = new AudioContextClass();
        }

        if (audioContext.state === "suspended") {
            audioContext.resume();
        }

        return audioContext;
    }

    // Membuat satu nada dengan volume yang lembut
    function playTone(
        frequency,
        duration = 0.2,
        volume = 0.04,
        type = "sine"
    ) {
        const ctx = getAudioContext();
        if (!ctx) return;

        const oscillator = ctx.createOscillator();
        const gain = ctx.createGain();

        oscillator.type = type;
        oscillator.frequency.value = frequency;

        gain.gain.setValueAtTime(0.001, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(
            volume,
            ctx.currentTime + 0.025
        );
        gain.gain.exponentialRampToValueAtTime(
            0.001,
            ctx.currentTime + duration
        );

        oscillator.connect(gain);
        gain.connect(ctx.destination);

        oscillator.start();
        oscillator.stop(ctx.currentTime + duration + 0.03);
    }

    // Sound effect tombol
    function clickSound() {
        playTone(650, 0.07, 0.025, "sine");
    }

    // Sound effect jawaban benar
    function correctSound() {
        playTone(523.25, 0.16, 0.045, "sine");

        setTimeout(() => {
            playTone(659.25, 0.16, 0.045, "sine");
        }, 100);

        setTimeout(() => {
            playTone(783.99, 0.28, 0.05, "sine");
        }, 200);
    }

    // Sound effect jawaban salah
    function wrongSound() {
        playTone(300, 0.20, 0.035, "triangle");

        setTimeout(() => {
            playTone(220, 0.28, 0.035, "triangle");
        }, 140);
    }

    // Musik background santai
    const musicChords = [
        [261.63, 329.63, 392.00],
        [220.00, 261.63, 329.63],
        [174.61, 220.00, 261.63],
        [196.00, 246.94, 293.66]
    ];

    function playMusicChord() {
        if (!musicOn) return;

        const chord = musicChords[musicIndex % musicChords.length];

        chord.forEach((frequency, index) => {
            setTimeout(() => {
                if (musicOn) {
                    playTone(frequency, 1.7, 0.009, "sine");
                }
            }, index * 100);
        });

        // Nada melodi ringan
        const melody = [523.25, 493.88, 440.00, 392.00];

        playTone(melody[musicIndex % melody.length], 0.55, 0.012);

        musicIndex++;
    }

    function startMusic() {
        const ctx = getAudioContext();
        if (!ctx) return;

        musicOn = true;
        playMusicChord();

        if (musicTimer) clearInterval(musicTimer);

        musicTimer = setInterval(playMusicChord, 1900);

        musicButton.textContent = "♫ Musik: ON";
        musicButton.style.background = "#29372F";
    }

    function stopMusic() {
        musicOn = false;

        if (musicTimer) {
            clearInterval(musicTimer);
            musicTimer = null;
        }

        musicButton.textContent = "♫ Musik: OFF";
        musicButton.style.background = "#718675";
    }

    // Tombol musik otomatis dibuat oleh JavaScript
    const musicButton = document.createElement("button");

    musicButton.id = "quizMadeMusicButton";
    musicButton.type = "button";
    musicButton.textContent = "♫ Musik: OFF";

    Object.assign(musicButton.style, {
        position: "fixed",
        right: "16px",
        bottom: "16px",
        zIndex: "9999",
        padding: "12px 16px",
        border: "none",
        borderRadius: "30px",
        background: "#718675",
        color: "#ffffff",
        fontSize: "14px",
        fontWeight: "bold",
        boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
        cursor: "pointer"
    });

    document.body.appendChild(musicButton);

    musicButton.addEventListener("click", () => {
        if (musicOn) {
            stopMusic();
        } else {
            startMusic();
        }
    });

    // Sound effect tombol dan pilihan jawaban
    document.addEventListener("click", event => {
        const button = event.target.closest("button");

        if (!button || button === musicButton) return;

        clickSound();

        // Memeriksa jawaban setelah kode kuis memproses pilihan
        if (button.matches(".jawaban")) {
            setTimeout(() => {
                if (
                    button.classList.contains("benar") ||
                    button.querySelector(".benar")
                ) {
                    correctSound();
                } else if (
                    button.classList.contains("salah") ||
                    button.querySelector(".salah")
                ) {
                    wrongSound();
                }
            }, 150);
        }
    }, true);

})();

