function solve(input) {

    let countMessages = Number(input[0]);

    for (let i = 1; i <= countMessages; i ++) {
        
        let pattern = /!(?<command>[A-Z]{1}[a-z]{2,})!:\[(?<message>[A-Za-z]{8,})\]/g

        let match = pattern.exec(input[i]);

        if (match) {
            let message = match.groups.message;
            

            let output = '';
            for (let j = 0; j< message.length; j++) {
                output += message.charCodeAt(j) + ' '
                
            }
            console.log(`${match.groups.command}: ${output}`);
            
        } else {
            console.log('The message is invalid');
        }
        
    }

}
solve([
    '3',
    'go:[outside]',
    '!drive!:YourCarToACarWash',
    '!Watch!:[LordofTheRings]'
  ])