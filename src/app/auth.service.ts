import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  Users :any[]
  onstructor() { 
    this.Users=[{
      Name:'Ghanshyam Singh',Email:'ghanshyam3303@gmail.com',password:'ghanshyam1995'
    },{
      Name:'Laxman Singh',Email:'laxman.singh12@gmail.com',password:'claxx@cs1.6'
    }]
  }

}
