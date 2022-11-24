const grade = -241;

if (grade >= 90) {
    console.log('A')
} else if (grade >= 80) {
    console.log('B')
} else if (grade >= 70) {
    console.log('C')
} else if (grade >= 60) {
    console.log('D')
} else if (grade >= 50) {
    console.log('E')
} else if (grade < 50 && grade >= 0) {
    console.log('F')
} else if (grade > 100 || grade < 0) {
    console.log('ERRO, insira um valor válido.')
}  
