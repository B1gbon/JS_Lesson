let money = 15000;
let income = 'Фриланс';
let addExpenses = 'коммуналка, такси, гитара';
let deposit = 'true';
let mission = '500000';
let period = '11';
let budgetDay = money / 30;

console.log( 'Тип данных money: ' + typeof money );
console.log( 'Тип данных income: ' + typeof income );
console.log( 'Тип данных deposit: ' + typeof deposit );
console.log( 'длина addExpenses: ' + addExpenses.length );
console.log( 'Период равен ' + period + ' месяцев' );
console.log( 'Цель заработать ' + mission + ' рублей' );
console.log( addExpenses.toLowerCase().split(' ') );
console.log(budgetDay);