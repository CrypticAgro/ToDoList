import { toDoItem } from "./toDoItems";

const addToToday = (item, time) => {
    let placeholder = toDoItem(item.title, time , item.priority, item.description);
    placeholder.duplicatedTime = item.formattedDate;
    placeholder.duplicated = true;
    return placeholder;
}
const addToWeek = (item, time) => {
    let placeholder = toDoItem(item.title, time , item.priority, item.description);
    placeholder.duplicatedTime = item.formattedDate;
    placeholder.duplicated = true;
    return placeholder;
    //item.title, time , item.priority, item.description
}
const addToInbox = (item, time) => {
    let placeholder = toDoItem(item.title, time , item.priority, item.description);
    placeholder.duplicatedTime = item.formattedDate;
    placeholder.duplicated = true;
    return placeholder;
}
const checkTheDate = (oldDate, newDate) => {
    console.log("I work")
}
export {addToToday, addToWeek, addToInbox, checkTheDate}