/*Write a function in JavaScript called calculateTax that accepts the income of a
person in Nigeria and returns the tax payable (assume a tax rate of 15%).*/

function calculateTax(income) {//start of the function
    let tax = income * 0.15;//Tax calculation
    return tax;
}
console.log("Tax Payable:",calculateTax(50000));//Tax Output
