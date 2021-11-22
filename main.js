// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:

//     1. перебрати його циклом while
// let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i = 0;
// while (i < array.length) {
//     const arrayElement = array[i];
//     document.write('<div>');
//     document.write(arrayElement);
//     document.write('</div>');
//     i++;
// }


//     2. перебрати його циклом for
// let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = 0; i < array.length; i++) {
//     const arrayElement = array[i];
//     document.write('<div>');
//     document.write(arrayElement);
//     document.write('</div>');
// }


//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i = 0;
// while (i < array.length) {
//     const arrayElement = array[i];
//     if (i % 2 === 0) {
//         document.write('<div>');
//         document.write(arrayElement);
//         document.write('</div>');
//     }
//     i++;
// }


// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = 0; i < array.length; i++) {
//     const arrayElement = array[i];
//     if (i % 2 === 0) {
//         document.write('<div>');
//         document.write(arrayElement);
//         document.write('</div>');
//     }
// }


// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i = 0;
// while (i < array.length) {
//     if (array[i] % 2 === 0) {
//         document.write('<div>');
//         document.write(array[i]);
//         document.write('</div>');
//     }
//     i++;
// }


// 6. перебрати циклом for та вивести  числа тільки парні  значення
// let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//         document.write('<div>');
//         document.write(array[i]);
//         document.write('</div>');
//     }
// }


// 7. замінити кожне число кратне 3 на слово "okten"
// let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = 0; i < array.length; i++) {
//     const arrayElement = array[i];
//     if (arrayElement % 3 === 0) {
//         document.write('<div>');
//         document.write('okten');
//         document.write('</div>');
//     } else {
//         document.write('<div>');
//         document.write(arrayElement);
//         document.write('</div>');
//     }
// }


// 8. вивести масив в зворотньому порядку.
// let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = array.length - 1; i >= 0; i--) {
//     const arrayElement = array[i];
//     document.write('<div>');
//     document.write(arrayElement);
//     document.write('</div>');
//
// }


// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//     1. перебрати його циклом while
// let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i = array.length - 1;
// while (i >= 0) {
//     const arrayElement = array[i];
//     document.write('<div>');
//     document.write(arrayElement);
//     document.write('</div>');
//     i--;
// }


//     2. перебрати його циклом for
// let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = array.length - 1; i >= 0; i--) {
//     const arrayElement = array[i];
//     document.write('<div>');
//     document.write(arrayElement);
//     document.write('</div>');
// }

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i = array.length - 1;
// while (i >= 0) {
//     const arrayElement = array[i];
//     if (i % 2 === 0) {
//         document.write('<div>');
//         document.write(arrayElement);
//         document.write('</div>');
//     }
//     i--;
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = array.length - 1; i >= 0; i--) {
//     const arrayElement = array[i];
//     if (i % 2 === 0) {
//         document.write('<div>');
//         document.write(arrayElement);
//         document.write('</div>');
//     }
// }


// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i = array.length - 1;
// while (i >= 0) {
//     if (array[i] % 2 === 0) {
//         document.write('<div>');
//         document.write(array[i]);
//         document.write('</div>');
//     }
//     i--;
// }


// 6. перебрати циклом for та вивести  числа тільки парні  значення
// let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = array.length - 1; i >= 0; i--) {
//     if (array[i] % 2 === 0) {
//         document.write('<div>');
//         document.write(array[i]);
//         document.write('</div>');
//     }
// }


// 7. замінити кожне число кратне 3 на слово "okten"
// let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = array.length - 1; i >= 0; i--) {
//     const arrayElement = array[i];
//     if (arrayElement % 3 === 0) {
//         document.write('<div>');
//         document.write('okten');
//         document.write('</div>');
//     } else {
//         document.write('<div>');
//         document.write(arrayElement);
//         document.write('</div>');
//     }
// }

