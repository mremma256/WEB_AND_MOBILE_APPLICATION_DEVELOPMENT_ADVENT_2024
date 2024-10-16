let available_water = 40;
let daily_req = 50;
for(let day =1; day<=7; day++){
    let waterUsage =Math.floor(Math.random()*12)+1;
    available_water-=waterUsage;
    if (available_water > daily_req || available_water < daily_req)
        console.log(`Day ${day}: Warning! Water level is below ${available_water} litres');
    }
}