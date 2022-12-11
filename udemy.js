const pureAss = {
    size: 14,
    cold: "biggy"
}

function copyObject(strongAss) {
    const newPureAss = Object.assign({}, strongAss)
    newPureAss.size += 1
    return newPureAss
}

const dirtyAss = copyObject(pureAss)

console.log(pureAss.size)
console.log(dirtyAss.size)

