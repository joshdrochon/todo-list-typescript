//this:
/*class Task
{
  done: boolean;
  description: string;
  priority: string;

  //this:
  constructor(description: string, priority: string)
  {
    this.done = false;
    this.description = description;
    this.priority = priority;
  }
}*/
/* becomes... (by simply including public in front of each parameter and making sure
each parameter matches each property verbatum) TS will generate properties behind the scenes*/
var Task = /** @class */ (function () {
    function Task(description, priority) {
        this.description = description;
        this.priority = priority;
        //propertyName: type = defaultVal;
        this.done = false;
    }
    Task.prototype.markDone = function () {
        this.done = true;
    };
    Task.prototype.getPriority = function () {
        return this.priority;
    };
    Task.avgPriority = function () {
        var counter = 0;
        for (var _i = 0, tasks_1 = tasks; _i < tasks_1.length; _i++) {
            var task = tasks_1[_i];
            counter += task.getPriority();
        }
        return Math.round(counter / tasks.length);
    };
    return Task;
}());
//array that will take only Task objects
var tasks = [];
for (var i = 0; i < 3; i++) {
    var newTask = prompt("What's something you need to do?");
    var newPriority = parseInt(prompt("How important is it?"));
    var completed = prompt("Have you completed this task already?");
    tasks.push(new Task(newTask, newPriority));
    if (completed.toUpperCase() == "YES") {
        tasks[i].markDone();
    }
}
for (var _i = 0, tasks_2 = tasks; _i < tasks_2.length; _i++) {
    var task = tasks_2[_i];
    console.log(tasks);
}
console.log(Task.avgPriority());
