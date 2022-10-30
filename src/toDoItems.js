import "./toDoItems.css";
import {format, formatISO, isSameWeek, isThisWeek, parseISO } from 'date-fns'
import { checkTheDate } from "./dateCheck";

export const toDoItem = (title, dueDate, priority, description, changeDate) => {
    let div = document.createElement("div");
    let divTitle = document.createElement("h2");
    let divDueDate = document.createElement("div");
    let divPriority = document.createElement("div");
    let divGetDueDate = document.createElement("input");
    let divSubContainer = document.createElement("div");

    let date;
    let formattedDate;
    let today;
    let thisWeek;
    let duplicated = false;

    divDueDate.id = "due-date";
    div.id = "container";
    divTitle.id = "title";
    divSubContainer.id = "subcontainer";
    divPriority.id = "priority";

    const todayWeekDetermine = (changeDate) => {
        if(format(parseISO(changeDate), "MM/dd/yyyy") == format(new Date(), "MM/dd/yyyy")){
            today = true;
        }
        else{
            today = false;
        }
        if(isSameWeek(new Date(), new Date(formattedDate))){
            thisWeek = true;
        }
        else{
            thisWeek = false;
        }        
    }

    const makeDuplicatedTrue = () => {
        duplicated = true;
    }
    
    const changeTheDate = (newDate) => {
        divGetDueDate.value = "";
        formattedDate = newDate;
        divDueDate.innerText = formattedDate;
    }

    const getTheDate = () => {
        let holdThis = divGetDueDate.value;
        date = divGetDueDate.value;
        let placeholder = parseISO(divGetDueDate.value);
        divGetDueDate.value = "";
        formattedDate = format(placeholder, "MM/dd/yyyy");
        divDueDate.innerText = formattedDate;
        divDueDate.addEventListener('click', addGetDueDate);
        todayWeekDetermine(holdThis);

        checkTheDate(formattedDate, today, thisWeek, title, date);

    }

    const addGetDueDate = () => {
        divDueDate.removeEventListener('click', addGetDueDate);
        divDueDate.innerText = ""; 
        divDueDate.appendChild(divGetDueDate);
    }
    
    if(changeDate == undefined || changeDate == true){
    divGetDueDate.addEventListener('input', getTheDate)
    divDueDate.addEventListener('click', addGetDueDate)
    }

    divGetDueDate.type = "date";
    divTitle.innerText = title;

    if (dueDate == undefined || dueDate == ""){
        divDueDate.innerText = "date";
        today = false;
        thisWeek = false;
    }

    else{
        let placeholder = parseISO(dueDate);
        formattedDate = format(placeholder, "MM/dd/yyyy");
        divDueDate.innerText = formattedDate;
        todayWeekDetermine(dueDate);
    }

    divPriority.innerText = priority;

    div.appendChild(divTitle);
    div.appendChild(divSubContainer);
    divSubContainer.appendChild(divDueDate);
    divSubContainer.appendChild(divPriority);

    return{title, dueDate, priority, div, formattedDate, description, today, thisWeek, makeDuplicatedTrue, changeTheDate};
}