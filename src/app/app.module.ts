import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { CommonTableComponent } from './common-table.component';

@NgModule({
	imports:      [
	BrowserModule,
	FormsModule
	],
	declarations: [
	AppComponent,
	CommonTableComponent
	],
	bootstrap:    [ AppComponent ]
})
export class AppModule { }
