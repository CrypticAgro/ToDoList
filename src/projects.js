import "./project.css";

export const project = () => {
    let projectList = [];
    let divProject = document.createElement("div");

    divProject.id = "project";

    const addToList = (itemToAdd) => {
        projectList.push(itemToAdd);
        divProject.appendChild(itemToAdd.div)
    }
    const removeFromList = (itemToRemove) => {
        let title = itemToRemove.title
        let remove = projectList.findIndex(itemToRemove => title == itemToRemove.title);
        projectList.splice(remove, 1);
        divProject.removeChild(itemToRemove.div);
    }
    return{ addToList, removeFromList, divProject };
}