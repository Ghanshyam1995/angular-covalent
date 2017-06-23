import {NgModule} from "@angular/core";
import {FormComponent} from "./form.component";
import { CommonModule } from '@angular/common';
import { LoginComponent } from "app/login/login.component";
import { RegisterComponent } from "app/register/register.component";
import { FormRouting } from "app/form/form.route";
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
    imports:[
        CommonModule,FormsModule,
        MaterialModule,ReactiveFormsModule,FlexLayoutModule,
        FormRouting,
        ],
    declarations:[
        FormComponent,
        LoginComponent,
        RegisterComponent
    ]
    
})
export class FormModule{}