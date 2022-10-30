import { project } from "./projects";
import { taskForm } from "./taskForm";
import { projectForm } from "./projectForm";
import { addToToday, addToWeek } from "./dateCheck";
import { toDoItem, makeDuplicatedTrue } from "./toDoItems";

const projectList = [];
const sidebar = document.getElementById("sidebar");
const modules = document.getElementById("modules");
let today = project("Today");
let week = project("This week");

projectList.push(today);
projectList.push(week);

today.ProjectName.addEventListener("click", () => changeCurrentProject(today));
week.ProjectName.addEventListener("click", () => changeCurrentProject(week));

let topSidebarDiv = document.createElement("div");
let addDivButton = document.createElement("button");
let currentProject = today;

let bottomSidebarDivTitle = document.createElement("div");
let bottomSidebarDiv = document.createElement("div");

bottomSidebarDivTitle.innerText = "Projects";

currentProject.ProjectName.style = "background-color: #d63b3f; color:white;";

topSidebarDiv.appendChild(today.ProjectName);
topSidebarDiv.appendChild(week.ProjectName);

modules.appendChild(currentProject.divProject);
sidebar.appendChild(topSidebarDiv);
sidebar.appendChild(bottomSidebarDivTitle);
sidebar.appendChild(bottomSidebarDiv);

topSidebarDiv.id = "top-side-bar";
bottomSidebarDiv.id = "bottom-side-bar";
bottomSidebarDivTitle.id = "bottom-side-bar-title";

const getProjectForm = () => {
    document.getElementById("project-button-adder").removeEventListener("click", getProjectForm);
    projectForm();
}
addDivButton.innerText = "+";
addDivButton.addEventListener("click", getProjectForm);
addDivButton.id = "project-button-adder";
sidebar.appendChild(addDivButton);

const changeCurrentProject = (item) => {
    if (currentProject.divProject != undefined){
    modules.removeChild(currentProject.divProject);
    currentProject.ProjectName.style = "background-color: white; color: #d63b3f;";
    currentProject = item;
    modules.appendChild(currentProject.divProject);
    currentProject.ProjectName.style = "background-color: #d63b3f; color:white;";
    }
}

const addTheItems = (item, projectOrTask, time) => {
    addDivButton.addEventListener("click", getProjectForm);
    if(projectOrTask == "project"){
        projectList.push(item);
        bottomSidebarDiv.appendChild(item.ProjectName);
        bottomSidebarDiv.appendChild(item.deleteButton);
        item.ProjectName.addEventListener("click", (e) => {e.stopPropagation; changeCurrentProject(item)});

    }
    else if(projectOrTask == "task"){
        currentProject.addToList(item);
        if(item.today == true){
            item.makeDuplicatedTrue();
            let placeholder = addToToday(item, time);
            today.addToList(placeholder);
            let placeholderTwo = addToWeek(item, time);
            week.addToList(placeholderTwo);

        }
        else if(item.thisWeek == true){
            item.makeDuplicatedTrue();
            let placeholder = addToWeek(item, time);
            week.addToList(placeholder);
        }

    }
}
const removeItem = (type, e) => {
    if(type == "form"){
        body.removeChild(e.target.parentNode);
        addDivButton.addEventListener("click", getProjectForm);
    }
    if(type == "ToDo"){
        let name = e.target.previousElementSibling.previousElementSibling.innerText;
        let check = currentProject.toDoList.findIndex(x => x.title == name);
        check = currentProject.toDoList[check];
        currentProject.removeFromList(check);
        let x = today.toDoList.findIndex(x => x.title == check.title);

        switch(x){
            case -1:
                break;
            default:
                x = today.toDoList[x];
                today.removeFromList(x);
                break;
        }

        let y = week.toDoList.findIndex(x => x.title == check.title);
        switch(y){
            case -1:
                break;
            default:
                y = week.toDoList[y];
                week.removeFromList(y);
                break;
        }
    }
    if(type == "project"){
        let name = e.target.previousElementSibling.innerText;
        let check = projectList.findIndex(x => x.name == name);
        let check2 = projectList[check];
        projectList.splice(check, 1);
        bottomSidebarDiv.removeChild(check2.ProjectName);
        bottomSidebarDiv.removeChild(e.target);
    }
}
export {addTheItems, currentProject, today, week, projectList, removeItem};