let transactions = [];

// Fungsi untuk menyimpan data ke Local Storage
function saveToLocalStorage() {
    localStorage.setItem('transactions', JSON.stringify(transactions));
}

// Fungsi untuk memuat data dari Local Storage
function loadFromLocalStorage() {
    const storedTransactions = localStorage.getItem('transactions');
    if (storedTransactions) {
        transactions = JSON.parse(storedTransactions);
    }
}

// Fungsi untuk merender daftar transaksi
function renderTransactions() {
    const transactionsList = document.getElementById('transactionsList');
    transactionsList.innerHTML = '';

    if (transactions.length === 0) {
        transactionsList.innerHTML = '<p>Tidak ada transaksi.</p>';
        return;
    }

    transactions.forEach((transaction, index) => {
        const transactionItem = document.createElement('div');
        transactionItem.classList.add('transaction-item');
        transactionItem.innerHTML = `
            <p>${transaction.description} - ${transaction.category}</p>
            <p>${transaction.type === 'income' ? '+' : '-'}Rp ${transaction.amount}</p>
            <button onclick="deleteTransaction(${index})">Hapus</button>
        `;
        transactionsList.appendChild(transactionItem);
    });
}

// Fungsi untuk menghapus transaksi
function deleteTransaction(index) {
    transactions.splice(index, 1);
    saveToLocalStorage();
    renderTransactions();
}

// Event listener untuk form transaksi
document.getElementById('transactionForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const type = document.getElementById('type').value;
    const category = document.getElementById('category').value;

    if (!description || isNaN(amount) || !type || !category) {
        alert('Harap isi semua input dengan benar.');
        return;
    }

    const transaction = { description, amount, type, category };
    transactions.push(transaction);

    saveToLocalStorage();
    renderTransactions();
    e.target.reset();
});

// Muat data dari Local Storage saat halaman dimuat
loadFromLocalStorage();
renderTransactions();
