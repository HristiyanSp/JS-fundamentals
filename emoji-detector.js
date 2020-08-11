function solve(input){

    let coolThreshhold = 1;
    let totalEmojiFound = 0;
    let coolEmojis = [];

    let inputString = input.shift();

    //let emojiSearch = /(?<fuckthisshit>([:|*]{2})(?<word>[A-Z]{1}[a-z]{2,})\2)/g;
    let emojiSearch = /(?<fuckthisshit>(\:{2}|\*{2})(?<word>[A-Z]{1}[a-z]{2,})\2)/g
    let digitSearch = /\d+/g;


        let digitMatch = inputString.match(digitSearch).join('').split('');

        for (let num of digitMatch) {

            num = Number(num);
            coolThreshhold *= num;
            
        }

        let arrayFromInput = Array.from(inputString.matchAll(emojiSearch))

        for (let i = 0; i<arrayFromInput.length; i++) {

            emojiCoolScore = 0;
            totalEmojiFound++;

            let emojiName = arrayFromInput[i].groups.word
            

            let j = 0;

                  while (j < emojiName.length) {
    
                      emojiCoolScore += Number(emojiName.charCodeAt(j));
    
                   j++
    
                    
                   }

                   if (emojiCoolScore >= coolThreshhold) {

                        coolEmojis.push(arrayFromInput[i].groups.fuckthisshit);
            
                           }
            

        }


        

        
    console.log(`Cool threshold: ${coolThreshhold}`);
    console.log(`${totalEmojiFound} emojis found in the text. The cool ones are:`)
    console.log(`${coolEmojis.join('\n')}`);
    
    

    
    

}
solve([
    "It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."
  ]
  );