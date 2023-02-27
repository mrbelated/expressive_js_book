// Построение треугольника в цикле
// Напишите цикл, который делает семь вызовов console.log и выводит следующий треугольник:

// #
// ##
// ###
// ####
// #####
// ######
// #######

let lines = 7,
    str = "",
    simbol = "#";
for (let i = 0; i < lines; i++) {
    str += simbol;
    console.log(str);
}

// 2ой вариант решения
for (let line = "#"; line.length < 8; line += "#")
  console.log(line);

// Напишите программу, в которой с помощью console.log
// выводятся все числа от 1 до 100 с двумя исключениями. Для чисел, кратных 3,
// вместо числа выводится "Fizz", а для чисел, кратных 5 (но не 3), — "Buzz"

for (let i = 1; i < 100; i++) {
    if (i % 3 == 0) {
        console.log("Fizz");
    }
    else if (i % 3 !== 0 & i % 5 == 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}

// Когда это заработает, измените программу так, чтобы она печатала "FizzBuzz" для чисел,
// которые делятся и на 3, и на 5 (и по-прежнему печатайте "Fizz" или "Buzz" для чисел, кратных только одному из них).

for (let i = 1; i < 100; i++) {
    if (i % 3 == 0 & i % 5 == 0) {
        console.log("FizzBuzz");
    }
    else if (i % 3 == 0) {
        console.log("Fizz");
    }
    else if (i % 5 == 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}

// Напишите программу, которая создает строку, представляющую сетку 8 × 8,
// используя для разделения строк символы новой строки.
// В каждой позиции сетки стоит либо пробел, либо символ "#". 
// Эти символы должны располагаться в шахматном порядке.

string = "";
size = 8;
for (let i = 0; i < size; i++) {
    for (let j = 0; j < size/2; j++) {
        string += "# "; 
    }
    string += "\n";
}
console.log(string);

// 2ое решение

let size = 8;
let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);