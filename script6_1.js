
function parityСheck() {

  let arr = [1, 2, 3, 4, 5, 6, 7, "-", 0, "a"];
  let countEven = 0; 
  let countOdd = 0;
  let count0 = 0;

  for (let i=0; i < arr.length; i++) {
    if (arr[i] %2 == 0) if (arr[i] != 0) if (arr[i] != null) {  
        countEven++;
      }
      if (arr[i] %2 == 1) {                                     
      countOdd++;
    }
    if(arr[i] == 0) {
      count0++;
    }
  }

  console.log("Количество четных элементов - "+countEven);
  console.log("Количество нечетных элементов - "+countOdd);
  console.log("Количество нулей - "+count0);


};

parityСheck();
