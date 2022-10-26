import "./toDoItems.css";
import {format, parseISO } from 'date-fns'

export const toDoItem = (title, description, dueDate, priority) => {
    let div = document.createElement("div");
    let divTitle = document.createElement("h3");
    let divDueDate = document.createElement("div");
    let divPriority = document.createElement("div");
    let divDescription = document.createElement("div");
    let divGetDueDate = document.createElement("input");

    const getTheDate = () => {
        let placeholder = parseISO(divGetDueDate.value);
        let formattedDate = format(placeholder, "MM/dd/yyyy");
        divDueDate.innerText = formattedDate;
        divDueDate.addEventListener('click', addGetDueDate)
    }

    const addGetDueDate = () => {
        divDueDate.removeEventListener('click', addGetDueDate)
        divDueDate.innerText = ""; 
        divDueDate.appendChild(divGetDueDate);
    }
    
    divGetDueDate.addEventListener('input', getTheDate)
    divDueDate.addEventListener('click', addGetDueDate)

    divGetDueDate.type = "date";
    divTitle.innerText = title;
    divDueDate.innerText = "placeholder";
    divPriority.innerText = priority;
    divDescription.innerText = description;

    div.appendChild(divTitle);
    div.appendChild(divDescription);
    div.appendChild(divDueDate);
    div.appendChild(divPriority);

    return{title, description, dueDate, priority, div};
}