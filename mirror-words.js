function solve(input) {

    let text = input.shift();
    let pattern = /(@|#)(?<wordOne>[A-Za-z]{3,})\1{2}(?<wordTwo>[A-Za-z]{3,})\1{1}/g
    let match = pattern.exec(text);
    let validWordsCounter = 0;
    let mirrorWords = [];
    let validWords = false;

    while (match) {

        validWords = true;

        validWordsCounter++


        let firstWord = match.groups.wordOne;
        let secondWord = match.groups.wordTwo;
        let firstWordReversed = firstWord.split('').reverse().join('');

        
        if (firstWordReversed === secondWord) {

            mirrorWords.push(`${firstWord} <=> ${secondWord}`)



        }


        

        
        
        

        match = pattern.exec(text);
    } if(!validWords) {

        console.log('No word pairs found!');
    } else {
        console.log(`${validWordsCounter} word pairs found!`);
        
    }
    if (mirrorWords.length < 1) {
        console.log('No mirror words!')
    } else {
        console.log('The mirror words are:');
        console.log(mirrorWords.join(', '));
        
        
    }


}
solve([
    '#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#'
    ]
    );