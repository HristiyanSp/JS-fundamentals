function solve(input) {

    let numberEntries = input[0];

    for (let i = 1; i <= numberEntries; i++) {

        let pattern = /\|(?<boss>[A-Z]{4,})\|:#(?<title>[A-Za-z]+\s[A-Za-z]+)#/g;

        let match = pattern.exec(input[i]);
        if (match) {

        

        console.log(`${match[1]}, The ${match[2]}`); 
        console.log(`>> Strength: ${match[1].length}`);
        console.log(`>> Armour: ${match[2].length}`);
    } else {
        console.log(`Access denied!`);
    }


    }

}
solve([
    '3',
    '|PETER|:#H1gh Overseer#',
    '|IVAN|:#Master detective#',
    '|KARL|: #Marketing lead#'
  ]
  
  )