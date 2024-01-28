let map = new Map([
    [1, "value1"],
    ['b', "value2"],
    [33, true],
    ['str', 5]
])
for (let key of map.keys()) {
    const value = map.get(key)
    console.log(`ключ - ${key}, значение - ${value}`)
}