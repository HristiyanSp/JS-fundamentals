function solve(input) {

    let username = input[0];
    let stopIndex = input.indexOf('Sign up');

    for (let i = 1; i<stopIndex; i++) {

        let [command, argOne, argTwo] = input[i].split(' ');

        switch(command) {

            case 'Case':
                if (argOne === 'lower') {
                    username = username.toLowerCase();
                    console.log(username);
                } else {
                    username = username.toUpperCase();
                    console.log(username);
                }
            break;

            case 'Reverse':
                let startIndex = Number(argOne);
                let endIndex = Number(argTwo);

                if ((startIndex >= 0 && startIndex < username.length) && (endIndex >= 0 && endIndex <username.length)) {
                    

                    let substring = username.substring(startIndex, endIndex +1)
                    .split('')
                    .reverse()
                    .join('');
                    console.log(substring);
                }
            break;

            case 'Cut':
                if (username.includes(argOne)) {
                    username = username.replace(argOne, '');
                    console.log(username);
                } else {
                    console.log(`The word ${username} doesn't contain ${argOne}.`);
                }
            break;

            case 'Replace':
                while (username.includes(argOne)) {
                   username = username.replace(argOne, '*');
                    
                }
                console.log(username);
            break;

            case 'Check':
                if (username.includes(argOne)) {
                    console.log('Valid');
                } else {
                    console.log(`Your username must contain ${argOne}.`);
                }
            break;
        }

    }

}
solve([ 'ThisIsMyString', 'Reverse 1 4', 'Replace i', 'Cut My', 'Sign up' ]
);