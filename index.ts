const message: string = "Initial console log to shoe it's working!";
console.log(message);

type Task = {
    kind: "task";
    content: string;
    id: number;
    status: "incomplete" | "complete";
    createdAt: Date;
}

type Birthday = {
    kind: "birthday";
    name: string;
    date: Date;
    id: number;
    createdAt: Date;
}

let index = 0;
let tasks: Array<Task | Birthday> = [];

function create(content: string): Task {
    let task: Task = {
        kind: "task",
        content,
        id: index++,
        status: "incomplete",
        createdAt: new Date(), 
    };
    tasks.push(task);
    return task;
}

function createBirthday(name: string, date: string): Birthday {
    let task: Birthday = {
        kind: "birthday",
        name: name,
        date: new Date(date),
        id: index++,
        createdAt: new Date(),
    };
    tasks.push(task);
    return task;
}

function complete(id: number) {
    let task = tasks.find((task) => task.id === id);
    if (task && task.kind === "task") task.status = "complete";
    // Birthdays don't have 'status'
}

function remove(id: number) {
    let index = tasks.findIndex((task) => task.id === id);
    if (index !== -1) tasks.splice(index, 1);
}

function list() {
    for (let task of tasks) {
        if (task.kind === "birthday") {
            let birthday = task.date.toLocaleDateString("en-GB");
            console.log("[*]" + task.name + " " + birthday);
        } else {
            let check = task.status === "complete" ? "[✔︎]" : "[ ]";
            console.log(check + task.content);
        }
    }
}

let task = create("Learn TypeScript");
create("Master TypeScript");
complete(0);
list();
