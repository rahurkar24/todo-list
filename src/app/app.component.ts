import { Component } from '@angular/core';
import { TASKS } from './mock-task';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks=TASKS;
  selectedTask= Task;
  
  onSelect(){
	  this.selectedTask=task;
  }
  
  addTask(newTask: string){
	  if(newTask){
		  this.tasks.push(newTask);
	  }
  }
}
