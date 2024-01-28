const arr1 = [1, 'a', 4, 6, null, false, 3, 1, 1, 'b']
const arr2 = arr1.filter((item) => {
    if (typeof item === 'number') {
        return true
    }
})
let evenLength = 0
let oddLength = 0
for (i=0; i<arr2.length; i++) {
    if (arr2[i]%2 === 0) {
        evenLength++
    } else {
        oddLength++
    }
}
console.log('кол-во четных: ', evenLength)
console.log('кол-во нечетных: ', oddLength)