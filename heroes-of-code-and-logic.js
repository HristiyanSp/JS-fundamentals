function solve(input) {

    // 1. n - number of heroes
    let numberOfHeroes = Number(input[0])
    let heroes = {};

     // slagam heroes v obekt

    for (let i = 1; i<= numberOfHeroes; i++) {

        let [heroName, hp, mp] = input[i].split(' ');

        hp = Number(hp);
        mp = Number(mp);

        if (!heroes[heroName]) {
            heroes[heroName] = {hp, mp}
        } else {
            heroes[heroName].hp += hp;
            heroes[heroName].mp += mp;
        }
    }
    // namiram index of End i vyrtq do nego s for cikyl
    let endIndex = input.indexOf('End');
    

    for (let j = numberOfHeroes + 1; j < endIndex; j++ ) {

        let [command, name, argOne, argTwo] = input[j].split(' - ');

        switch(command) {
            case 'CastSpell':
                let mpNeeded = Number(argOne);
                let spellName = argTwo;

                if (heroes[name].mp >= mpNeeded) {
                    heroes[name].mp -= mpNeeded;
                    console.log(`${name} has successfully cast ${spellName} and now has ${heroes[name].mp} MP!`);
                } else {
                    console.log(`${name} does not have enough MP to cast ${spellName}!`);
                }

            break;

            case 'TakeDamage':
                let damage = Number(argOne);
                let attacker = argTwo;

                if (heroes[name].hp > damage) {
                    heroes[name].hp -= damage;
                    console.log(`${name} was hit for ${damage} HP by ${attacker} and now has ${heroes[name].hp} HP left!`);
                } else {
                    delete heroes[name];
                    console.log(`${name} has been killed by ${attacker}!`);
                }

            break;

            case 'Recharge':
                let amount = Number(argOne);

                if (heroes[name].mp + amount > 200) {
                    let oldMP = heroes[name].mp;
                    heroes[name].mp = 200;
                    console.log(`${name} recharged for ${200 - oldMP} MP!`);
                } else {
                    heroes[name].mp += amount;
                    console.log(`${name} recharged for ${amount} MP!`);
                }

            break;

            case 'Heal':
                let amountHP = Number(argOne);  

                if (heroes[name].hp + amountHP > 100) {
                    let oldHP = heroes[name].hp;
                    heroes[name].hp = 100;
                    console.log(`${name} healed for ${100 - oldHP} HP!`);
                } else {
                    heroes[name].hp += amountHP;
                    console.log(`${name} healed for ${amountHP} HP!`);
                }
        }

        
    }

    let heroesEntries = Object.entries(heroes);

    heroesEntries.sort((a,b) =>(b[1].hp - a[1].hp || a[0].localeCompare(b[0]))) //{

        

        // if (a[1].hp === b[1].hp) {
        //     return a[0].localeCompare(b[0]);
        // } else {
        //     return b[1].hp - a[1].hp;
        // }
    //})

    for (let kvp of heroesEntries) {

        console.log(kvp[0]);;
        console.log(`  HP: ${kvp[1].hp}`);
        console.log(`  MP: ${kvp[1].mp}`);

        
    }
    


    // output hp in descending order, name in ascending


}
solve([
    '4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'
  ]
  );