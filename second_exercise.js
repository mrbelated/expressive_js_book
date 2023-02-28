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