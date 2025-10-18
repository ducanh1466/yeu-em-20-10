$(document).ready(function () {
  const envelope = $('#envelope');
  const openBtn = $("#openBtn");
  const resetBtn = $("#resetBtn");

  let currentPage = 1;
  const totalPages = 40;
  let isOpen = false;

  envelope.on('click', function () {
      if (isOpen) nextLyric();
  });

  openBtn.on('click', function () {
      envelope.removeClass("close").addClass("open");
      isOpen = true;
      openBtn.hide();
      resetBtn.show();
  });

  resetBtn.on('click', function () {
      envelope.removeClass("open").addClass("close");
      isOpen = false;
      setTimeout(function () {
          currentPage = 1;
          updateActivePage();
          resetBtn.hide();
          openBtn.show();
      }, 600);
  });

  function nextLyric() {
      currentPage = currentPage < totalPages ? currentPage + 1 : 1;
      updateActivePage();
  }

  function updateActivePage() {
      $(".lyric-page").removeClass("active");
      $("#page" + currentPage).addClass("active");
  }
});

const openBtn = document.getElementById("openBtn");
const resetBtn = document.getElementById("resetBtn");
const envelope = document.getElementById("envelope");
const audio = document.getElementById("sound");

let hasPlayed = false;

function playAudioOnce() {
    if (!hasPlayed) {
        audio.play().then(() => {
            hasPlayed = true;
        }).catch((e) => {
            console.log("Không thể phát nhạc:", e);
        });
    }
}

openBtn.addEventListener("click", function () {
    envelope.classList.remove("close");
    envelope.classList.add("open");
    openBtn.style.display = "none";
    resetBtn.style.display = "inline-block";
    playAudioOnce();
});

resetBtn.addEventListener("click", function () {
    envelope.classList.remove("open");
    envelope.classList.add("close");
    openBtn.style.display = "inline-block";
    resetBtn.style.display = "none";
    playAudioOnce();
});

// 🌹 Ảnh bay lãng mạn nâng cấp
document.addEventListener("DOMContentLoaded", function () {
  const photoContainer = document.querySelector(".floating-photos");
  const images = ["anh1.jpg", "anh2.jpg", "anh3.jpg", "anh4.jpg","amh5.jpg",
    "anh10.jpg","anh7.jpg","anh8.jpg","anh9.jpg","anh12.jpg","anh13.jpg",
    "anh11.jpg","anh14.jpg","anh15.jpg","anh16.jpg","anh17.jpg","anh18.jpg",
    "anh19.jpg","anh20.jpg","anh21.jpg","anh22.jpg","anh23.jpg","anh24.jpg",
    "anh25.jpg","anh26.jpg","anh27.jpg","anh28.jpg","anh29.jpg","anh30.jpg"]; // 🔸 Thay ảnh bạn muốn

  function createFloatingImage() {
    const img = document.createElement("img");
    img.src = images[Math.floor(Math.random() * images.length)];
    img.classList.add("float-photo");

    // Ngẫu nhiên vị trí, kích thước, tốc độ bay
    const left = Math.random() * 90; // vị trí ngang
    const size = 40 + Math.random() * 60; // kích thước
    const depth = ["depth1", "depth2", "depth3"][Math.floor(Math.random() * 3)];

    img.style.left = left + "%";
    img.style.width = size + "px";
    img.classList.add(depth);

    // Thêm hiệu ứng xoay nhẹ
    img.style.animationDelay = Math.random() * 3 + "s";
    photoContainer.appendChild(img);

    // Xóa ảnh sau khi bay hết
    setTimeout(() => img.remove(), 15000);
  }

  // Tạo ảnh bay liên tục
  setInterval(createFloatingImage, 800);
});

