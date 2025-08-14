const correctPassword = "encem";
const unlockBtn = document.getElementById('unlock-btn');
const lockScreen = document.getElementById('lock-screen');
const galleryContainer = document.getElementById('gallery-container');
const header = document.querySelector('header');

unlockBtn.addEventListener('click', () => {
    const enteredPassword = document.getElementById('password-input').value;
    if (enteredPassword === correctPassword) {
        lockScreen.style.display = "none";
        header.style.display = "block";
        galleryContainer.style.display = "grid";

        setTimeout(() => {
            galleryContainer.classList.add("show");
        }, 50);
    } else {
        alert("Wrong password!");
    }
});

// Scroll effect
const galleryItems = document.querySelectorAll('.gallery-item');
function handleScroll() {
    galleryItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            item.classList.add('show');
        } else {
            item.classList.remove('show');
        }
    });
}
window.addEventListener('scroll', handleScroll);

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const downloadBtn = document.getElementById('download-btn');

document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;

        downloadBtn.href = img.src; // buka link gambar
        downloadBtn.target = "_blank";
        downloadBtn.textContent = "Image Link";
    });
});

document.getElementById('close-lightbox').addEventListener('click', () => {
    lightbox.style.display = 'none';
});
