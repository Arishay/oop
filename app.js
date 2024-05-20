#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    students = [];
    addStudent(object) {
        this.students.push(object);
    }
}
let person = new Person();
let programStart = async (person) => {
    do {
        console.log(chalk.bold.italic.cyanBright("\n\t****______**** Welcome to -__- Arisha Ghaffar's -__-  object Oriented Program ****______****\n\t"));
        let answer = await inquirer.prompt({
            name: "Select",
            type: "list",
            message: "Who would you prefer to interact with?",
            choices: ["staff", "student", "exit"]
        });
        if (answer.Select === "staff") {
            console.log(chalk.italic.yellowBright("You walk over to the staff area.Please don't hesitate to ask any questions."));
        }
        else if (answer.Select === "student") {
            let answer = await inquirer.prompt({
                name: "student",
                type: "input",
                message: "Enter the student's name"
            });
            let student = person.students.find(value => value.name === answer.student);
            if (!student) {
                let name = new Student(answer.student);
                person.addStudent(name);
                console.log(chalk.bold.italic.yellowBright(`Hello I am ${name.name}.Nice to meet you!`));
                console.log(chalk.bold.italic.greenBright("New student Added"));
                console.log(chalk.bold.italic.cyanBright("Current student list:"));
                console.log(person.students);
            }
            else {
                console.log(chalk.italic.red(`Hello I am ${student.name}`));
                console.log(chalk.bold.greenBright("Existing Students list:"));
                console.log(person.students);
            }
        }
        else if (answer.Select === "exit") {
            console.log(chalk.bold.italic.yellowBright("Exiting the Program..."));
            process.exit();
        }
    } while (true);
};
programStart(person);
