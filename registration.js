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

const submitBtn = document.querySelector('.registration__submit-btn');

submitBtn.addEventListener('click', async () => {
    const login = document.getElementById('login-login').value;
    const password = document.getElementById('login-password').value;
    const name = document.getElementById('login-name').value;
    const birthdate = document.getElementById('login-birthdate').value;
    const phone = document.getElementById('login-phone').value;
    const address = document.getElementById('login-address').value;
    const pasSeries = document.getElementById('login-passport-series').value;
    const pasNum = document.getElementById('login-passport-num').value;
    const pasIssueDate = document.getElementById('login-passport-issue-date').value;
    const pasExpiryDate = document.getElementById('login-passport-expiry-date').value;

    try {
        const url = 'http://localhost:5000/registration';
        const data = {
            login,
            password,
            name,
            role: '0',
            birthdate,
            phone,
            address,
            pasSeries,
            pasNum,
            pasIssueDate,
            pasExpiryDate
        };

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Server data error!');
        }

        localStorage.role = 0;
        localStorage.isAuthorized = true;

        window.location = '/';
        toastr.success(`Registration is done! Welcome!`);
    } catch (error) {
        console.log(error);
        toastr.error(error.message);
    }
})