import { Component, ViewContainerRef ,OnInit } from '@angular/core';
import { ITdDataTableColumn } from '@covalent/core'
import { IPageChangeEvent,TdDialogService , TdDataTableSortingOrder, ITdDataTableSortChangeEvent, TdDataTableService } from '@covalent/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  _viewContainerRef: any;
  ngOnInit(): void {
     this.filter();
  }
  operation:boolean=false;
  constructor(private _dialogService: TdDialogService,private _dataTableService: TdDataTableService) {
    
  }
 sortBy: string = 'Name';
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
  
  private data: any[] = [
    { Name: 'Ghanshyam Singh', Email: 'ghanshyam3303@gmail.com', Mobile: '8791790405' },
    { Name: 'Neeraj Singh', Email: 'neeraj003@gmail.com', Mobile: '9760822095' },
     { Name: 'Laxman Singh', Email: 'Laxman.bisht@gmail.com', Mobile: '8798526874' },
     { Name: 'Devesh Negi', Email: 'devesh.negi03@gmail.com', Mobile: '8791126837' },
     { Name: 'Manish Singh Mehta', Email: 'manish.ronaldo12@gmail.com', Mobile: '8759871563' },
     { Name: 'Abhishek Negi', Email: 'abh.negi12294@gmail.com', Mobile: '7895428135' },
   
  ];
  filteredData: any[] = this.data;
  filteredTotal: number = this.data.length;
  
  private columns: ITdDataTableColumn[] = [
    { name: 'Name', label: 'Name', tooltip: 'Stock Keeping Unit', sortable: true },
    { name: 'Email', label: 'Email' },
    { name: 'Mobile', label:'Mobile' },
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
  

}
