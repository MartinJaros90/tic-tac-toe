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
                symbol = generateCircleSVG();
            } else if (fields[index] === 'cross') {
                symbol = generateXCrossSVG();
            }
            tableHTML += `<td>${symbol}</td>`;
        }
        tableHTML += '</tr>';
    }
    tableHTML += '</table>';

    contentDiv.innerHTML = tableHTML;
}
    

function generateCircleSVG() {
    const radius = 30;
    const circumference = 2 * Math.PI * radius;

    return `
<svg width="70" height="70" viewBox="0 0 70 70" xmlns="http://www.w3.org/2000/svg">
    <style>
        .circle {
            stroke-dasharray: ${circumference};
            stroke-dashoffset: ${circumference};
            animation: fillCircle 1s forwards;
        }
        @keyframes fillCircle {
            to {
                stroke-dashoffset: 0;
            }
        }
    </style>
    <circle cx="35" cy="35" r="${radius}" stroke="#00B0EF" stroke-width="5" fill="none" class="circle"/>
</svg>`;
}


function generateXCrossSVG() {
    const diagonalLength = Math.sqrt(Math.pow(70, 2) + Math.pow(70, 2));

    return `
<svg width="70" height="70" viewBox="0 0 70 70" xmlns="http://www.w3.org/2000/svg">
    <style>
        .line {
            stroke-dasharray: ${diagonalLength};
            stroke-dashoffset: ${diagonalLength};
            animation: drawLine 1s forwards;
        }
        @keyframes drawLine {
            to {
                stroke-dashoffset: 0;
            }
        }
    </style>
    <line x1="15" y1="15" x2="55" y2="55" stroke="#FFC000" stroke-width="5" class="line"/>
    <line x1="55" y1="15" x2="15" y2="55" stroke="#FFC000" stroke-width="5" class="line"/>
</svg>`;
}






