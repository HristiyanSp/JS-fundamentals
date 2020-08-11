function solve(input) {

    let endIndex = input.indexOf('Log out');
    let followerInfo = {};
    
    for (let i =0; i<endIndex; i++) {

        let [command, username, count] = input[i].split(': ');

        count = Number(count);

        switch(command) {
            case 'New follower':
                if (!followerInfo[username]) {
                    followerInfo[username] = {'likes' : 0, 'comments' : 0};
                }
            break;

            case 'Like':
                if (!followerInfo[username]) {
                    followerInfo[username] = {'likes' : count, 'comments' : 0};
                } else {
                    followerInfo[username].likes += count;
                }
            break;

            case 'Comment':
                if (!followerInfo[username]) {
                    followerInfo[username] = {'likes' : 0, 'comments' : 1};
                } else {
                    followerInfo[username].comments++;
                }
            break;

            case 'Blocked':
                if (!followerInfo[username]) {
                    console.log(`${username} doesn't exist.`)
                } else {
                    delete followerInfo[username];
                }
            break;
        }


    }

    let outputArray = Object.entries(followerInfo)
    .sort((a,b) => b[1].likes - a[1].likes || a[0].localeCompare(b[0]));
    console.log(outputArray)

    console.log(`${outputArray.length} followers`);

    for (kvp of outputArray) {
        console.log(`${kvp[0]}: ${kvp[1].likes + kvp[1].comments}`);
    }

}
solve([
    'Like: A: 3',
    'Comment: A',
    'New follower: B',
    'Blocked: A',
    'Comment: B',
    'Like: C: 5',
    'Like: D: 5',
    'Log out'
  ]
  )