// Muat data dari Local Storage saat halaman dimuat
window.addEventListener('load', function () {
    loadFromLocalStorage(); // Muat data dari Local Storage
    updateDashboard(); // Perbarui dashboard dengan data yang dimuat
    renderTransactions(); // Tampilkan daftar transaksi
    renderGoals(); // Tampilkan daftar target keuangan
});
