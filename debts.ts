// Chad Denard Andrada, SE2134 Lab 1

import fs from 'node:fs';

import readLineSync from 'readline-sync';

const FILENAME = 'debts.txt';

function isNumber(number: number): boolean {
  return !Number.isNaN(number);
}

while (true) {
  const userInput = readLineSync.question('Who, and how much? ');

  if (userInput.toLowerCase() === 'done') {
    break;
  }

  if (!userInput.includes(' ')) {
    console.log('Wrong format');
    continue;
  }

  const [name, amountString] = userInput.split(' ');
  const amount = Number(amountString);

  if (isNumber(amount)) {
    fs.writeFile(FILENAME, userInput + '\n', { flag: 'a+' }, (error) => {
      if (error) return console.log('Error: ', error.message);
    });
  } else {
    console.log('Enter a number for the amount');
  }
}

function utangList() {
  console.log('x-------------------------------------x');
  console.log('List of debtors and what they owe:');
  fs.readFile('debts.txt', (error, data) => {
    if (error) {
      console.log(error.message);
    } else {
      console.log(data.toString());
      console.log('x-------------------------------------x');
    }
  })
}

utangList();