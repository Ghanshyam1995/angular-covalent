import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "app/home/home.component";
import { RegisterComponent } from "app/register/register.component";
import { ButtonsComponent } from "app/buttons/buttons.component";
import { LoginComponent } from "app/login/login.component";
import { CardComponent } from "app/card/card.component";

const routes: Routes = [
  {
    path: '',redirectTo:'home',pathMatch:'full'
   
  },
  {
    path:'home',component:HomeComponent
  },
  {path:'signup',component:RegisterComponent},
   {path:'buttons',component:ButtonsComponent},
   {path:'login',component:LoginComponent},
   {path:'card',component:CardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
