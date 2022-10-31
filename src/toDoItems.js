import "./toDoItems.css";
import {format, formatISO, isSameWeek, isThisWeek, parseISO } from 'date-fns'
import { currentProject, removeItem } from ".";

export const toDoItem = (title, dueDate, priority, description, parentProjectName) => {
    let div = document.createElement("div");
    let divTitle = document.createElement("h2");
    let divDueDate = document.createElement("div");
    let divPriority = document.createElement("div");
    let divGetDueDate = document.createElement("input");
    let divSubContainer = document.createElement("div");
    let formattedDate;


    let deleteButton = document.createElement("div")

    deleteButton.innerText = "X";
    deleteButton.id = "to-do-delete-button";
    deleteButton.addEventListener("click", (e) => removeItem("ToDo", e));
    
    divDueDate.id = "due-date";
    div.id = "container";
    divTitle.id = "title";
    divSubContainer.id = "subcontainer";
    divPriority.id = "priority";

    if(dueDate != ""){
        divDueDate.innerText = dueDate;
    }
    else{
    divDueDate.innerText = "date";
    }

    const getTheDate = () => {
        let placeholder = parseISO(divGetDueDate.value);
        divGetDueDate.value = "";
        formattedDate = format(placeholder, "MM/dd/yyyy");
        divDueDate.innerText = formattedDate;
        dueDate = formattedDate;
        placeholder = (JSON.parse(localStorage.getItem(currentProject.name + "ToDoList")));
        let index = currentProject.toDoList.findIndex(x => x.title = title)
        index = currentProject.toDoList[index];
        index.dueDate = dueDate;
        localStorage.setItem(currentProject.name + "ToDoList", JSON.stringify(currentProject.toDoList));
        divDueDate.addEventListener('click', addGetDueDate);

    }

    const addGetDueDate = () => {
        divDueDate.removeEventListener('click', addGetDueDate);
        divDueDate.innerText = ""; 
        divDueDate.appendChild(divGetDueDate);
    }
    
    divGetDueDate.addEventListener('input', getTheDate);
    divDueDate.addEventListener('click', addGetDueDate);

    divGetDueDate.type = "date";
    divTitle.innerText = title;

    divPriority.innerText = priority;

    div.appendChild(divTitle);
    div.appendChild(divSubContainer);
    divSubContainer.appendChild(divDueDate);
    divSubContainer.appendChild(divPriority);
    div.appendChild(deleteButton);


    return{title, dueDate, priority, div, formattedDate, description, parentProjectName};
}