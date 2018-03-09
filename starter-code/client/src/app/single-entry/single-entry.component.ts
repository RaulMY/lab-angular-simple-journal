import { Component, OnInit } from '@angular/core';
import { JournalService} from '../services/journal.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})
export class SingleEntryComponent implements OnInit {
  entry= {};
  constructor(private journal: JournalService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .subscribe((params) => this.journal.getEntry(params['id'])
    .subscribe((entry) => {
      this.entry = entry;
    }));
  };

}
