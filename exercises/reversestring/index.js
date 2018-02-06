// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    //Solution 1
    //return str.split('').reverse().join('');

    //Solution 2 #  Old fashioned
    /*
    let reversed = new Array();
    for(var i = 0; i <= arr.length; i++){
        let temp = arr[arr.length-i];
        reversed[i] = temp;
    }
    
    return reversed.join('');

    */
    let arr = str.split('');
    let reversed = '';
    for(let char of arr){
        reversed = char + reversed;
        debugger;
    }
    return reversed;
    

    //Solution 3 # Newest ES6 
    
    //return str.split('').reduce((rev, char)=> char + rev, '');

}

// Added manually to debug, then 'node inspect {index.js}' and use 'repl' to open a debug session
reverse('VR3');

module.exports = reverse;
