const arr1 = [1,2,3,4,5]
const arr2 = [2,2,2,2,2]
const arr3 = ['a','b','c','d','e']
const arr4 = ['f','f','f']

let flag = false
arr1.sort()
for(let i=0; i<arr1.length-1; i++) {
    if (arr1[i]!==arr1[i+1]) {
        flag = true
    }
}
if (!flag) {
    console.log('в массиве arr1 все элементы одинаковые')
}

flag = false
arr2.sort()
for(let i=0; i<arr2.length-1; i++) {
    if (arr2[i]!==arr2[i+1]) {
        flag = true
    }
}
if (!flag) {
    console.log('в массиве arr2 все элементы одинаковые')
}

flag = false
arr3.sort()
for(let i=0; i<arr3.length-1; i++) {
    if (arr3[i]!==arr3[i+1]) {
        flag = true
    }
}
if (!flag) {
    console.log('в массиве arr3 все элементы одинаковые')
}

flag = false
arr4.sort()
for(let i=0; i<arr4.length-1; i++) {
    if (arr4[i]!==arr4[i+1]) {
        flag = true
    }
}
if (!flag) {
    console.log('в массиве arr4 все элементы одинаковые')
}