function solve(input) {

    let numberLines = Number(input[0]);
    let plantInfo = {};

    for (let i = 1; i<=numberLines; i++) {

        let [plant,rarity] = input[i].split('<->');
        rarity = Number(rarity);

        if (!plantInfo[plant]) {

            plantInfo[plant] = [rarity];

        } else {
            plantInfo[plant] = [rarity];
        }
        

    }

    let endIndex = input.indexOf('Exhibition');
    
    for (let j = numberLines+1; j<endIndex; j++) {
        
        let [command, arg] = input[j].split(': ');

        switch(command) {
            case 'Rate':
                let [plant, rating] = arg.split(' - ');
                rating = Number(rating);
                if (!plantInfo[plant]) {
                    console.log('error'); //???
                } else {
                plantInfo[plant].push(rating)
                
                }
            break;

            case 'Update':
                let [plant1,rarity] = arg.split(' - ');
                rarity = Number(rarity);
                if (!plantInfo[plant1]) {
                    console.log('error');
                } else {
                    plantInfo[plant1][0] = rarity;
                    
                }
            break;

            case 'Reset':
                if (!plantInfo[arg]) {
                    console.log('error');
                } else {
                    plantInfo[arg].splice(1,);
                    
                }
            break;
        }
    }

   let outputArr = Object.entries(plantInfo);
   for (plant of outputArr) {
       plant[1].unshift(0);
       plant[1][1] = Number(plant[1][1])

       let avgRating = 0; 
       
       for (let i = 2; i < plant[1].length; i++) {
           avgRating += Number(plant[1][i]);

       }
       if (avgRating >0) {
       let countLength = plant[1].length -2;
       avgRating = (avgRating / countLength)
       plant[1][0] += avgRating;
       } else {
           avgRating = 0;
           

       }
   }

   outputArr = outputArr.sort((a,b) => {

        if (a[1][1] === b[1][1]) {
            return b[1][0] - a[1][0];
        } else {
            return b[1][1] - a[1][1];
        }

   })
   console.log('Plants for the exhibition:')
   
   for (kvp of outputArr) {
       
        
      
       console.log(`- ${kvp[0]}; Rarity: ${kvp[1][1]}; Rating: ${kvp[1][0].toFixed(2)}`)
   }
 


    

}
solve([
    '2',
    'Candelabra<->10',
    'Oahu<->10',
    'Rate: Oahu - 7',
    'Rate: Candelabra - 6',
    'Rate: asdasd - -1',
    'Exhibition'
  ]
  )