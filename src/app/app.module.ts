import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from "app/auth.service";
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { CovalentLayoutModule, CovalentLoadingModule, CovalentFileModule, CovalentSearchModule, CovalentStepsModule, CovalentPagingModule, CovalentDataTableModule, CovalentDialogsModule, CovalentMessageModule, CovalentExpansionPanelModule } from '@covalent/core';
import {MaterialModule} from "@angular/material";
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ButtonsComponent } from './buttons/buttons.component';
import { LoginComponent } from './login/login.component';
import { CardComponent } from './card/card.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    ButtonsComponent,
    LoginComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,CovalentLoadingModule,
    BrowserAnimationsModule ,CovalentExpansionPanelModule,
    CovalentFileModule,
    CovalentMessageModule,
    CovalentPagingModule,
    CovalentLayoutModule,
    CovalentStepsModule,CovalentDialogsModule,
    MaterialModule,CovalentSearchModule,
    CovalentHighlightModule,
    CovalentMarkdownModule,Ng2SmartTableModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,CovalentDataTableModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
