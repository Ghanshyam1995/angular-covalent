import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "app/home/home.component";
import { RegisterComponent } from "app/register/register.component";
import { ButtonsComponent } from "app/buttons/buttons.component";
import { LoginComponent } from "app/login/login.component";
import { CardComponent } from "app/card/card.component";
import { NotFoundComponent } from "app/not-found/not-found.component";
import { DashBoardComponent } from "app/dash-board/dash-board.component";

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
   {path:'dashboard',component:DashBoardComponent},
   {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
