import 'core-js/stable';
import 'regenerator-runtime/runtime';
import toastr from 'toastr';
import { createTable } from './createTable';

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

const getInfoBtns = document.querySelectorAll('.search__info-btn');

const getToursByTypeSelect = document.querySelector('#tour-type-selection');
const getToursByFoodSelect = document.querySelector('#tour-food-selection');
const getToursByTourOperatorSelect = document.querySelector('#tour-to-selection');

const deleteBtns = document.querySelectorAll('.search__delete-btn');
const addBtns = document.querySelectorAll('.search__add-btn');

const managerOptions = document.querySelector('.search__manager-options');
const role = localStorage.getItem('role');

if (role == "1") {
    managerOptions.style.display = 'flex';
}

const xhr = new XMLHttpRequest();

const tourOperators = {
    1: 'TEZ Tour',
    2: 'Pegas',
    3: 'Coral Travel',
    4: 'AML Travel',
    5: 'Acu Travel',
    6: 'Turistik',
    7: 'Avalon Tour',
    8: 'ANEX Tour',
    9: 'AeroBelServis',
    10: 'Eurotrips'
};

getInfoBtns.forEach(btn => {
    btn.addEventListener('click', (event) => {
        const url = `http://localhost:5000/${event.target.dataset.infoType}`;

        xhr.open('GET', url, true);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);

                let fields = [];
                data.fields.forEach(item => {
                    fields.push(item.name);
                });
                createTable(data.rows, fields);
            }
        };
        xhr.send();
    })
})

getToursByTypeSelect.addEventListener('change', () => {
    const tourTypeSelection = getToursByTypeSelect.value;

    const url = `http://localhost:5000/tours/${tourTypeSelection}`;

    xhr.open('GET', url, true);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            const fields = ['Tour ID', 'Type', 'Country', 'Resort', 'Hotel', 'Tour Operator', 'Visa +/-', 'Insurance +/-', 'Food +/-', 'Price', 'Tour operator ID', 'Transport type ID'];
            createTable(data.rows, fields);
        }
    };
    xhr.send();
})

getToursByFoodSelect.addEventListener('change', () => {
    const tourFoodSelection = getToursByFoodSelect.value;

    const url = `http://localhost:5000/tours/food/${tourFoodSelection}`;

    xhr.open('GET', url, true);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            const fields = ['Tour ID', 'Type', 'Country', 'Resort', 'Hotel', 'Tour Operator', 'Visa +/-', 'Insurance +/-', 'Food +/-', 'Price', 'Tour operator ID', 'Transport type ID'];
            createTable(data.rows, fields);
        }
    };
    xhr.send();
})

getToursByTourOperatorSelect.addEventListener('change', () => {
    const tourOperatorSelection = getToursByTourOperatorSelect.value;

    let tourOperatorID;
    for (let key in tourOperators) {
        if (tourOperators[key] === tourOperatorSelection) {
            tourOperatorID = key;
        }
    }

    const url = `http://localhost:5000/tours/id/${tourOperatorID}`;

    xhr.open('GET', url, true);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            const fields = ['Tour ID', 'Type', 'Country', 'Resort', 'Hotel', 'Tour Operator', 'Visa +/-', 'Insurance +/-', 'Food +/-', 'Price', 'Tour operator ID', 'Transport type ID'];
            createTable(data.rows, fields);
        }
    };
    xhr.send();
})

deleteBtns.forEach(btn => {
    btn.addEventListener('click', async (event) => {
        const id = prompt(`Enter ID of instance of ${event.target.dataset.instance}:`, 1);
        if (id) {
            const isOk = confirm('Are you sure that you want to delete selected subject?');

            if (isOk) {
                const url = `http://localhost:5000/${event.target.dataset.instance}/${id}`;

                try {
                    const data = await fetch(url, {
                        method: 'DELETE'
                    })

                    if (data.status === 200) {
                        toastr.success(`Instance successfully deleted!`);
                    } else {
                        toastr.error('Error while deleting data!');
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        }
    })
})

addBtns.forEach(btn => {
    btn.addEventListener('click', async (event) => {
        const id = prompt(`Enter ID of instance of ${event.target.dataset.instance}:`, 1);
        if (id) {
            const isOk = confirm('Are you sure that you want to delete selected subject?');

            if (isOk) {
                const url = `http://localhost:5000/${event.target.dataset.instance}/${id}`;

                try {
                    const data = await fetch(url, {
                        method: 'DELETE'
                    })

                    if (data.status === 200) {
                        toastr.success(`Instance successfully deleted!`);
                    } else {
                        toastr.error('Error while deleting data!');
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        }

    })
})