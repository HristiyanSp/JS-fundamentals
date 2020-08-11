function solve(input) {

    let password = input.shift();
    let temporaryPass = '';

    let currentLine = input.shift();

    while (currentLine !== 'Done') {
        let [command, argumentOne, argumentTwo] = currentLine.split(' ');


        switch (command) {
            case 'TakeOdd':
                temporaryPass = '';  //tuk beshe problema, qvno trqbva promenlivata da e chista za da moje da zapishe chetnite characteri, ne trqbva da ima nishto v neq

                for (let i = 0; i < password.length; i ++) {
                    if (i % 2 !== 0) {
                    temporaryPass += password[i];

                    }
                }
                password = temporaryPass;
                console.log(password); 
                
                
            break;

            case 'Cut':

                 let index = Number(argumentOne); 
                 let length = Number(argumentTwo);

                 temporaryPass = password.substring(index, index + length); 
                password = password.replace(temporaryPass, '');
                console.log(password);
            break;

            case 'Substitute':
                temporaryPass = password;
                while (password.includes(argumentOne)) {
                    password = password.replace(argumentOne, argumentTwo);

                
                } 

                if (temporaryPass === password) {
                    console.log('Nothing to replace!'); 
                } else {
                    
                    console.log(password);
                    
                }  
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