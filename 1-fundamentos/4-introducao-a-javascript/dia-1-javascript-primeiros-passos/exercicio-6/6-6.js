let piece = 'King';

switch (piece.toLowerCase()) {
    case 'pawn':
        console.log('diagonals, limited range')
        break
    case 'bishop':
        console.log('diagonals')     
        break   
    case 'knight':
        console.log('L')
        break
    case 'rook':
        console.log('line')
        break
    case 'queen':
        console.log('diagonals and line')
        break
    case 'king':
        console.log('diagonals and line, limited range')
        break
    default:
        console.log('ERROR, peça inválida')
}