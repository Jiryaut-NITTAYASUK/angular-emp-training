import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core'; 
import { ReactiveFormsModule } from '@angular/forms';

import { UserPageComponent } from './user-page/user-page.component';
import { UserModelComponent } from './user-model/user-model.component';
import { AppComponent } from './app.component';
import { UserTableComponent } from './user-table/user-table.component'





@NgModule({
  declarations: [
    AppComponent,
    UserTableComponent,
    UserPageComponent,
    UserModelComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ],
  providers: [ 
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
