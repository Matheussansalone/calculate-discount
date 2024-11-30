

const cart = [10, 244, 99, 2, 20, 33, 250]
let finalValue = 0

function calculateDiscount(value, discount) {
    const result = (price * discount) / 100
    return result

}

calculateDiscount(250, 7)

cart.forEach(value => {
    if (value > 30) {
        const discount = calculateDiscount(value, discount)
        finalValue += + (value + discount)
    } else {
        finalValue += value
    }

    finalValue += value

});

console.log(finalValue)
