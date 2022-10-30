import { addTheItems, currentProject, today, week, removeItem } from ".";
import { projectForm } from "./projectForm";
import "./taskForm.css";
import { toDoItem } from "./toDoItems";
export const taskForm = (task) => {
    let deleteButton = document.createElement("div")

    deleteButton.innerText = "X";
    deleteButton.id = "form-delete-button";
    deleteButton.addEventListener("click", (e) => removeItem("form", e));

    let body = document.getElementById("body");
    let form = document.createElement("form");

    let headerDiv = document.createElement("input");
    let descriptionDiv = document.createElement("textarea");
    let priorityDiv = document.createElement("select");
    let dueDateDiv = document.createElement("input");
    let important = document.createElement("option");
    let somewhatImportant = document.createElement("option");
    let notImportant = document.createElement("option");
    let submit = document.createElement("input");

    let formDivs = document.createElement("div");
    let projectDiv = document.createElement("div");
    let taskDiv = document.createElement("div");

    projectDiv.innerText = "Project"
    taskDiv.innerText = "Task"

    form.appendChild(deleteButton);
    formDivs.appendChild(projectDiv);
    formDivs.appendChild(taskDiv);
    form.appendChild(formDivs);

    projectDiv.id = "project-div";
    taskDiv.id = "task-div";
    formDivs.id = "form-divs";

    let header;
    let description;
    let priority;
    let dueDate;

    dueDateDiv.type = "date";
    headerDiv.placeholder = "header";
    descriptionDiv.placeholder = "description";
    important.innerText ="Important"
    somewhatImportant.innerText = "Somewhat Important";
    notImportant.innerText = "Not Important";
    submit.innerText = "Submit";
    descriptionDiv.maxLength = 50;
    submit.type = "submit";
    submit.placeholder = "Submit"
    headerDiv.required = true;

    descriptionDiv.id = "form-description";
    headerDiv.id = "form-header";
    dueDateDiv.id = "form-due-date";
    priorityDiv.id = "form-priority";
    submit.id = "form-submit";

    priorityDiv.appendChild(important);
    priorityDiv.appendChild(somewhatImportant);
    priorityDiv.appendChild(notImportant);

    form.appendChild(headerDiv);
    form.appendChild(descriptionDiv);
    form.appendChild(priorityDiv);
    form.appendChild(dueDateDiv);
    form.appendChild(submit);


    form.id = "task-form";
    body.appendChild(form);

    const collectData = (e) => {
        e.preventDefault();
        let toDo = currentProject.toDoList;
        let detector;

        if(toDo.length != 0){
            detector = toDo.findIndex(x => x.title == headerDiv.value);
        }

        if(currentProject == today || currentProject == week){
            alert("you cannot add to this project");
        }
        else if(detector != -1 && toDo.length != 0){
            alert("you cannot have duplicate names");
        }
        else{
            header = headerDiv.value;
            dueDate = dueDateDiv.value;
            description = descriptionDiv.value;
            priority = priorityDiv.value;
            let toDo = toDoItem(header, dueDate, priority, description);
            body.removeChild(form);
            addTheItems(toDo, "task", dueDate);
        }

    }
    form.addEventListener("submit", collectData)

    projectDiv.addEventListener("mouseover", () => {
        projectDiv.style = "background-color:white; color:#d63b3f; cursor:pointer";
    })
    projectDiv.addEventListener("mouseout", () => {
        projectDiv.style = "background-color: none; color:white;";
    })

    projectDiv.addEventListener("click", () => {
        body.removeChild(form);
        projectForm();
    })

}