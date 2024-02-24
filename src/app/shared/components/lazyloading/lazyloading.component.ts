import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { LazyloadingService } from '../../service/lazyloading.service';

@Component({
  selector: 'app-lazyloading',
  standalone: true,
  imports: [CommonModule, MatProgressBarModule, MatDialogModule],
  encapsulation:ViewEncapsulation.None,
  template: `<div>
      <mat-progress-bar mode="indeterminate"></mat-progress-bar>
    </div>
  `,
  styleUrls: ['./lazyloading.component.css']
})
export class LazyloadingComponent implements OnInit, OnDestroy  {


  constructor(
    private _ref:MatDialogRef<LazyloadingComponent>, 
    private _lazy : LazyloadingService){}

  ngOnDestroy(): void {

  }

  ngOnInit(): void {
    this._lazy.closing.subscribe(() => {
      this.close();
    });
  }
 

  private close(){
    this._ref.close();

  }

}
