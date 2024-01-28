let value = prompt('enter value');
value = +value

if (isNaN(value)) {
    console.log('Упс, кажется, вы ошиблись')
} else if (typeof value === 'number') {
    if (value%2 === 0) {
        console.log('четное')
    } else {
        console.log('нечетное')
    }
}
        