function solve(input) {

    let cities = {};

    let line = input.shift();

    while (line !== 'Sail') {
        let [city,population,gold] = line.split('||');

        population = Number(population);
        gold = Number(gold);

        if (cities[city]) {

            cities[city].population += population;
            cities[city].gold += gold;

        } else { 

        cities[city] = {population,gold};
        }

    
        line = input.shift();
        
    }

    let actionLines = input.shift();

    while (actionLines !== 'End') {

        let [command, town, argOne, argTwo] = actionLines.split('=>');

        if (command == 'Plunder') {
            let people = Number(argOne);
            let gold = Number(argTwo);

            if (cities[town]) {

            cities[town].population -= people
            cities[town].gold -= gold;

            console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`)
           

            if ((cities[town].population <= 0) || (cities[town].gold <= 0)) {
                delete cities[town];

                console.log(`${town} has been wiped off the map!`);
                
            } 
        }
        } else if (command == 'Prosper') {

            if (cities[town]) {
            let gold = Number(argOne);

            if (gold >= 0) {
                cities[town].gold += gold;

                console.log(`${gold} gold added to the city treasury. ${town} now has ${cities[town].gold} gold.`)
            } else {
                console.log(`Gold added cannot be a negative number!`);
            }
        }
    }

        actionLines = input.shift();
    }

    let sortedArray = Object.entries(cities)
    sortedArray.sort((a,b) => {

        if (a[0]=== b[0]) {
            return a[0].localeCompare(b[0]);
        } else {
            return b[1].gold - a[1].gold;
        }
    })

    if (sortedArray.length > 0) {
        console.log(`Ahoy, Captain! There are ${sortedArray.length} wealthy settlements to go to:`)

        for (let kvp of sortedArray) {

            console.log(`${kvp[0]} -> Population: ${kvp[1].population} citizens, Gold: ${kvp[1].gold} kg`)

        }
    } else {
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!')
    }

    

}
solve([
    'Nassau||95000||1000',
    'San Juan||930000||1250',
    'Campeche||270000||690',
    'Port Royal||320000||1000',
    'Port Royal||100000||2000',
    'Sail',
    'Prosper=>Port Royal=>-200',
    'Plunder=>Nassau=>94000=>750',
    'Plunder=>Nassau=>1000=>150',
    'Plunder=>Campeche=>150000=>690',
    'End'
  ]
  
  
  )

