function min(a,b) {
    if (a < b) return a;
    else return b;
}

console.log(min(8,6));

// Вот еще один способ определить, является ли положительное целое число четным или нечетным:
// • ноль четный;
// • единица нечетная;
// • четность любого другого числа N совпадает с четностью N – 2.
// Определите рекурсивную функцию isEven, соответствующую этому описанию.
// Функция должна принимать один параметр (положительное целое число)
// и возвращать логическое значение.

function isEven (number) {
    if (number == 0) return true;
    else if (number == 1 || number == -1) return false;
    else if (number < 0) return isEven(number *(-1) - 2);
    else return isEven(number - 2);
}

console.log(isEven(50));

// Напишите функцию countBs, которая принимает строку в качестве единственного аргумента
// и возвращает число, показывающее, сколько больших букв «B» содержится в этой строке.

function countBs (string) {
    let countBs = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == "B") {
            countBs += 1;
        }
    }
    return countBs;
}
console.log(countBs("sdhsgBsffBBsdf"));

// Затем напишите функцию countChar, которая ведет себя как countBs,
// за исключением того, что принимает второй аргумент, указывающий, 
// какие именно символы нужно посчитать (вместо того чтобы считать только большие буквы «B»). 
// Перепишите countBs, чтобы использовать эту новую функцию.

function countChar (string, char) {
    let countChar = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == char) {
            countChar += 1;
        }
    }
    return countChar;
}
console.log(countChar("sdhsgBsffBBsdf","B"));