function showRegister() {
    document.getElementById("login").classList.add("hidden");
    document.getElementById("register").classList.remove("hidden");
}

function showLogin() {
    document.getElementById("register").classList.add("hidden");
    document.getElementById("login").classList.remove("hidden");
}

function register() {
    let user = document.getElementById("regUser").value;
    let pass = document.getElementById("regPass").value;
    let profile = document.getElementById("regProfile").value;

    if(user === "" || pass === "" || profile === "") {
        alert("Preencha todos os campos e escolha um perfil");
        return;
    }

    localStorage.setItem("user", user);
    localStorage.setItem("pass", pass);
    localStorage.setItem("profile", profile);

    alert("Cadastro realizado!");
    showLogin();
}

function login() {
    let user = document.getElementById("loginUser").value;
    let pass = document.getElementById("loginPass").value;

    let savedUser = localStorage.getItem("user");
    let savedPass = localStorage.getItem("pass");
    let savedProfile = localStorage.getItem("profile");

    if(user === savedUser && pass === savedPass) {
        document.getElementById("login").classList.add("hidden");
        document.getElementById("home").classList.remove("hidden");
        document.getElementById("userProfile").innerText = "Perfil: " + savedProfile;
    } else {
        alert("Usuário ou senha incorretos");
    }
}

function logout() {
    document.getElementById("home").classList.add("hidden");
    document.getElementById("login").classList.remove("hidden");
}

function openWhatsApp() {
    window.open("https://wa.me/5521982859872", "_blank");
      }
