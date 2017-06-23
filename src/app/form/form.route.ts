import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from "app/register/register.component";
import { LoginComponent } from "app/login/login.component";
import { FormComponent } from "app/form/form.component";



const routes: Routes = [
  {
           path:'',component:FormComponent,children:[
           {path:'',redirectTo:'login',pathMatch:'full'},
        {
            path:'signup',component:RegisterComponent
        },
  {
      path:'login',component:LoginComponent},
  ]
  },

];
export const FormRouting: ModuleWithProviders = RouterModule.forChild(routes);
