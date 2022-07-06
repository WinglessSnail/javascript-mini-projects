var ToDo=[
    {id:1 , title:"title 1",descripton: "task 1" , status:false},
    {id:2 , title:"title 2",descripton: "task 2" , status:false},
    {id:3 , title:"title 3",descripton: "task 3" , status:true},
]

var usermenu = prompt(" 1. Add task\n 2. Delete task\n 3. Update status\n 4. Show all tasks ")
switch(usermenu){
    case "1":
        var addTitle = prompt("Enter title")
        var newTitle =
            {id:ToDo.length+1,
            title:addTitle,
            descripton: "task 4",
            status:false}
        ToDo.push(newTitle)
        break;
    case "2":
        var deleteTaks= prompt("Enter title to delete")
        var Remmove=ToDo.findIndex(function (todo){
            return todo.title === deleteTaks
        })
        ToDo.splice(Remmove,1)
        break;
    case "3":
        var status= prompt("Enter title to update status")
        var statusUpdate=ToDo.findIndex(function (todo){
            if(todo.title === status){
                return todo.status = !todo.status} })
        break;
    case "4":
        console.log(ToDo)
        break;
    default:
        break;
}
console.log(ToDo)