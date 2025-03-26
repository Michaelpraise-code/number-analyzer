function analyzeNumber(event) {
    event.preventDefault(); // Prevents form from submitting traditionally
    
    const input = document.getElementById('numInput');
    const number = Number(input.value); // Converts to number type
    const oddEvenResult = document.getElementById('oddEvenResult');
    const additionalInfo = document.getElementById('additionalInfo');
    const output = document.getElementById('output');

    // Reset previous styles
    output.className = 'output';

    // Check odd/even and additional properties
    if (number % 2 === 0) {
        oddEvenResult.textContent = `${number} is Even`;
        output.classList.add('even');
    } else {
        oddEvenResult.textContent = `${number} is Odd`;
        output.classList.add('odd');
    }

    // Additional information
    let info = [];
    if (number > 0) info.push('Positive');
    if (number < 0) info.push('Negative');
    if (number === 0) info.push('Zero');
    if (Math.abs(number) % 1 === 0) info.push('Integer');
    
    additionalInfo.textContent = 'Properties: ' + (info.length ? info.join(', ') : 'None');

    // Clear input
    input.value = '';
}

// Add dynamic styling via JavaScript
const style = document.createElement('style');
style.textContent = `
    .output.even { background: #e6ffe6; color: #006600; }
    .output.odd { background: #e6f3ff; color: #003366; }
`;
document.head.appendChild(style);