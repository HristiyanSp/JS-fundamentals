function solve(input) {

    let stops = input[0];
    let initialStr = stops;
    let endIndex = input.indexOf('Travel');
    
    for (let i = 1 ; i <endIndex; i++) {
       
        let [command, argOne, argTwo] = input[i].split(':');

        switch(command) {
            case 'Add Stop':
                let index = Number(argOne);
                if (index >= 0 && index < stops.length) {
                    stops = stops.slice(0,index) + argTwo + stops.slice(index,);
                    console.log(stops);
                } else {
                    console.log(stops);
                }
            break;

            case 'Remove Stop':
                let startIndex = Number(argOne);
                let endIndex = Number(argTwo);

                if ((startIndex >=0 && startIndex < stops.length) && (endIndex >= 0 && endIndex < stops.length)) {
                    let substring = stops.substring(startIndex, endIndex +1);
                    stops = stops.replace(substring,'');
                    console.log(stops)
                } else {
                    console.log(stops);
                }
            break;

            case 'Switch':
                if (stops.includes(argOne)) {
               // while (stops.includes(argOne)) {
               //     stops = stops.replace(argOne,argTwo);
               // }
               stops = stops.replace(argOne,argTwo);
                console.log(stops);
            } else {
                console.log(stops);
            }
                
            break;
        }
    }
    
    console.log(`Ready for world tour! Planned stops: ${stops}`);

}
solve([
    'Hawai::Cyprys-Greece',
    
  // 'Remove Stop:-11:20',
    'Switch:a:Bylgaria',
    'Travel'
  ]);