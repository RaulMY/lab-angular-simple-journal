import { Component, OnInit, OnChanges } from '@angular/core';
import { JournalService} from '../services/journal.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit{
  journals: Array<Object> = [];
  constructor(private journal: JournalService) { }

  ngOnInit() {
    this.journal.getList()
    .subscribe((journals) => {
      this.journals = journals;
    });
  };
}
