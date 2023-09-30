"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fs_1 = __importDefault(require("node:fs"));
const readline_sync_1 = __importDefault(require("readline-sync"));
const FILENAME = 'debts.txt';
function isNumber(number) {
    return !Number.isNaN(number);
}
while (true) {
    const userInput = readline_sync_1.default.question('Who, and how much? ');
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
        node_fs_1.default.writeFile(FILENAME, userInput + '\n', { flag: 'a+' }, (error) => {
            if (error)
                return console.log('Error: ', error.message);
        });
    }
    else {
        console.log('Enter a number for the amount');
    }
}
function utangList() {
    console.log('x-------------------------------------x');
    console.log('List of debtors and what they owe:');
    node_fs_1.default.readFile('debts.txt', (error, data) => {
        if (error) {
            console.log(error.message);
        }
        else {
            console.log(data.toString());
            console.log('x-------------------------------------x');
        }
    });
}
utangList();
