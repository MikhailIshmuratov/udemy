'use strict'

var budget = +prompt("Ваш бюджет на месяц?", "20000")
var time = prompt("Введите дату в формате YYYY-MM-DD?", "2018-01-01")

var appData = {
    budget: {},
    timeData: {},
    expense: {},
    optionalExpense: {},
    income: [],
    saving: false
}
appData.budget = budget;
appData.timeData = time;
appData.expense.expenseMust1 = prompt("Введите обязательную статью расходов в этом месяце?", "Еда");
appData.expense.expenseCost1 = +prompt("Во сколько обойдется?", "2000");
appData.expense.expenseMust2 = prompt("Введите обязательную статью расходов в этом месяце?", "Пиво");
appData.expense.expenseCost2 = +prompt("Во сколько обойдется?", "5000");

appData.expense.expenseCost = (appData.expense.expenseCost1 + appData.expense.expenseCost2); // получение суммы всех обязательных трат
// appData.expense.expenseMust = (appData.expense.expenseMust1 + " и " + appData.expense.expenseMust2);
// alert(appData.expense.expenseMust + " : " + appData.expense.expenseCost + " рублей"); // вывод обязатетельных трат с текстом
alert((budget - appData.expense.expenseCost) / 30); // итог

