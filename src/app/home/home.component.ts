import { Component, ViewContainerRef, OnInit, OnDestroy } from '@angular/core';
import { ITdDataTableColumn } from '@covalent/core'
import { IPageChangeEvent,TdDialogService , TdDataTableSortingOrder, ITdDataTableSortChangeEvent, TdDataTableService } from '@covalent/core';
import { UserService } from "app/user.service";
import * as rx from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  subscription: rx.Subscription;
  _viewContainerRef: any;
  ngOnInit(): void {
     this.userService.GetUsers().subscribe(res=>{
       console.log(res);
     });
     this.filter();
     this.filteredData= this.data;
     this.filteredTotal= this.data.length;

  }
  operation:boolean=false;
  constructor(public userService:UserService,private _dialogService: TdDialogService,private _dataTableService: TdDataTableService) {
    
  }
 sortBy: string = 'FirstName';
 searchTerm: string = '';

  sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Descending;
  disabled: boolean = false;
  fromRow: number = 1;
  currentPage: number = 1;
  pageSize: number = 5;
  selectedRows: any[] = [];
 User:any;

  uploadEvent(files: FileList | File): void {
    if (files instanceof FileList) {
 
    } else {
   
    }
  }

  cancelEvent(): void {
  
  }
  
  public data: any[]=[
    {ID:'1',FirstName:'Ghanshyam',LastName :'Singh',Email:'ghanshyam3303@gmail.com',Mobile:'8791790405',DOB:'03/03/1995'},
    {ID:'2',FirstName:'Neeraj',LastName :'Singh',Email:'neeraj.singh03@gmail.com',Mobile:'9760822095',DOB:'08/19/1993'}
  ];
  filteredData: any[] ;
  filteredTotal: number ;
  
  public columns: ITdDataTableColumn[] = [
    {name:"ID",label:'ID',hidden:true},
    { name: 'FirstName', label: 'First Name', tooltip: 'First Name', sortable: true },
    { name: 'LastName', label: 'Last Name'},
    { name: 'Email', label:'Email' },
    { name: 'Mobile', label:'Mobile',tooltip:'(+91)(Number)' },
    { name: 'DOB', label:'DOB',tooltip:'mm/dd/yyyy' },
  ];

 search(searchTerm: string): void {
    this.searchTerm = searchTerm;
    this.filter();
  }
 page(pagingEvent: IPageChangeEvent): void {
 
    this.fromRow = pagingEvent.fromRow;
    this.currentPage = pagingEvent.page;
    this.pageSize = pagingEvent.pageSize;
    this.filter();
  }


  sortEvent(sortEvent: ITdDataTableSortChangeEvent): void {
    this.sortBy = sortEvent.name;
    this.sortOrder = sortEvent.order;
    this.filter();
  }
    filter():void{
       let newData: any[] = this.data;
    let excludedColumns: string[] = this.columns
    .filter((column: ITdDataTableColumn) => {
      return ((column.filter === undefined && column.hidden === true) ||
              (column.filter !== undefined && column.filter === false));
    }).map((column: ITdDataTableColumn) => {
      return column.name;
    });
    newData = this._dataTableService.filterData(newData, this.searchTerm, true, excludedColumns);
    this.filteredTotal = newData.length;
    newData = this._dataTableService.sortData(newData, this.sortBy, this.sortOrder);
    newData = this._dataTableService.pageData(newData, this.fromRow, this.currentPage * this.pageSize);
    this.filteredData = newData;
  }

  openConfirm():void{
    this._dialogService.openConfirm({
      message: 'Are you sure you want to delete  '+ this.User.Email +'  ?',
        disableClose:  false,
         viewContainerRef: this._viewContainerRef, //OPTIONAL
    title: 'Confirm',
      cancelButton: 'Cancel',   
       acceptButton: 'Delete',
  }).afterClosed().subscribe((accept:boolean)=>{
    debugger;
    let index=this.filteredData.indexOf(this.User);
    if(accept)
      this.filteredData.splice(index,1);
    
      
  });
}

GetAll(){
  this.subscription= this.userService.GetUsers().subscribe(res=>{
    debugger;
    this.data=res.json(); 
 });
}
 openAlert(): void {
    this._dialogService.openAlert({
      message: 'Sorry edit feature is currently not working',
      disableClose: false, // defaults to false
      viewContainerRef: this._viewContainerRef, //OPTIONAL
      title: 'Alert', //OPTIONAL, hides if not provided
      closeButton: 'Close', //OPTIONAL, defaults to 'CLOSE'
    });
  }

  selectEvent(event){
   
    if(event.selected)
    {
      this.operation=true;
    this.User=event.row;}
    
    else{
      this.operation=false;
      this.User={};
    }
    
  }

  ngOnDestroy():void{
     // this.subscription.unsubscribe();
  }
  

}
