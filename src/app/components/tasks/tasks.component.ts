import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Observable, Subscription, Subject} from 'rxjs';
import { Task } from '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks : Task[] = [];
  queryString: string = '';
  subscription: Subscription;

  constructor(private taskService: TaskService) {
    this.subscription = this.taskService
      .onSearch()
      .subscribe(query => {
        this.queryString = query;
        this.searchTask(query);
      });
  }

  ngOnInit(): void {
   this.taskService.getTasks()
     .subscribe(tasks => this.tasks = tasks);
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task)
    .subscribe(() => this.tasks = this.tasks.filter(t => t.id !== task.id));
  }

  reminderTask(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTask(task).subscribe();
  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe((task) => {
      this.tasks.push(task);
    });
  }

  searchTask(query: string) {
    this.taskService.searchTask(query)
     .subscribe(tasks => this.tasks = tasks);
  }
}
