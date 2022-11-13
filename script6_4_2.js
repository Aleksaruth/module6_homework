

function isPrime(num) {    

    let isPrime = true; 
    let result;  

    if ( num > 1 && num <= 1000 ) {   

        for (let i = 2; i <= num / 2; i++) { 

            if (num % i == 0) {  
                isPrime = false;
                 
            }
        }  

        if ( result == isPrime) { 
            result = (`Число ${num} - простое число`);
            
        }

        else { 
            result = (`Число ${num} - составное число`);
            
        }

    }       

    else {   
        result = (`Данные не верны. Число ${num}  - не подходит!`);
    }
    
    return result;

} 
console.log(isPrime(1001));
console.log(isPrime(53));
console.log(isPrime(1000));
console.log(isPrime(25));
console.log(isPrime(23));
console.log(isPrime(1));
console.log(isPrime(0));












