function solve(input) {

    let email = input[0];
    let endIndex = input.indexOf('Complete');
    
    for (let i = 1; i<endIndex; i++){

        let [command, arg] = input[i].split(' ');
        
        switch(command) {

            case 'Make':

            if (arg === 'Upper') {
                email = email.toUpperCase();
                console.log(email);
            } else {
                email = email.toLowerCase();
                console.log(email);
            }
                break;

            case 'GetDomain':

                let domain = email.substring(email.length - arg,);
                console.log(domain)

            break;

            case 'GetUsername':

                let index = email.indexOf('@');

                if (index >= 0) {
                    let substring = email.substring(0,index);
                    console.log(substring);
                } else {
                    console.log(`The email ${email} doesn't contain the @ symbol.`);
                }

            break;

            case 'Replace':
                

                while (email.includes(arg)){
                    email = email.replace(arg, ('-'));
                    
                }
                console.log(email);
            break;  

            case 'Encrypt':

                let asciiString = '';

                for (i = 0; i<email.length; i++) {
                    let char = email.charCodeAt(i);
                    asciiString += char + ' ';
                }
                console.log(asciiString);

            break;
        }
    }

}
solve([
    'AnotherMail.com',
    'Make Lower',
    'GetUsername',
    'Replace a',
    'Complete',
    ''
  ]
  );