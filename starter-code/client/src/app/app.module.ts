import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { EntryListComponent } from './entry-list/entry-list.component';
import { SingleEntryComponent } from './single-entry/single-entry.component';
import { EntryFormComponent } from './entry-form/entry-form.component';
import { JournalService } from './services/journal.service';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: EntryListComponent },
  { path: 'new',  component: EntryFormComponent },
  { path: ':id',  component: SingleEntryComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    EntryListComponent,
    SingleEntryComponent,
    EntryFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [JournalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
