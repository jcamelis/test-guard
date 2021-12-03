import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogContentComponent } from './components/dialog-content/dialog-content.component';
import { HomeComponent } from './components/home/home.component';
import { NoAuthComponent } from './components/no-auth/no-auth.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DialogContentComponent,
    NoAuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
