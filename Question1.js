/*Using a for or while loop, write a program that prints the rainfall recorded in
millimeters for each of the last 10 days in a rural region in Ghana. Assume the rainfall
data is stored in a list.*/

let rainfallData = [100, 120, 115, 98, 130, 105, 112, 125, 108, 110];//list of rainfall records

for (let i = 0; i < rainfallData.length; i++) {
    console.log(`Day ${i + 1}: ${rainfallData[i]} mm`);//Output of the rainfall records
}
