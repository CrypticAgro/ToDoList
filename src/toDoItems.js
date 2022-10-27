import "./toDoItems.css";
import {format, parseISO } from 'date-fns'

export const toDoItem = (title, dueDate, priority) => {
    let div = document.createElement("div");
    let divTitle = document.createElement("h2");
    let divDueDate = document.createElement("div");
    let divPriority = document.createElement("div");
    let divGetDueDate = document.createElement("input");
    let divSubContainer = document.createElement("div");

    divDueDate.id = "due-date";
    div.id = "container";
    divTitle.id = "title";
    divSubContainer.id = "subcontainer";

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
    divDueDate.innerText = "select date";
    divPriority.innerText = priority;

    div.appendChild(divTitle);
    div.appendChild(divSubContainer);
    divSubContainer.appendChild(divDueDate);
    divSubContainer.appendChild(divPriority);

    return{title, dueDate, priority, div};
}