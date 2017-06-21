import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "app/home/home.component";
import { RegisterComponent } from "app/register/register.component";
import { ButtonsComponent } from "app/buttons/buttons.component";

const routes: Routes = [
  {
    path: '',redirectTo:'home',pathMatch:'full'
   
  },
  {
    path:'home',component:HomeComponent
  },
  {path:'signup',component:RegisterComponent},
   {path:'buttons',component:ButtonsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
