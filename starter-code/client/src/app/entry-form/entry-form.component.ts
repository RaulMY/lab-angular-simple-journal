import { Component, OnInit} from '@angular/core';
import { JournalService} from '../services/journal.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css']
})
export class EntryFormComponent implements OnInit{
  title = '';
  content = '';
  newOb = {};
  constructor(private journal: JournalService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  };
  addEntry() {
      this.newOb = {
        title: this.title,
        content: this.content
      };
      this.journal.createEntry(this.newOb).subscribe(res => this.router.navigate(['']));
  }
}
