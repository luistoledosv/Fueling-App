// Adicione o seu JavaScript aqui
const form = document.getElementById('fuelingForm');
const table = document.getElementById('fuelingsTable');

let fuelings = JSON.parse(localStorage.getItem('fuelings')) || [];


form.addEventListener('submit', event => {
    event.preventDefault();
    const date = form.elements.date.value;
    const tripA = form.elements.tripA.value;
    const fuelAmount = form.elements.fuelAmount.value;
    const cost = form.elements.cost.value;
    const costAmount = (cost * fuelAmount).toFixed(2);
    const fuelLocation = form.elements.fuelLocation.value;
    const consumption = (tripA / fuelAmount).toFixed(2);
    fuelings.push({ date, tripA, fuelAmount, costAmount, fuelLocation, consumption });
    localStorage.setItem('fuelings', JSON.stringify(fuelings));
    updateTable();
});



function updateTable() {
    table.tBodies[0].innerHTML = '';
    fuelings.forEach(fueling => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${fueling.date}</td>
          <td>${fueling.tripA} km</td>
          <td>${fueling.fuelAmount}L</td>
          <td>R$ ${fueling.costAmount}</td>
          <td>${fueling.fuelLocation}</td>
          <td>${fueling.consumption} km/l</td>
        `;
        table.tBodies[0].appendChild(row);
    });
}


// Logout do usuário
function logout() {
    localStorage.removeItem('isAuthenticated');
    // Redirecione o usuário para a página de login
    window.location.href = '/Users/luistoledo/Desktop/ChatGPT Projetos/Consumo de Combustivel v3/index.html';
}
document.querySelector('#logout-button').addEventListener('click', logout);



updateTable();