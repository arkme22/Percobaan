// Target Keuangan
const goalForm = document.getElementById('goalForm');
const goalsContainer = document.getElementById('goalsContainer');

let goals = [];

// Tambah Target Keuangan
goalForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const goalTitle = document.getElementById('goalTitle').value;
    const targetAmount = parseFloat(document.getElementById('targetAmount').value);
    const deadline = document.getElementById('deadline').value;

    const goal = { goalTitle, targetAmount, deadline, progress: 0 };
    goals.push(goal);

    renderGoals();
    goalForm.reset();
});

// Render Target Keuangan
function renderGoals() {
    goalsContainer.innerHTML = '';
    goals.forEach((goal, index) => {
        const goalElement = document.createElement('div');
        goalElement.classList.add('goal-item');
        goalElement.innerHTML = `
            <h3>${goal.goalTitle}</h3>
            <p>Target: Rp ${goal.targetAmount}</p>
            <p>Deadline: ${goal.deadline}</p>
            <p>Progress: ${goal.progress}%</p>
            <button onclick="deleteGoal(${index})">Hapus</button>
        `;
        goalsContainer.appendChild(goalElement);
    });
}

// Hapus Target Keuangan
function deleteGoal(index) {
    goals.splice(index, 1);
    renderGoals();
}
