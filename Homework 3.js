
//    1





let arr = [[2, -9, -3, 0], [1, 2], [-4 , -11, 0]] ;
// let arr = [[3, 4], [11, 0], [5, 6, 7, 8]] ;
// let arr = [1, 2, 3] ;

function multiplyNegativeSum( arr = [] , sum = 1 , res = 0 ) {
    debugger ;
    for ( let value of arr ) {
        let negativeValue ;
        if ( Array.isArray( value ) ) {
            negativeValue = value.filter( item => item < 0) ;
        } else {
            return 'Invalid Argument' ;
        }
        let negativeMaxValue = negativeValue.length === 0 ? ++res : negativeValue.reduce( ( sum , item ) => item > sum ? item : sum ) ;
        sum *= negativeMaxValue ;
    }
    if ( res === arr.length ) {
        return 'No negatives' ;
    }
    return sum ;
}

console.log( multiplyNegativeSum(arr) ) ;






//        2





let arr = [1, '10', 'hi', 'hello', 2, 3, 5] ;

function divideNumberFromString( arr = [] ) {
    let numberArr = arr.reduce( function( sum , item ) {
        if ( typeof item === 'number' && !isNaN( item ) ) {
            sum++ ;
        }
        return sum ;
    } , 0 ) ;
    return ` Numbers: ${numberArr}, Strings: ${arr.length - numberArr} ` ;
}
console.log( divideNumberFromString(arr) ) ;





//        3





// let arr = [[3, 4, 5], [1, 0, 0], [4, 5, 4], [8, 8, -1]] ;
let arr = [[ 8, 35, 2], [8], [5, 6, -5 , -6], [1, 3, -9, 0,-1]] ;
// let arr = [1], [2], [3], [4]] ;

function sumArrDigits( arr = [] , sumArr = [] ) {
    debugger ;
    for ( let value of arr ) {
        sum = value.reduce( ( sum , item ) => sum + item , 0 ) ;
        sumArr.push( sum ) ;
    }
    return sumArr ;
}

console.log( sumArrDigits(arr) ) ;





//     4





let arr = [5, 4, 78, 0, -3, 7] ;
// let arr = [2, 4, 6, 88] ;
// let arr = [] ;

function arrEvenDigits( arr = [] ) {
    debugger ;
    for ( let i = 0 ; i < arr.length ; i++ ){
        if ( arr[i] % 2 === 0 ) {
            arr.splice(i , 1) ;
            i-- ;
        }
    }
    let newEvenArr = arr.map( item => item * arr.length ) ;
    return newEvenArr ;
}

console.log( arrEvenDigits(arr) ) ;




//     5





// let arr = [1, 1, 2, 3, 3, 2, 5, 6, 5, 9, 9] ;
let arr = [4, 4] ;

function divideSameDigits( arr = [] ) {
    let sortArr = arr.sort( (a , b) => a - b ) ;
    for ( let i = 0 ; i < sortArr.length ; i++ ) {
        if ( sortArr[i] === sortArr[i + 1] ) {
            sortArr.splice( i + 1 , 1 ) ;
        }
    }
    return sortArr ;
}

console.log( divideSameDigits( arr ) ) ;





//      6





// let arr = [3, 7, 12, 5, 20, 0] ;
let arr = [1, 1, 4, 32, 6] ;

function newArr( arr ) {
    debugger ;
    let result = [] ;
    arr.forEach( ( item , index ) => {
        debugger ;
        if ( index !== arr.length - 1 ) {
            result.push( item * arr[index + 1] ) ;
        }
        delete arr[index] ;
    });
    return result ;
}

console.log( newArr(arr) ) ;