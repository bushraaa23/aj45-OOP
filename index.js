import inquirer from "inquirer";
class Student {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Person {
    students = [];
    addStudent(std) {
        this.students.push(std);
    }
}
const pers = new Person();
const start = async (pre) => {
    console.log("Welcome ");
    const ans = await inquirer.prompt({
        type: "list",
        message: "with whom you want to talk",
        name: "inp",
        choices: ["self", "students"],
    });
    if (ans.inp == "self") {
        console.log("hi you are talking to your self");
        console.log("i am fine");
    }
    else {
        const inp = await inquirer.prompt({
            type: "input",
            name: "std",
            message: "are you wating for",
        });
        const isthere = pre.students.find(val => val.name == inp.std);
        if (!isthere) {
            const n1 = new Student(inp.std);
            pre.addStudent(n1);
        }
        else {
        }
    }
};
start(pers);
