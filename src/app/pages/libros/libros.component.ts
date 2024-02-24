import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LibroService } from 'src/app/services/libro.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {
  @ViewChild('diaForm') template: TemplateRef<any>;
  @ViewChild('diaElimnar') tempEliminar: TemplateRef<any>;
  form : FormGroup | undefined;
  dialogRef:any;
  public isDialogOpen: boolean = false;

  displayedColumns: string[] = ['titulo', 'descripcion', 'sala', 'posicion', 'accion'];
  dataSource:[];

  titulo:'';
  id:0;
  esEdit = false;

  constructor( private dialog: MatDialog,
    private _fb:FormBuilder,
    private _service : LibroService,
   // private dialogRef: MatDialogRef<LibrosComponent>
    ){
    this.obtenerListaLibros();
  }

  ngOnInit(){ 
    this.form = this._fb.group({
      idLibro : [0],
      Titulo: [''],
      Descripcion: [''],
      idLocalizacion:[1]
    });
   
  }

  btnAgregar(){
    this.dialogRef = this.dialog.open(this.template, 
      { data: {}, 
      width:'400px',
    disableClose:true });
  }

  btnCerrar(){
    this.dialogRef.close();
    this.btnLimpiar();
    this.titulo = '';
    this.id = 0;
    this.esEdit = false;
  }

  btnGuardar(){
    let value = this.form.value;
  
    if(value.idLibro === 0){
      this._service.agregar(value).subscribe((res=>{
            if(this.respuestaValida(res) && res.status_code ==200){
              this.btnCerrar();
              this.obtenerListaLibros();
            }  
          }));
    }else{
      this._service.editar(value).subscribe((res=>{
        if(this.respuestaValida(res) && res.status_code ==200){
          this.btnCerrar();
          this.obtenerListaLibros();
        }  
      }));
    }

    
  }

  btnEditar(item){
    this.form.patchValue({
      idLibro: item.idLibro,
      Titulo: item.titulo,
      Descripcion: item.descripcion,
      idLocalizacion: item.idLocalizacion
    });
    this.btnAgregar();
    this.esEdit = true;
  }

  btnEliminar(id, nombre){
    this.titulo= nombre;
    this.id=id;
    this.dialogRef = this.dialog.open(this.tempEliminar, 
      { data: {}, 
      width:'400px',
    disableClose:true });

  }

  btnConfirmar(id){
    this._service.eliminar(id).subscribe((res)=>{
      if(this.respuestaValida(res) && res.status_code ==200){
        this.btnCerrar();
        this.obtenerListaLibros();
      } 
    })
  }

  btnLimpiar(){
    this.form.reset();
    this.dialogRef = null;
    this.form.patchValue({
      idLocalizacion: 1
    });
  }

  obtenerListaLibros(){
    this.dataSource = [];
    this._service.listar().subscribe((res)=> {
    if(this.respuestaValida(res) && res.data.length > 0)  
      this.dataSource= res.data;
    });
  }

  respuestaValida(data){
    return data != undefined && data != null;
  }

}
