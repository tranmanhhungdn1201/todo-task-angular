import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { TaskService } from '../../services/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  showAddTask: boolean = false;

  constructor(private taskService:TaskService, private uiService:UiService, private router:Router) { }

  ngOnInit(): void {
  }

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }

  keyUpSearchTask(query: string) {
    this.taskService.getTasksBySearch(query);
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }
}
