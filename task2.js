const x = true
if (typeof x === 'number') {
    console.log('x - число')
} else if (typeof x === 'string') {
    console.log('x - строка')
} else if (typeof x === 'boolean') {
    console.log('x - логическое значение')
} else {
    console.log('x - тип не определен')
}
        