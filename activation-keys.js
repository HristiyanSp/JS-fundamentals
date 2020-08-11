function solve(input) {

    let activationKey = input.shift();

    let instructions = input.shift();

    while (instructions !== 'Generate') {

        let [command, argOne, argTwo, argThree] = instructions.split('>>>')

        switch (command) {
            case 'Contains':

                if (activationKey.includes(argOne)) {
                    console.log(`${activationKey} contains ${argOne}`);
                    
                } else {
                    console.log('Substring not found!');
                    
                }
                
                break;

            case 'Flip':

                if (argOne === 'Upper') {

                    let changedSubstring = activationKey.substring(argTwo,argThree).toUpperCase();
                    activationKey = activationKey.replace(activationKey.substring(argTwo,argThree), changedSubstring)
                    console.log(activationKey);
                    

                } else {
                    let changedSubstring = activationKey.substring(argTwo,argThree).toLowerCase();
                    activationKey = activationKey.replace(activationKey.substring(argTwo,argThree), changedSubstring)
                    console.log(activationKey);

                }
        
            break;

            case 'Slice':

                let stringToBeReplaced = activationKey.substring(argOne,argTwo);
                activationKey = activationKey.replace(stringToBeReplaced, '');
                console.log(activationKey);
                
            break;
        }

        instructions = input.shift();
        
    }

    console.log(`Your activation key is: ${activationKey}`);
    

}
solve([
    '134softsf5ftuni2020rockz42',
    'Slice>>>3>>>7',
    'Contains>>>-rock',
    'Contains>>>-uni-',
    'Contains>>>-rocks',
    'Flip>>>Upper>>>2>>>8',
    'Flip>>>Lower>>>5>>>11',
    'Generate'
  ]
  
  )