
const form = document.querySelector(".loginForm");
form.addEventListener("submit", event => {
    event.preventDefault();

    const email = form.elements.email.value;
    const password = form.elements.password.value;

    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.email === email && storedUser.password === password) {
        const okMessage = document.getElementById('okMessage');
        okMessage.style.display = 'flex';

        // 2seg para expirar a mensagem de sucesso
        setTimeout(function () {
            mensagemSucesso.style.display = 'none';
        }, 2000);

        // 2.5seg para redirecionar o usuário 
        setTimeout(function () {
            window.location.href = '/Users/luistoledo/Desktop/ChatGPT Projetos/Consumo de Combustivel v3/main.html';
        }, 2500);

    } else {
        const errorMessage = document.getElementById('errorMessage');

        // Quando o usuário ou senha estão incorretos, remova o atributo "display: none"
        // da mensagem de erro para exibi-la
        errorMessage.style.display = 'flex';
    }
});
