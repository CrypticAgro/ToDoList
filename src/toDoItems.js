import "./toDoItems.css";
import {format, parseISO } from 'date-fns'
import { checkTheDate } from "./dateCheck";

export const toDoItem = (title, dueDate, priority, description) => {
    let div = document.createElement("div");
    let divTitle = document.createElement("h2");
    let divDueDate = document.createElement("div");
    let divPriority = document.createElement("div");
    let divGetDueDate = document.createElement("input");
    let divSubContainer = document.createElement("div");

    let formattedDate;
    let today;
    let thisWeek;
    let duplicated;
    
    divDueDate.id = "due-date";
    div.id = "container";
    divTitle.id = "title";
    divSubContainer.id = "subcontainer";

    const getTheDate = () => {
        let placeholder = parseISO(divGetDueDate.value);
        let formattedDate = format(placeholder, "MM/dd/yyyy");
        divDueDate.innerText = formattedDate;
        divDueDate.addEventListener('click', addGetDueDate);
        if (duplicated == true){
        checkTheDate(dueDate, formattedDate);
        }
        else if(duplicated == false){
            console.log("fml")
        }
    }

    const addGetDueDate = () => {
        divDueDate.removeEventListener('click', addGetDueDate);
        divDueDate.innerText = ""; 
        divDueDate.appendChild(divGetDueDate);
    }
    
    divGetDueDate.addEventListener('input', getTheDate)
    divDueDate.addEventListener('click', addGetDueDate)

    divGetDueDate.type = "date";
    divTitle.innerText = title;

    if (dueDate == undefined || dueDate == ""){
        divDueDate.innerText = "select date";
    }

    else{
        let placeholder = parseISO(dueDate);
        formattedDate = format(placeholder, "MM/dd/yyyy");
        divDueDate.innerText = formattedDate;
    }
    
    if(formattedDate == format(new Date(), "MM/dd/yyyy")){
        today = true;
        thisWeek = true;

    }

    else{
        today = false;
        thisWeek = false;
    }

    divPriority.innerText = priority;

    div.appendChild(divTitle);
    div.appendChild(divSubContainer);
    divSubContainer.appendChild(divDueDate);
    divSubContainer.appendChild(divPriority);

    return{title, dueDate, priority, div, formattedDate, description, today, thisWeek, duplicated};
}