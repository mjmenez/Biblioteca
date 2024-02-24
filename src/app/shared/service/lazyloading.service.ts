import { EventEmitter, Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { LazyloadingComponent } from "../components/lazyloading/lazyloading.component";

@Injectable({
    providedIn: 'root'
  })
  export class LazyloadingService {
  
    constructor(private dialog: MatDialog) { }
  
    closing = new EventEmitter<void>();
    
    show(){
      this.dialog.open(LazyloadingComponent,{
        width: '400px',
        disableClose : true
      });
    }
  
    close(){
      this.closing.emit();
    }
  }