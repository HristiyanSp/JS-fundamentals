function solve(input) {

    let pattern = /([=\/])(?<destination>[A-Z]{1}[A-ZZa-z]{2,})\1/g;

    let match = [...input.matchAll(pattern)];
    let travelPoints = 0;
    let validDestinations = [];
    
    if (match) {
        for (destination of match) {
            travelPoints += destination[2].length;
            validDestinations.push(destination[2]);
            
        }
    }

    console.log(`Destinations: ${validDestinations.join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`);
    
}
solve('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=');