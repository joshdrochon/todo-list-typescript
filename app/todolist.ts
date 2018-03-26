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
class Task {
  //propertyName: type = defaultVal;
  done: boolean = false;

  constructor(public description: string, public priority: number){}

  markDone(){
    this.done = true;
  }

  getPriority(){
    return this.priority;
  }

  static avgPriority(){
    let counter: number = 0;
    for(let task of tasks){
      counter += task.getPriority();
    }
    return Math.round(counter/tasks.length);
  }

}

//array that will take only Task objects
let tasks: Task[] = [];

for(let i = 0; i < 3; i++){
  let newTask: string = prompt("What's something you need to do?");
  let newPriority: number = parseInt(prompt("How important is it?"));
  let completed: string = prompt("Have you completed this task already?");
  tasks.push(new Task(newTask, newPriority));
  if(completed.toUpperCase() == "YES"){
    tasks[i].markDone();
  }
}

for(let task of tasks){
  console.log(tasks);
}

console.log(Task.avgPriority());
