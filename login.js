import 'core-js/stable';
import 'regenerator-runtime/runtime';
import toastr from 'toastr';

toastr.options = {
    "closeButton": true,
    "debug": true,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-bottom-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "500",
    "hideDuration": "2000",
    "timeOut": "4000",
    "extendedTimeOut": "2000",
    "showEasing": "linear",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}

const btn = document.querySelector('.login__submit-btn');

btn.addEventListener('click', async () => {
    const login = document.getElementById('login-name').value;
    const password = document.getElementById('login-password').value;

    try {
        const url = 'http://localhost:5000/login';
        const data = {
            login: login,
            password: password
        };

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        });


        if (!response.ok) {
            throw new Error('Invalid login or password!');
        }

        const role = await response.json();
        localStorage.role = role;
        localStorage.isAuthorized = true;

        window.location = '/';
        toastr.success(`Welcome home!`);
    } catch (e) {
        toastr.error(e.message);
    }
})