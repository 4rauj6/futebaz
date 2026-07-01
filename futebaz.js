const openTeamCreator = document.getElementById('open-team-modal');
const closeTeamCreator = document.getElementById('close-team-modal');
const getForm = document.querySelector('.team-creator-form');

openTeamCreator.addEventListener('click', () => {
    const modalBody = document.querySelector('.create-team-modal');
    const bodyState = document.body;

    modalBody.classList.add('active');
    bodyState.style.backgroundColor = 'grey'
});

closeTeamCreator.addEventListener('click', (e) => {
    e.preventDefault();

    const bodyState = document.body;
    const modalBody = document.querySelector('.create-team-modal');

    bodyState.style.backgroundColor = '';
    modalBody.classList.remove('active');
});

getForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const getTeamName = document.getElementById('team-name').value.trim();
    const getTeamColor = document.getElementById('team-color').value;
    const getPlayerName = document.getElementById('team-players').value.trim();
    const getPlayerPos = document.getElementById('player-position').value;

    const errorP = document.getElementById('error');

    const tableBody = document.getElementById('team-info-body');


    try {
        if (!tableBody) {
            throw new Error('Houve um erro no processamento. Por favor tente novamente.');
        }

        const newTableRow = document.createElement('tr');

        newTableRow.innerHTML = `
            <td>${getPlayerName}</td>
            <td>${getPlayerPos}</td>
            <td>${getTeamName}</td>
            <td>${getTeamColor}</td>      
        `;

        tableBody.appendChild(newTableRow);
    } catch (error) {
        if(errorP) {
            errorP.textContent = `${error.message}`;
            errorP.style.color = 'red';
        }
    }
});

