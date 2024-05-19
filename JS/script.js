var swiper = new Swiper(".mySwiper-1", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});

var swiper = new Swiper(".mySwiper-2", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    loopFillGroupWithBlank:true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints : {
        0: {
            slidesPerView:1,
        },
        520: {
            slidesPerView:2,
        },
        950: {
            slidesPerView:3,
        },
    }
});

let tabInputs = document.querySelectorAll(".tabInput");

tabInputs.forEach(function(input) {  
    input.addEventListener('change', function() {
        let id = input.ariaValueMax;
        let thisSwiper = document.getElementById('swiper' + id);
        thisSwiper.swiper.update();
    })
});

function showInfo(sede) {
    var infoDiv = document.getElementById("info");
    var mapa = document.getElementById("mapa");
    var direccion, horario, telefono;

    switch (sede) {
        case 1:
            direccion = "Dirección: Av. Los Ángeles 602 Urb, Comas 15314";
            horario = "Horario de atención: Lunes a Domingo, 10:00 a.m. - 10:00 p.m.";
            telefono = "Teléfono: 123456789";
            break;
        case 2:
            direccion = "Dirección: Av. Alfredo Mendiola 1400, Independencia 15311";
            horario = "Horario de atención: Lunes a Domingo, 10:00 a.m. - 10:00 p.m.";
            telefono = "Teléfono: 987654321";
            break;
        case 3:
            direccion = "Dirección: Av. Garcilaso de la Vega 1337, Lima 15001";
            horario = "Horario de atención: Lunes a Domingo, 10:00 a.m. - 10:00 p.m.";
            telefono = "Teléfono: 456789123";
            break;
        case 4:
            direccion = "Dirección: Av. Brasil 702, Breña 15083";
            horario = "Horario de atención: Lunes a Domingo, 10:00 a.m. - 10:00 p.m.";
            telefono = "Teléfono: 937436628";
            break;
        case 5:
            direccion = "Dirección: Av. de la Marina 2000, San Miguel 15088";
            horario = "Horario de atención: Lunes a Domingo, 10:00 a.m. - 10:00 p.m.";
            telefono = "Teléfono: 918726312";
            break;
        case 6:
            direccion = "Dirección: Av. Javier Prado Este 4200, Santiago de Surco 15023";
            horario = "Horario de atención: Lunes a Domingo, 10:00 a.m. - 10:00 p.m.";
            telefono = "Teléfono: 900893023";
            break;
        default:
            direccion = "";
            horario = "";
            telefono = "";
            break;
    }

    infoDiv.innerHTML = "<p>" + direccion + "</p><p>" + horario + "</p><p>" + telefono + "</p>";
}

//Intranet

document.getElementById('register-btn').addEventListener('click', function() {
    document.querySelector('.intranet-title').textContent = 'Registrar';
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('register-form').classList.remove('hidden');
});

document.getElementById('back-btn').addEventListener('click', function() {
    document.querySelector('.intranet-title').textContent = 'Iniciar Sesión';
    document.getElementById('register-form').classList.add('hidden');
    document.getElementById('login-form').classList.remove('hidden');
});

document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const address = document.getElementById('address').value;
    const district = document.getElementById('district').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden');
        return;
    }

    const user = {
        firstName,
        lastName,
        address,
        district,
        email,
        password
    };

    localStorage.setItem(email, JSON.stringify(user));
    alert('Usuario registrado con éxito');

    // Limpiar los campos del formulario de registro
    document.getElementById('register-form').reset();

    document.querySelector('.intranet-title').textContent = 'Iniciar Sesión';
    document.getElementById('register-form').classList.add('hidden');
    document.getElementById('login-form').classList.remove('hidden');
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const storedUser = localStorage.getItem(email);
    if (storedUser) {
        const user = JSON.parse(storedUser);
        if (user.password === password) {
            alert('Inicio de sesión exitoso');
        } else {
            alert('Contraseña incorrecta');
        }
    } else {
        alert('Usuario no registrado');
    }

    // Limpiar los campos del formulario de inicio de sesión
    document.getElementById('login-form').reset();
});