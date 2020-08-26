function solve(input) {

    let message = input[0];
    let endIndex = input.indexOf('Decode');

    for (let i = 1; i < endIndex; i++) {
        
        let [command, argOne, argTwo] = input[i].split('|');

        if (command === 'Move') {
            argOne = Number(argOne);
            message = message.substring(argOne , ) + message.substring(0, argOne)
            
        } else if (command === 'Insert') {
            let index = Number(argOne);

            message = message.slice(0, index) + argTwo + message.slice(index,);

           
            

        } else if (command === 'ChangeAll') {
             while (message.includes(argOne)) {
                 message = message.replace(argOne, argTwo);
             }
        }
    }

    console.log(`The decrypted message is: ${message}` );

    

}
solve([ 'zzHe', 'ChangeAll|z|l', 'Insert|2|o', 'Move|3', 'Decode' ]);