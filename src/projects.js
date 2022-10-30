import "./project.css";
import { format } from "date-fns";
import { removeItem } from ".";

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

    let deleteButton = document.createElement("div")

    deleteButton.innerText = "remove";
    deleteButton.id = "project-delete-button";
    deleteButton.addEventListener("click", (e) => removeItem("project", e));

    divAdd.id = "project-add";
    divProject.id = "project";

    divProject.appendChild(divAdd);

    return{ addToList, removeFromList, divProject, ProjectName, toDoList, name, deleteButton };
}