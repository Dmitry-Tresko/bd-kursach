const loginBtn = document.querySelector('#login-btn');
const searchBtn = document.querySelector('#search-btn');

const isAuthorized = localStorage.getItem('isAuthorized');
const role = localStorage.getItem('role');

if (isAuthorized) {
    loginBtn.innerHTML = 'Log out';
    loginBtn.setAttribute('href', "#");
    searchBtn.classList.remove('disabled');
    searchBtn.style.color = 'turqoise';
}

loginBtn.addEventListener('click', () => {
    localStorage.removeItem('isAuthorized');
    if (role) {
        localStorage.removeItem('role');
    }

    loginBtn.innerHTML = 'Sign in';
    searchBtn.classList.add('disabled');
    loginBtn.setAttribute('href', "/login.html");
})