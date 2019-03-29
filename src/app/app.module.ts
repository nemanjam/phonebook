import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';
import { ListNumbersComponent } from './list-numbers/list-numbers.component';
import { EditNumberComponent } from './edit-number/edit-number.component';
import { AddNumberComponent } from './add-number/add-number.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListNumbersComponent,
    EditNumberComponent,
    AddNumberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
