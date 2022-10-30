import "./project.css";
import { format } from "date-fns";

export const project = (name) => {
    const addToList = (itemToAdd) => {
        toDoList.push(itemToAdd);
        divProject.appendChild(itemToAdd.div)
    }
    
    const removeFromList = (itemToRemove) => {
        let title = itemToRemove.title
        let remove = toDoList.findIndex(itemToRemove => title == itemToRemove.title);
        toDoList.splice(remove, 1);
        divProject.removeChild(itemToRemove.div);
    }
    
    let toDoList = [];

    let divProject = document.createElement("div");
    let divAdd = document.createElement("div");
    const ProjectName = document.createElement("div");
    ProjectName.innerText = name;
    ProjectName.className = "project-names";

    divAdd.id = "project-add";
    divProject.id = "project";

    divProject.appendChild(divAdd);

    return{ addToList, removeFromList, divProject, ProjectName, toDoList, name };
}