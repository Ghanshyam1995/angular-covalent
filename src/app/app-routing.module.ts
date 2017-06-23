import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "app/home/home.component";
import { ButtonsComponent } from "app/buttons/buttons.component";
import { CardComponent } from "app/card/card.component";
import { NotFoundComponent } from "app/not-found/not-found.component";
import { DashBoardComponent } from "app/dash-board/dash-board.component";

const routes: Routes = [
  {
    path: '',redirectTo:'home',pathMatch:'full'
  },
  {
    path:'home',
    children:[
      {path:'',redirectTo:'index',pathMatch:'full'},
      {path:'index',component:HomeComponent},
      {path:'dashboard',component:DashBoardComponent}
    ]
  },
  {path:'pages',
   loadChildren:'./form/form.module#FormModule'
},
   {path:'buttons',component:ButtonsComponent},

   {path:'card',component:CardComponent},
   {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
