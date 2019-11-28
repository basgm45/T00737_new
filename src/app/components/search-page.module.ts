import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPageComponent } from './search-page/search-page.component';
import { ResultListComponent } from './result-list/result-list.component';
import { AddEditComponent } from './add-edit/add-edit.component';
import { BrowserModule } from '@angular/platform-browser';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import {InputSwitchModule} from 'primeng/inputswitch';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {DropdownModule} from 'primeng/dropdown';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [SearchPageComponent, ResultListComponent, AddEditComponent],
  imports: [
    CommonModule,
     BrowserModule,
    InputTextModule,
    ButtonModule,
     ReactiveFormsModule,
    DropdownModule,
    TableModule,
    HttpClientModule,
    FormsModule,
    CalendarModule,
    InputSwitchModule,
    MessagesModule,
    MessageModule,
    AppRoutingModule 
   ],
  exports: [SearchPageComponent]
})
export class SearchPageModule { }
