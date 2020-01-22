import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatGridListModule,MatListModule,MatTableModule,MatCardModule,MatMenuModule,MatSidenavModule,MatIconModule,MatToolbarModule,MatSnackBarModule,MatInputModule,MatButtonModule,MatPaginatorModule,MatCheckboxModule,MatSortModule,MatDialogModule } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { GlobalComponent } from './global/global.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    GlobalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
