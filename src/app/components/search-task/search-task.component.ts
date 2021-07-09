import { Component, OnInit, Output, EventEmitter} from '@angular/core';
@Component({
  selector: 'app-search-task',
  templateUrl: './search-task.component.html',
  styleUrls: ['./search-task.component.scss']
})
export class SearchTaskComponent implements OnInit {
  @Output() keyUpSearch = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  search(query: string) {
    this.keyUpSearch.emit(query);
  }
}
