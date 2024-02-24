import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-estanterias',
  templateUrl: './estanterias.component.html',
  styleUrls: ['./estanterias.component.css']
})
export class EstanteriasComponent implements OnInit {
  @ViewChild('diaForm') template: TemplateRef<any>;
  form : FormGroup | undefined;

    public isDialogOpen: boolean = false;

  constructor( private dialog: MatDialog,
    private _fb:FormBuilder){
    console.log('libros');
  }

  ngOnInit(){ 
    this.form = this._fb.group({
      id : [0],
      estante: [''],
      sala: [''],
      librero: [''],
      posicion: ['']
    });
  }

  btnAgregar(){
    const dialogRef = this.dialog.open(this.template, 
      { data: {}, 
      width:'400px',
    disableClose:true });

    dialogRef.afterOpened().subscribe(() => (this.isDialogOpen = true));
    dialogRef.afterClosed().subscribe(() => (this.isDialogOpen = false));
  }
  btnGuardar(){
    console.log(this.form.value);
  }
}
