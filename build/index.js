"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const message = "Initial console log to shoe it's working!";
console.log(message);
let index = 0;
let tasks = [];
function create(content) {
    let task = {
        kind: "task",
        content,
        id: index++,
        status: "incomplete",
        createdAt: new Date(),
    };
    tasks.push(task);
    return task;
}
function createBirthday(name, date) {
    let task = {
        kind: "birthday",
        name: name,
        date: new Date(date),
        id: index++,
        createdAt: new Date(),
    };
    tasks.push(task);
    return task;
}
function complete(id) {
    let task = tasks.find((task) => task.id === id);
    if (task && task.kind === "task")
        task.status = "complete";
    // Birthdays don't have 'status'
}
function remove(id) {
    let index = tasks.findIndex((task) => task.id === id);
    if (index !== -1)
        tasks.splice(index, 1);
}
function list() {
    for (let task of tasks) {
        if (task.kind === "birthday") {
            let birthday = task.date.toLocaleDateString("en-GB");
            console.log("[*]" + task.name + " " + birthday);
        }
        else {
            let check = task.status === "complete" ? "[✔︎]" : "[ ]";
            console.log(check + task.content);
        }
    }
}
let task = create("Learn TypeScript");
create("Master TypeScript");
complete(0);
list();
