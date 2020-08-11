function solve(input) {

    let numberLines = input[0];

    for (let i =1; i<=numberLines; i++) {
        
        let pattern = /(.+)>(?<first>\d{3})\|(?<second>[a-z]{3})\|(?<third>[A-Z]{3})\|(?<fourth>[^<>]{3})<\1/g;
        let match = pattern.exec(input[i]);

        if (match) {
            let output = match.groups.first + match.groups.second + match.groups.third + match.groups.fourth;

            console.log(`Password: ${output}`);
        } else {
            console.log('Try another password!');
        }

    }

}
solve([
    '5',
    'aa>111|mqu|BAU|mqu<aa',
    '()>111!aaa!AAA!^&*<()',
    'o>088|abc|AAA|***<o',
    'asd>asd|asd|ASD|asd<asd',
    '*>088|zzzz|ZzZ|123<*'
  ])