export function createTable(arr, fields) {
    const table = document.createElement('table');
    const outputBlock = document.querySelector('.search__output-result');
    const container = document.querySelector('.search__result-table');

    outputBlock.style.display = 'flex';
    container.style.display = 'block';
    container.innerHTML = '';
    container.appendChild(table);

    const tHead = document.createElement('thead');
    const tBody = document.createElement('tbody');
    table.appendChild(tHead);
    table.appendChild(tBody);

    fields.forEach(fieldName => {
        const tD = document.createElement('td');
        tD.innerText = fieldName;
        tHead.appendChild(tD);
    })

    arr.forEach(item => {
        const tRow = document.createElement('tr');
        tBody.appendChild(tRow);

        for (let key in item) {
            const tCell = document.createElement('td');
            tRow.appendChild(tCell);
            tCell.innerText = item[key];
        }
    })
}