import { toDoItem } from "./toDoItems";
import { project } from "./projects";

const task = project();
const thing = toDoItem("wassaauasssdp", "wassup","important");
const thing2 = toDoItem("wassaassssasdup","wassup","important");

let ate = project();
ate.addToList(thing);
ate.addToList(thing2);
document.getElementById("modules").appendChild(ate.divProject);

ate.removeFromList(thing2)