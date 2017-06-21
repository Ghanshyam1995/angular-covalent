import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
imr_src:string;
 files: any;
  disabled: boolean = false;
 
  constructor() {
    this.imr_src="../../../assets/images/dummy_profile.png";
   }

  ngOnInit() {
  }
  

}
