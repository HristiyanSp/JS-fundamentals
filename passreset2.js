function solve(input) {

    let password = input.shift();
    let temporaryPass = '';
    

    let currentLine = input.shift();

    while (currentLine !== 'Done') {
        let [command, argumentOne, argumentTwo] = currentLine.split(' ');


        switch (command) {
            case 'TakeOdd':
                 temporaryPass = '';

                for (let i = 1; i < password.length; i +=2) {
                    
                    temporaryPass += password[i];

                    
                }
                
                console.log(temporaryPass);
                password = temporaryPass;
            break;

            case 'Cut':

                 index = Number(argumentOne);
                 length = Number(argumentTwo);

                let substring = password.substring(index, index + length);
                password = password.replace(substring, '');
                console.log(password);
            break;

            case 'Substitute':
                  temporaryPass = password;
                while (temporaryPass.includes(argumentOne)) {
                    temporaryPass = temporaryPass.replace(argumentOne, argumentTwo);

                
                } 

                if (password.includes(argumentOne)) {
                    console.log(temporaryPass);
                    
                } else {
                    console.log('Nothing to replace!'); 
                    
                    
                    
                }  
                password = temporaryPass;
            break;            
        }

        currentLine = input.shift();
    }

    console.log(`Your password is: ${password}`);
    

    
    

}
solve(['Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr', 
    'TakeOdd',
    'Cut 15 3',
    'Substitute :: -',
    'Substitute | ^',
    'Done'])