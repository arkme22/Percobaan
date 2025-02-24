// Modal Pengaturan
const settingsModal = document.getElementById('settingsModal');
const openSettings = document.getElementById('openSettings');
const closeSettings = document.getElementById('closeSettings');
const darkModeToggle = document.getElementById('darkMode');

// Buka Modal
openSettings.addEventListener('click', function (e) {
    e.preventDefault();
    settingsModal.style.display = 'block';
});

// Tutup Modal
closeSettings.addEventListener('click', function () {
    settingsModal.style.display = 'none';
});

window.addEventListener('click', function (e) {
    if (e.target === settingsModal) {
        settingsModal.style.display = 'none';
    }
});

// Mode Gelap
darkModeToggle.addEventListener('change', function () {
    if (darkModeToggle.checked) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
});
