import { addTheItems } from '.';
import './projectForm.css';
import { project } from './projects';
import { taskForm } from './taskForm';
export const projectForm = () => {
    let tempProject;

    let body = document.getElementById("body")
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
        tempProject = project(projectName.value);
        if(false == true){
            
        }
        else{
        body.removeChild(projectForm);
        addTheItems(tempProject, "project");
        }
    })


}