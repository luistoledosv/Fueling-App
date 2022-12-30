const registerForm = document.querySelector("#registerForm");
registerForm.addEventListener("submit", function (event) {
    event.preventDefault(); // evita que a página recarregue ao submeter o formulário

    const name = registerForm.elements.name.value;
    const email = registerForm.elements.email.value;
    const password = registerForm.elements.password.value;

    const user = {
        name: name,
        email: email,
        password: password
    };

    // adiciona o usuário ao localStorage
    localStorage.setItem("user", JSON.stringify(user));

    function cadastrar() {
        // código para cadastrar o usuário
        alert('Usuário cadastrado com sucesso!');
    }

});