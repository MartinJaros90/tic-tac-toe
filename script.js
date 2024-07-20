let fields = [
    null,
    null,
    'circle',
    null,
    null,
    'cross',
    null,
    null,
    null,
];


function init() {
    render();
}


function render() {
    let contentDiv = document.getElementById('content');
    let html = '<table>';
    
    let tableHTML = '<table>';
    for (let i = 0; i < 3; i++) {
        tableHTML += '<tr>';
        for (let j = 0; j < 3; j++) {
            const index = i * 3 + j;
            let symbol = '';
            if (fields[index] === 'circle') {
                symbol = 'o';
            } else if (fields[index] === 'cross') {
                symbol = 'x';
            }
            tableHTML += `<td>${symbol}</td>`;
        }
        tableHTML += '</tr>';
    }
    tableHTML += '</table>';

    contentDiv.innerHTML = tableHTML;
}
    
