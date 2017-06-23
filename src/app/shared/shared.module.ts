import {NgModule} from "@angular/core";
import { MaterialModule } from "@angular/material";
import { ReactiveFormsModule,FormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { CommonModule } from "@angular/common";

@NgModule({
 imports:
    [
        CommonModule,
        MaterialModule,
        FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule
    ],
 declarations:[
     
 ],
 exports:[],
 providers:[],
 bootstrap:[],
 entryComponents:[]

})

export class SharedModule{}