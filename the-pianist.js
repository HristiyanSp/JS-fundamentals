function solve(input) {

    let numberPieces = Number(input[0]);
    let pieces = {};

    for (let i = 1; i<=numberPieces; i++) {

        let [name,composer,key] = input[i].split('|');

        pieces[name] = {composer,key};

    }

    let endIndex = input.indexOf('Stop');
    
    for (let j = numberPieces+1; j<endIndex; j++) {
        
        let [command, piece, argOne, argTwo] = input[j].split('|');

        switch (command) {
            case 'Add':

            composer = argOne;
            key = argTwo

                if (!pieces[piece]) {
                    pieces[piece] = {composer, key};
                    console.log(`${piece} by ${composer} in ${key} added to the collection!`);
                } else {
                    console.log(`${piece} is already in the collection!`);
                }
                
                break;

            case 'Remove':

                if (!pieces[piece]) {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                } else {
                    delete pieces[piece];
                    console.log(`Successfully removed ${piece}!`);
                    
                }
                break;

            case 'ChangeKey':

                if (!pieces[piece]) {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                } else {
                    pieces[piece].key = argOne;
                    console.log(`Changed the key of ${piece} to ${argOne}!`);
                }
                break;
        
            
        }
        
    }

    let output = Object.entries(pieces)
    .sort((a,b) => a[0].localeCompare(b[0]) || a[1].composer.localeCompare(b[1].composer))

    for (kvp of output){
        console.log(`${kvp[0]} -> Composer: ${kvp[1].composer}, Key: ${kvp[1].key}`);
    }
    
    
    

}
solve([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Fungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
  ]
  )