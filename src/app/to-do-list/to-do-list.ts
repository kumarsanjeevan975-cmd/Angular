import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do-list',
  imports: [FormsModule ],
  templateUrl: './to-do-list.html',
  styleUrl: './to-do-list.css',
})
export class ToDoList {
    todo="";
    taskList:{id:number,todo:string}[]=[]

    addtask()
    {
      this.taskList.push({id:this.taskList.length+1,todo:this.todo});
      this.todo='';
      console.log(this.taskList);
    }

    deletetask(taskId:number)
    {
      this.taskList=this.taskList.filter((item)=>item.id!=taskId);
    }
}
