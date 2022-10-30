import { addTheItems, currentProject, projectList, removeItem } from '.';
import './projectForm.css';
import { project } from './projects';
import { taskForm } from './taskForm';
export const projectForm = () => {
    let tempProject;

    let deleteButton = document.createElement("div")

    deleteButton.innerText = "X";
    deleteButton.id = "form-delete-button";
    deleteButton.addEventListener("click", (e) => removeItem("form", e));
    let body = document.getElementById("body");
    let projectForm = document.createElement("form");
    let projectName = document.createElement("input");
    let submit = document.createElement("input");
    let formDivs = document.createElement("div");

    let projectDiv = document.createElement("div");
    let taskDiv = document.createElement("div");

    submit.type = "submit";
    projectForm.id = "project-form";
    projectName.placeholder = "Project Name";
    projectName.id = "project-name";

    projectName.required = true;
    projectDiv.innerText = "Project"
    taskDiv.innerText = "Task"

    projectDiv.id = "project-div";
    taskDiv.id = "task-div";
    formDivs.id = "form-divs";

    body.appendChild(projectForm);
    projectForm.appendChild(deleteButton);
    projectForm.appendChild(projectName);
    projectForm.appendChild(submit);

    formDivs.appendChild(projectDiv);
    formDivs.appendChild(taskDiv);
    projectForm.appendChild(formDivs);

    taskDiv.addEventListener("mouseover", () => {
        taskDiv.style = "background-color:white; color:#d63b3f; cursor:pointer";
    })
    taskDiv.addEventListener("mouseout", () => {
        taskDiv.style = "background-color: none; color:white;";
    })

    taskDiv.addEventListener("click", () => {
        body.removeChild(projectForm);
        taskForm();
    })
    
    projectForm.addEventListener("submit", (e) => {
        e.preventDefault()
        let detector;
        if(projectList.length != 0){
            detector = projectList.findIndex(x => x.name == projectName.value);
        }


        tempProject = project(projectName.value);

        if(detector != -1 && projectList.length != 0){
            alert("No duplicate projects")
        }
        else{
        tempProject = project(projectName.value);
        body.removeChild(projectForm);
        addTheItems(tempProject, "project");
        }
    })


}
