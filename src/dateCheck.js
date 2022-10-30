import { projectList, week } from ".";
import { toDoItem } from "./toDoItems";
import { currentProject } from ".";

const addToToday = (item, time) => {
    let placeholder = toDoItem(item.title, time , item.priority, item.description, false);
    Object.setPrototypeOf(placeholder, item);
    placeholder.makeDuplicatedTrue();
    return placeholder;
}
const addToWeek = (item, time) => {
    let placeholder = toDoItem(item.title, time , item.priority, item.description, false);
    Object.setPrototypeOf(placeholder, item);
    placeholder.makeDuplicatedTrue();
    return placeholder;
}

const checkTheDate = (newDate, today, thisWeek, title, date) => {
    let check = currentProject.toDoList.findIndex(x => x.title = title);
    check = currentProject.toDoList[check];
    console.log(check.title)
    if(today == true){            
        let todayNumber = projectList.findIndex(x => x.name == "Today");
        let today = projectList[todayNumber];
        let weekNumber = projectList.findIndex(x => x.name == "This week");
        let week = projectList[weekNumber];

        let x = today.toDoList.findIndex(x => x.title == check.title);
        switch(x){
            case -1:
                let placeholder = addToToday(check, date);
                today.addToList(placeholder);
                break;
            default:
                x = today.toDoList[x];
                x.changeTheDate(newDate);
                break;
        }

        let y = week.toDoList.findIndex(x => x.title == check.title);
        switch(y){
            case -1:
                let placeholder = addToWeek(check, date);
                week.addToList(placeholder);
                break;
            default:
                y = week.toDoList[y];
                y.changeTheDate(newDate);
                break;
        }
    }

    else if(today == false && thisWeek == true){
        let todayNumber = projectList.findIndex(x => x.name == "Today");
        let today = projectList[todayNumber];

        let x = today.toDoList.findIndex(x => x.title == check.title);
        switch(x){
            case -1:
                break;
            default:
                x = today.toDoList[x];
                today.removeFromList(x);
                break;
        }

        let weekNumber = projectList.findIndex(x => x.name == "This week");
        let week = projectList[weekNumber];

        let y = week.toDoList.findIndex(x => x.title == check.title);
        switch(y){
            case -1:
                let placeholder = addToWeek(check, date);
                week.addToList(placeholder);
                break;
            default:
                y = week.toDoList[y];
                y.changeTheDate(newDate);
                break;
        }
    }
    
    else if(today != true && thisWeek != true){
        let todayNumber = projectList.findIndex(x => x.name == "Today");
        let today = projectList[todayNumber];
        let weekNumber = projectList.findIndex(x => x.name == "This week");
        let week = projectList[weekNumber];

        let x = today.toDoList.findIndex(x => x.title == check.title);
        console.log(check.title);
        switch(x){
            case -1:
                break;
            default:
                console.log(x);
                x = today.toDoList[x];
                console.log(x);
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
            
}
export {addToToday, addToWeek, checkTheDate}