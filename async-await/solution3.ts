// Chad Denard Andrada, SE2134 Lab 1
// SOLUTION 3 - Using async/await

import fs from 'node:fs/promises';

import readLineSync from 'readline-sync';

const FILENAME = './async-await/debts3.txt';

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
    fs.writeFile(FILENAME, userInput + '\n', { flag: 'a+' });
  } else {
    console.log('Enter a number for the amount');
  }
}

async function utangList() {
  console.log('x-------------------------------------x');
  console.log('List of debtors and what they owe:');
  try {
    const data = await fs.readFile(FILENAME, 'utf8');
    console.log(data.toString());
  } catch(error) {
    console.log(error);
  }
}

utangList();