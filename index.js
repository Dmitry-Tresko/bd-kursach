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

const contactsBtn = document.querySelector('.contacts__btn');
const inputs = document.querySelectorAll('.contacts__input');
const textarea = document.querySelector('.contacts__area');

contactsBtn.addEventListener('click', () => {
    if (!textarea.value) toastr.warning('Your message is empty!')
    else {
        toastr.success(`${inputs[0].value}, your message has been sent!`);
        for (let i = 0; i < inputs.length; i++) inputs[i].value = '';
        textarea.value = '';
    }
}) 