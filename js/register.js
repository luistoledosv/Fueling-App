const registerForm = document.querySelector(".registerForm");
registerForm.addEventListener("submit", function (event) {
    event.preventDefault(); // evita que a página recarregue ao submeter o formulário

    const name = registerForm.elements.name.value;
    const email = registerForm.elements.email.value;
    const password = registerForm.elements.password.value;

    // verifica se todos os campos foram preenchidos
    if (!name || !email || !password) {
        const errorMessage = document.getElementById('errorMessage'); // busca o alerta de error
        errorMessage.style.display = 'flex'; // faz o alerta aparecer
        return; // interrompe o script
    }

    const user = {
        name: name,
        email: email,
        password: password
    };

    // adiciona o usuário ao localStorage
    localStorage.setItem("user", JSON.stringify(user));

    // exibe a mensagem de sucesso
    const okMessage = document.getElementById('okMessage'); // busca o alerta de sucesso
    okMessage.style.display = 'flex'; // faz o alerta aparecer

    // 1.5seg para redirecionar o usuário 
    setTimeout(function () {
        window.location.href = '/Users/luistoledo/Desktop/ChatGPT Projetos/Consumo de Combustivel v3/index.html';
    }, 1500);
});
