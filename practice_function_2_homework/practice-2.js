/**
 * Viết hàm calcFactorial() nhận vào một số nguyên và trả về giá trị giai thừa của số nguyên đó
 * 
 * Ví dụ: 
 * calcFactorial(4)
 * 
 * Output:
 * 24
 *  
 * */ 

function calcFactorial(number) {
    let factorial = 1;
        for (let i = 2; i <= number; i++) {
            factorial *= i;}
    return (factorial);

}

console.log(calcFactorial(4));