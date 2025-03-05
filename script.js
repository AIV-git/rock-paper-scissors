function getComputerChoice() {
    values = ['Rock', 'Paper', 'Scissors'];
    const random = Math.floor(Math.random() * values.length);
    return values[random]
}