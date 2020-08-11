function solve(input) {

    let heroes = {};

        

    

    let endIndex = input.indexOf('End');
    
    
    for (let i = 0; i<endIndex; i++) {

        let [command, heroName, spellName] = input[i].split(' ');

        

        switch(command) {

            case 'Enroll':

                if (!heroes[heroName]) {
                    heroes[heroName] = [];
                    
                    
                } else {
                    console.log(`${heroName} is already enrolled.`)
                    

                }
                
                break;

            case 'Learn':

                if (!heroes[heroName]) {
                    console.log(`${heroName} doesn't exist.`)
                } else {
                    if (!heroes[heroName].includes(spellName)) {
                        heroes[heroName].push(spellName);
                        
                    } else {
                        console.log(`${heroName} has already learnt ${spellName}.`)
                    }
                }
                break;
            
            case 'Unlearn':

                if (!heroes[heroName]) {
                    console.log(`${heroName} doesn't exist.`)
                } else {
                    if (!heroes[heroName].includes(spellName)) {
                        
                        console.log(`${heroName} doesn't know ${spellName}.`);
                    } else {
                        let spellIndex = heroes[heroName].indexOf(spellName);
                        heroes[heroName].splice(spellIndex,1);
                    }
                }


                break;
        }
        
    }

    

    let heroEntries = Object.entries(heroes);
    heroEntries.sort((a,b) => b[1].length - a[1].length || a[0].localeCompare(b[0]));

    console.log('Heroes:');

    for (kvp of heroEntries) {
        console.log(`== ${kvp[0]}: ${kvp[1].join(', ')}`);
    }

    
    


}
solve([
    'Enroll Stefan',
    'Enroll Stefan',
'Enroll Pesho',
'Learn  ItShouldWork',

    'Learn Stefan ItShouldWork',
    'Learn Pesho ItShouldWork',
    'Unlearn Stefan NotFound',
    'Learn Stamat ItShouldNotWork',
'Unlearn Gosho Dispel',

    'End'
  ]
  );