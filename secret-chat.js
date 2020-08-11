function solve(input) {

    let message = input.shift();
    let command = input.shift();

    while (command !== 'Reveal') {

        let hasError = false;

        let [operation, argumentOne, argumentTwo] = command.split(':|:');

        switch (operation) {
            case 'InsertSpace':
                let index = Number(argumentOne);
                message = message.substring(0, index) + ' ' + message.substring(index); 
                break;
            
            case 'Reverse':
                if (message.includes(argumentOne)) {

                    message = message.replace(argumentOne, '');

                    let reversedString = '';

                    for (char of argumentOne) {
                        reversedString = char + reversedString;
                    }

                    message += reversedString;
                } else {
                    hasError = true;
                    console.log(`error`);
                    
                }
                break;
            case 'ChangeAll':
                while (message.includes(argumentOne)) {
                    message = message.replace(argumentOne, argumentTwo);
                }
                break;
        
           
        }

        if (!hasError) {

            console.log(message);
            
            
           
        }

        command = input.shift();
    }
    console.log(`You have a new text message: ${message}`);

}
solve([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
  ]
  )