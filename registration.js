function solve(input) {

    let inputLength = input[0];
    let successfulReg = 0;

    for (let i = 1; i<=inputLength; i++) {
        
        let pattern = /([U$]{2})(?<username>[A-Z]{1}[a-z]{2,})\1([P@$]{3})(?<password>[A-Za-z]{5,}\d+)\3/g;
        let match = pattern.exec(input[i]);

        if (match) {
            successfulReg++
            console.log('Registration was successful');
            console.log(`Username: ${match.groups.username}, Password: ${match.groups.password}`);

        } else {
            console.log('Invalid username or password');
        }
    }
    console.log(`Successful registrations: ${successfulReg}`);

}
solve([ '2', 'U$TommyU$P@$asdqwe123P@$', 'Sara 1232412' ]
)