function solve(input) {

    let barcodeCount = input[0];

    for (element of input.slice(1,barcodeCount +1)) {

        let validBarcodePattern = /@{1}#+[A-Z]{1}[A-Za-z0-9]{4,}[A-Z]{1}@{1}#+/g;

        let isValid = element.match(validBarcodePattern)

        if (isValid) {

            for (barcode of isValid) {
                let productCode = '';

            for (ch of barcode.split('')) {

                let digitPattern = /[0-9]/g;
                let isNum = ch.match(digitPattern);

                
                if (isNum) {
                    productCode += isNum;
                }
            }
            if (productCode.length > 0) {
                console.log(`Product group: ${productCode}`);
            } else {
                console.log(`Product group: 00`);
            }
            }

            

            
            
        } else {
            console.log('Invalid barcode')
        }
        

    }

    

}
solve([
    '6',
    '@###Val1d1teM@###',
    '@#ValidIteM@#',
    '##InvaliDiteM##',
    '@InvalidIteM@',
    '@#Invalid_IteM@#',
    '@#ValiditeM@#'
  ]
  )