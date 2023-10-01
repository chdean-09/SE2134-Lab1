// Chad Denard Andrada, SE2134 Lab 1
// SOLUTION 2 - Using promise chains

import fs from 'node:fs/promises';

import readLineSync from 'readline-sync';

const FILENAME = './promise-chains/debts2.txt';

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

  console.log(`${name} successfully added!`);

  if (isNumber(amount)) {
    fs.writeFile(FILENAME, userInput + '\n', { flag: 'a+' })
      .catch((error) => {
        console.log('Error: ', error.message);
      });
  } else {
    console.log('Enter a number for the amount');
  }
}

function utangList() {
  console.log('x-------------------------------------x');
  console.log('List of debtors and what they owe:');
  fs.readFile(FILENAME, 'utf8')
    .then((data) => {
      console.log(data.toString());
      console.log('x-------------------------------------x')
    })
    .catch((error) => {
      console.log('An error occurred: ', error);
    })
}

utangList();