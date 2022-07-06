var Tasks={
    john:["task1","task2","task3"],
    jane:["tasks4","task5","task6"],
    jim:["task7","task8","task9"],
    jill:["task10","task11","task12"]
}
var addtask = prompt("enter task")
var employe = prompt("enter employe name")
var employetask = Tasks[employe]
employetask.push(addtask)


console.log(Tasks[employe])
