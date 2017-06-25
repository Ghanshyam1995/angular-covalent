import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { LoaderService } from "app/loader.service";

@Injectable()
export class UserService {

  constructor(public _http: Http, public loaderService: LoaderService) { }

  GetUsers() {
    debugger
    this.loaderService.ShowLoader();
    return this._http.get("/account/GetUser").finally(() => {
      debugger
      this.onEnd();
    });
  }

  onEnd() {
    debugger
    this.loaderService.HideLoader();
  }
}
