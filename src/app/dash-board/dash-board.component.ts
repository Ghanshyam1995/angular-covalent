import { Component, OnInit } from '@angular/core';
import {trigger,state,group ,animate,style,transition} from "@angular/animations";
@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css'],
  animations:[
    trigger('itemAnim',[
      transition(':enter', [
      style({transform: 'translateX(-100%)'}),
      animate(350)
    ]),
    transition(':leave', [
      group([
        animate('0.2s ease', style({
          transform: 'translate(150px,25px)'
        })),
        animate('0.5s 0.2s ease', style({
          opacity: 0
        }))
      ])
    ])
    ])
  ]
})
export class DashBoardComponent implements OnInit {
  items:any[]=[];
  constructor() { }

  ngOnInit() {
    
  }
  addItem(item)
  {
    if(item!='')
    this.items.push(item);
  }
 removeItem(item)
 {
   this.items.pop();
 }

}
