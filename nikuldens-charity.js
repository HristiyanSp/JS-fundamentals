function solve(input) {

    let stringToModify = input[0];

    let endIndex = input.indexOf('Finish');
    
    for (let i = 1; i < endIndex; i++) {

        let [command, argOne, argTwo] = input[i].split(' ');

        switch (command) {
            case 'Replace':

                while (stringToModify.includes(argOne)) {

                stringToModify = stringToModify.replace(argOne, argTwo);
                }
                console.log(stringToModify);

                break;

            case 'Cut':

                argOne = Number(argOne);
                argTwo = Number(argTwo);

                if ((stringToModify.length > argOne && argOne >= 0 ) && stringToModify.length > argTwo && argTwo  >= 0) {

                    let stringToDelete = stringToModify.substring(argOne,argTwo + 1)
                    stringToModify = stringToModify.replace(stringToDelete, '');
                    console.log(stringToModify);
                } else {
                    console.log('Invalid indexes!');
                }

                break;

            case 'Make':

                if (argOne === 'Upper') {
                    stringToModify = stringToModify.toUpperCase();
                    console.log(stringToModify);
                } else if (argOne === 'Lower') {
                    stringToModify = stringToModify.toLowerCase();
                    console.log(stringToModify);

                }
                break;

            case 'Check':

                if (stringToModify.includes(argOne)) {
                    console.log(`Message contains ${argOne}`);
                } else {
                    console.log(`Message doesn't contain ${argOne}`);
                }

                break;

            case 'Sum':

                argOne = Number(argOne);
                argTwo = Number(argTwo);

                if ((stringToModify.length > argOne && argOne >= 0 ) && stringToModify.length > argTwo && argTwo  >= 0) {

                    

                let substring = stringToModify.substring(argOne,argTwo + 1)
                
                let sum = 0;

                for (let j = 0; j < substring.length; j ++) {
                    sum += substring.charCodeAt(j);

                }

                console.log(sum);



                } else {
                    console.log('Invalid indexes!');
                }


                break;
        
           
        }



    }
    



}
solve([
    'ILikeSharan',
    'Replace a e',
    'Make Upper',
    'Check SHEREN',
    'Sum 1 4',
    'Cut 1 4',
    'Finish'
  ]
  );