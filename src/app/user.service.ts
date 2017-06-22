import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class UserService {

  constructor(public _http:Http) { }

  GetUsers()
  {
    return this._http.get("/account/GetUser");
  }

}
