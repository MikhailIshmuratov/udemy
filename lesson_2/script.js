'use strict'

let money = +prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD?", "2018-01-01");

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    saving: false
}

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце?", ""),
        b = prompt("Во сколько обойдется?", "");
    if (typeof(a) ==='string' && typeof(a) != null && typeof(b) != null 
    && a != '' && b != '' && a.length < 50) {
        console.log("done")
        appData.expenses[a] = b;
    }   else {
        console.log("ne done")
    } 
}

// цикл while

// let i = 0;
// while (i < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце?", ""),
//         b = prompt("Во сколько обойдется?", "");
//         i++;
//     if (typeof(a) ==='string' && typeof(a) != null && typeof(b) != null 
//     && a != '' && b != '' && a.length < 50) {
//         console.log("done")
//         appData.expenses[a] = b;
//     }   else {
//         console.log("ne done")
//     } 
// }

// цикл do ... while

// let i = 0;
// do {
//         let a = prompt("Введите обязательную статью расходов в этом месяце?", ""),
//             b = prompt("Во сколько обойдется?", "");
//             i++;
//         if (typeof(a) ==='string' && typeof(a) != null && typeof(b) != null 
//         && a != '' && b != '' && a.length < 50) {
//             console.log("done")
//             appData.expenses[a] = b;
//         }   else {
//             console.log("ne done")
//         } 
// }
// while (i < 2)

appData.moneyPerDay = appData.budget / 30;
alert("Ежедневный бюджет: " + appData.moneyPerDay);



// 1) Переписать наш цикл for еще двумя способами и закомментировать их (еще 2 вида циклов, тренируемся)
// 2) Проверить, чтобы все работало и не было ошибок в консоли
// 3) Добавить папку со вторым уроком в свой репозиторий на GitHub