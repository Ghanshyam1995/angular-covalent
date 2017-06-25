import { Injectable } from "@angular/core";
import {Subject ,Observable} from "rxjs";
import {Loader} from "./loader/loader";

@Injectable()
export class LoaderService{
 
 private loader = new Subject<Loader>();
  Loader=this.loader.asObservable();
 constructor(){
  
 }

    ShowLoader(){
      return this.loader.next(<Loader>{show :true});
    }

    HideLoader()
    {
        debugger
        return this.loader.next(<Loader>{show :false});
    }
}