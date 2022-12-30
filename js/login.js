
const form = document.querySelector("#loginForm");
form.addEventListener("submit", event => {
    event.preventDefault();

    const email = form.elements.email.value;
    const password = form.elements.password.value;

    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.email === email && storedUser.password === password) {
        alert("Bem-vindo de volta!");
        window.location.href = '/Users/luistoledo/Desktop/ChatGPT Projetos/Consumo de Combustivel v3/main.html';
    } else {
        alert("Email ou senha incorretos.");
    }
});
