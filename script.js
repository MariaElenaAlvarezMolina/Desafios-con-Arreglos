//Desafío 1: Siempre hambriento
function siempreHambriento(arr) {
    var conteoComida = 0
    for(var i=0; i<arr.length; i++) {
        if(arr[i] == "comida") {
            console.log("delicioso");
            conteoComida++;
        }
    } 
    if(conteoComida == 0) {
        console.log("Tengo hambre");
    }
}

siempreHambriento([3.14, "comida", "pastel", true, "comida"]);
// esto debería mostrar "delicioso, "delicioso"
siempreHambriento([4, 1, 5, 7, 2]);
// esto debería mostrar "Tengo hambre"

//Desafío 2: Filtro paso alto
function highPass(arr, cutoff) {
    var filteredArr = [];
    for(var i=0; i<arr.length; i++) {
        if(arr[i] > cutoff) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // esperamos de vuelta [6, 8, 10, 9]

//Desafío 3: Mejor que el promedio
function betterThanAverage(arr) {
    var sum = 0;
    for(var i=0; i<arr.length; i++) {
        sum += arr[i];
    }
    
    var prom = sum / arr.length;
    var count = 0
    for(i=0; i<arr.length; i++) {
        if(arr[i] > prom) {
            arr[i] += count;
            count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // esperamos 4 de vuelta

//Desafío 4: Arreglo invertido
function reverse(arr) {
    var left = 0;
    var right = arr.length - 1;
    while(left < right) {
        var temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // esperamos de vuelta ["e", "d", "c", "b", "a"]

//Desafío 5: Arreglo de Fibonacci
function fibonacciArray(n) {
    var fibArr = [0, 1];
    while(fibArr.length < n) {
        var prev = fibArr[fibArr.length-1];
        var prevprev = fibArr[fibArr.length-2];
        fibArr.push(prev + prevprev);
        }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // esperamos de vuelta[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]