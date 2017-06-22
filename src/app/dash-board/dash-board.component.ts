import { Component, OnInit } from '@angular/core';
import {trigger,state,animate,style,transition} from "@angular/animations"
@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css'],
  animations:[
    trigger('sliderAnimation',[
       transition(':enter',[
         style({transform: 'translateX(100%)','zIndex':'0',opacity:0}),
         animate('1s ease-in-out', style({transform: 'translateX(0%)',opacity:1,zIndex:999}))
       ]),
        transition(':leave', [
        style({transform: 'translateX(0%)',opacity:1,zIndex:0}),
        animate('1s ease-in-out', style({transform: 'translateX(-100%)',zIndex:0}))
      ])
    ])
  ]
})
export class DashBoardComponent implements OnInit {

  constructor() { }
  showingImage:number=1;
  totalImages:number=3;
  ngOnInit() {
    setInterval(() => { 
          if(this.showingImage=3)
          this.showingImage=1;
          this.showingImage++;
     },5000);
  }
  NextImage()
  {
    debugger
    if(this.showingImage==3)
    this.showingImage=1;
    else
    this.showingImage++;
  }
  PrevImage(){
     if(this.showingImage==1)
    this.showingImage=3;
    else
    this.showingImage--;
  }

}
