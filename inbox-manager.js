function solve(input) {
    let usersInfo = {};

    let endIndex = input.indexOf('Statistics');
    
    for (let i = 0; i< endIndex; i++) {

        let [command, username, email] = input[i].split('->');
        
        switch(command) {
            case 'Add':
                if (!usersInfo[username]) {
                    usersInfo[username] = [];
                } else {
                    console.log(`${username} is already registered`);
                }
            break;

            case 'Send':
                usersInfo[username].push(email);
                
            break;

            case 'Delete':
                if (!usersInfo[username]) {
                    console.log(`${username} not found!`);
                } else {
                    delete usersInfo[username];
                }
            break;
        }


    }
    userArray = Object.entries(usersInfo)
    .sort((a,b) => b[1].length - a[1].length || a[0].localeCompare(b[0]));

    console.log(`Users count: ${userArray.length}`);

   for (kvp of userArray) {

        console.log(kvp[0]);
         for (email of kvp[1]) {
             console.log(` - ${email}`);
         }
       
   }

}
solve([
    'Add->Mike',
    'Add->George',
    'Send->George->Hello World',
    'Send->George->Some random test mail',
    'Send->Mike->Hello, do you want to meet up tomorrow?',
    'Send->George->It would be a pleasure',
    'Send->Mike->Another random test mail',
    'Statistics'
  ]);