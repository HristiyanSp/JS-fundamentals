function solve(input) {

    let endIndex = input.indexOf('Stop');
    let guestMeals = {};
    let unlikedMeals = 0;

    for (let i = 0; i<endIndex; i++) {

        let [command, guest, meal] = input[i].split('-');

        

        if (command === 'Like') {

            if (!guestMeals[guest]) {
                guestMeals[guest] = [];
                guestMeals[guest].push(meal);
                
            } else {
                if (guestMeals[guest].includes(meal)) {

                } else {
                    guestMeals[guest].push(meal);
                }
            }
        } else if (command === 'Unlike') {
            
            if (!guestMeals[guest]) {
                console.log(`${guest} is not at the party.`);
            } else {
                if (guestMeals[guest].includes(meal)) {
                    unlikedMeals++;
                    let mealIndex = guestMeals[guest].indexOf(meal);
                     guestMeals[guest].splice([mealIndex], 1); // tuk bqh izpolzval delete, vmesto splice i mi gyrmeshe edin test
                    
                    console.log(`${guest} doesn't like the ${meal}.`);
                } else {
                    console.log(`${guest} doesn't have the ${meal} in his/her collection.`)
                }
            }
        }

    }

    let ouputArray = Object.entries(guestMeals)
    .sort((a,b) => b[1].length - a[1].length || a[0].localeCompare(b[0]));

    

    for (kvp of ouputArray) {
        console.log(`${kvp[0]}: ${kvp[1].join(', ')}`);
    }
    console.log(`Unliked meals: ${unlikedMeals}`);

    

}
solve([
    'Like-Krisi-shrimps',
    'Like-Krisi-kebapce',
    'Like-Krisi-banica',
    'Like-Krisi-soup',
    'Like-Krisi-soup',
    'Unlike-Krisi-soup',
    'Like-Misho-salad',
    'Like-Pena-dessert',
    'Like-Pena-kebapce',
    'Like-Pena-banana',
    'Stop'
  ])