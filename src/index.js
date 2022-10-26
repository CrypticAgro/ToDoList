import { toDoItem } from "./toDoItems";

let task = document.getElementById("tasks");

const thing = toDoItem("wassup","wassup this is a description of my item","wassup","important");
const thing2 = toDoItem("wassup","wassup this is a description of my item","wassup","important");
task.appendChild(thing.div);
task.appendChild(thing2.div);