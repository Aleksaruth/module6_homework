
function funcOutside(a) {

    return function (b) {
        return a + b;

    };
    
};

const sumFunction = funcOutside(10);
const sum = sumFunction(3)
console.log(sum); 


