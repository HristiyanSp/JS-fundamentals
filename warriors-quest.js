function solve(input) {

    let skill = input[0];
    let stopIndex = input.indexOf('For Azeroth');
    
    for (let i = 1; i<stopIndex; i++) {
        let [command, argOne, argTwo, argThree] = input[i].split(' ');

        switch(command) {
            case 'GladiatorStance':

                skill = skill.toUpperCase();
                console.log(skill);
                break;

            case 'DefensiveStance':

                skill = skill.toLowerCase();
                console.log(skill);
                break;

            case 'Dispel':

                let index = Number(argOne);
                let letter = argTwo;

                if (index >= 0 && index < skill.length) { ///bqh napisal input.length vmesto skill.length

                let arrFromString = skill.split('');
                let searchedLetter = arrFromString[index];
                    

                 skill = skill.replace(searchedLetter, letter);
                    
                    console.log('Success!');
                } else {
                    console.log('Dispel too weak.');
                }
                break;

            case 'Target':

                let secondCommand = argOne;

                if (secondCommand === 'Change') {

                    let substring = argTwo;
                    let secondSubstring = argThree;

                    while(skill.includes(substring)) {

                    skill = skill.replace(substring,secondSubstring); 
                }

                    console.log(skill);
                } else if (secondCommand === 'Remove'){

                    while (skill.includes(argTwo)) {

                   skill = skill.replace(argTwo, '');
                    }
                    console.log(skill);
                } else {
                    console.log(`Command doesn't exist!`);
                }
                break;

            default:

            console.log(`Command doesn't exist!`);
            break;
                
        }
      

        
    }

}
solve([
    'fr1c710n',

'GladiatorStance',

'Dispel 5 I',
    'For Azeroth'
  ]
  
    )