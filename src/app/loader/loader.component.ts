import { Component, OnInit } from '@angular/core';
import { LoaderService } from "app/loader.service";

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
 showLoader=false;
  constructor(public loaderService:LoaderService) { }

  ngOnInit() {
    this.loaderService.Loader.subscribe((state)=>{
      
       this.showLoader=state.show;
      console.log(this.showLoader);
    
    });


  }

}
