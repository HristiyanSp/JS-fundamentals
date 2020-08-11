function solve(input) {

    let numberCars = Number(input.shift());
    let carInfo = {};
    
    for (let i = 0; i<numberCars; i++) {

        let [car, mileage, fuelAvailable] = input.shift().split('|');
        mileage = Number(mileage);
        fuelAvailable = Number(fuelAvailable);
        carInfo[car] = {mileage, fuelAvailable};
    }

    let line = input.shift();
    
    

    while (line !== 'Stop') {
        let [command, carName, argumentOne, argumentTwo] = line.split(' : ')

        switch(command) {
            case 'Drive': {

                let distance = Number(argumentOne);
                let fuel = Number(argumentTwo);

                if (fuel > carInfo[carName].fuelAvailable) {
                    console.log('Not enough fuel to make that ride');
                    
                } else {
                    carInfo[carName].mileage += distance;
                    carInfo[carName].fuelAvailable -= fuel;
                    console.log(`${carName} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);

                        if (carInfo[carName].mileage >= 100000) {
                            delete carInfo[carName];
                            console.log(`Time to sell the ${carName}!`);
                            
                        }
                    
                }

            break;
            }

            case 'Refuel':

                 let fuel = Number(argumentOne);
                let oldFuel = carInfo[carName].fuelAvailable;

                if (oldFuel + fuel > 75) {
                    carInfo[carName].fuelAvailable = 75;
                    console.log(`${carName} refueled with ${75 - oldFuel} liters`);
                    
                } else {
                    carInfo[carName].fuelAvailable += fuel;
                    console.log(`${carName} refueled with ${fuel} liters`);
                }



            break;

            case 'Revert':

                let decreaseDistance = Number(argumentOne);
                carInfo[carName].mileage -= decreaseDistance;

                if (carInfo[carName].mileage < 10000) {
                    carInfo[carName].mileage = 10000;
                } else {
                    console.log(`${carName} mileage decreased by ${decreaseDistance} kilometers`);
                    
                }

            break;
        }

        line = input.shift();
    }

   let carEntries = Object.entries(carInfo);

   carEntries.sort((a,b) => {

        if (a[1].mileage === b[1].mileage) {
            return a[0].localeCompare(b[0]);
        } else {
            return b[1].mileage - a[1].mileage;
        }

   })

   for (let kvp of carEntries) {

    

    console.log(`${kvp[0]} -> Mileage: ${kvp[1].mileage} kms, Fuel in the tank: ${kvp[1].fuelAvailable} lt.`);
       
   }

   
   
   
    
    

}
solve([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
  ]
  
  )