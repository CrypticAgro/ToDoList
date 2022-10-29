import { project } from "./projects";
import { taskForm } from "./taskForm";
import { projectForm } from "./projectForm";
import { addToInbox, addToToday, addToWeek } from "./dateCheck";
import { toDoItem } from "./toDoItems";

const projectList = [];
const sidebar = document.getElementById("sidebar");
const modules = document.getElementById("modules");
let inbox = project("Inbox");
let today = project("Today");
let week = project("Week");

inbox.ProjectName.addEventListener("click", () => changeCurrentProject(inbox));
today.ProjectName.addEventListener("click", () => changeCurrentProject(today));
week.ProjectName.addEventListener("click", () => changeCurrentProject(week));

let topSidebarDiv = document.createElement("div");
let addDivButton = document.createElement("button");
let currentProject = inbox;

let bottomSidebarDivTitle = document.createElement("div");
let bottomSidebarDiv = document.createElement("div");

bottomSidebarDivTitle.innerText = "Projects";

currentProject.ProjectName.style = "background-color: #d63b3f; color:white;";

topSidebarDiv.appendChild(inbox.ProjectName);
topSidebarDiv.appendChild(today.ProjectName);
topSidebarDiv.appendChild(week.ProjectName);

modules.appendChild(currentProject.divProject);
sidebar.appendChild(topSidebarDiv);
sidebar.appendChild(bottomSidebarDivTitle);
sidebar.appendChild(bottomSidebarDiv);

topSidebarDiv.id = "top-side-bar";
bottomSidebarDiv.id = "bottom-side-bar";
bottomSidebarDivTitle.id = "bottom-side-bar-title";

addDivButton.innerText = "+";
addDivButton.addEventListener("click", () => projectForm());
addDivButton.id = "project-button-adder";
sidebar.appendChild(addDivButton);

const changeCurrentProject = (item) => {
    modules.removeChild(currentProject.divProject);
    currentProject.ProjectName.style = "background-color: white; color: #d63b3f;";
    currentProject = item;
    modules.appendChild(currentProject.divProject);
    currentProject.ProjectName.style = "background-color: #d63b3f; color:white;";
}

const addTheItems = (item, projectOrTask, time) => {
    if(projectOrTask == "project"){
        projectList.push(item);
        bottomSidebarDiv.appendChild(item.ProjectName);
        item.ProjectName.addEventListener("click", (e) => {e.stopPropagation; changeCurrentProject(item)});

    }
    else if(projectOrTask == "task"){
        currentProject.addToList(item);
        if(item.today == true){
            item.duplicated = true;
            let placeholder = addToToday(item, time);
            today.addToList(placeholder);
            let placeholderTwo = addToWeek(item, time);
            week.addToList(placeholderTwo);
            let placeholderThree = addToInbox(item, time);
            inbox.addToList(placeholderThree);
        }
        else if(item.week == true){
            item.duplicated = true;
            let placeholder = addToWeek(item, time);
            week.addToList(placeholder);
            let placeholderTwo = addToInbox(item, time);
            inbox.addToList(placeholderTwo);
        }
        else if(currentProject == inbox){
            currentProject.removeFromList(item);
            let placeholder = toDoItem(item.title, time , item.priority, item.description);
            inbox.addToList(placeholder);
        }
        else{
            item.duplicated = true;
            console.log(item)
            let placeholder = addToInbox(item, time);
            inbox.addToList(placeholder);
        }

    }
}
export {addTheItems, currentProject, today, week};