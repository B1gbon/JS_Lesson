'use strict';

const isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let  money;
let  income = 'Фриланс';
let  addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let  deposit = confirm('Есть ли у вас депозит в банке?');
const  mission = '500000';
const  period = '11'; 
let expenses = [];

const start = function() {
  do {
    money = prompt( 'Ваш месячный доход?' );
  }
  while (!isNumber(money)); 
};
start();

const showTypeOf = function(data) {
  console.log(data, typeof(data));
};


const getExpensesMonth = function() {
  let sum = 0;
  let amount;
  for (let i = 0; i < 2; i++) {
    expenses[i] = prompt('Введите обязательную статью расходов?', '');
    do {
      amount= prompt('Во сколько это обойдется?', '');
    } while (!isNumber(amount));
    sum += +amount;
  }
  return sum;
};

let expensesAmount = getExpensesMonth(); 


const getAccumulatedMonth = function() {
  return money - expensesAmount;
};

let accumulatedMonth = getAccumulatedMonth(); 
let  budgetDay  = accumulatedMonth / 30; 


const getTargetMonth = function() {
  return mission / accumulatedMonth;
};

const typeOfMission = function() {
  if (getTargetMonth() >=0 ) {
    console.log('Цель будет достигнута за ' + Math.ceil(getTargetMonth()) + ' месяцев');
  } else {
    console.log('Цель не будет достигнута');
  }
};

const getStatusIncome = function(){
  if (budgetDay >= 1200) {
    return ('У вас высокий уровень дохода');
  } else if (budgetDay > 600 && budgetDay < 1200) {
    return ('У вас средний уровень дохода');
  } else if (budgetDay >=0 && budgetDay <= 600 ) {
    return ('К сожалению у вас уровень дохода ниже среднего');
  } else {
    return ('Что то пошло не так');
  }
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);
console.log(expenses);
console.log('Расходы за месяц:' + expensesAmount);
console.log(addExpenses.toLowerCase().split(' ') );
console.log('Бюджет на месяц: ' + accumulatedMonth);
typeOfMission();
console.log('Бюджет на день: ' + Math.floor(budgetDay));
console.log(getStatusIncome());