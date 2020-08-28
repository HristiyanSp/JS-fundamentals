function solve(input) {

    let pattern = /(\||#)(?<name>[A-Z a-z]+)(\1)(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>[1-9][0-9]{0,3})\1/g;
    let match
    let totalCalories = 0;
    let str = input[0];

    while ((match = pattern.exec(input)) != null) {
        
        totalCalories += Number(match.groups.calories);
        
    }


    const array = [...str.matchAll(pattern)];
    

    let daysToLast = Math.floor(totalCalories / 2000);
    console.log(`You have food to last you for: ${daysToLast} days!`);

    for (let i = 0; i < array.length; i++) {
       
        console.log(`Item: ${array[i].groups.name}, Best before: ${array[i].groups.date}, Nutrition: ${array[i].groups.calories}`)
    }



    
   
    







}
solve([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
  ])