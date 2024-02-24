import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class LibroService {
  private urlBase : string = 'api/libro';
  constructor(private _http:HttpClient) {}

    agregar(body : any):Observable<any>{
      return this._http.post<any>(`${this.urlBase}/registrar`, body).pipe(map((data:any) => {
        return data;
      }));
    }
  
    listar():Observable<any>{
      return this._http.get<any>(`${this.urlBase}/list-libros`, {}).pipe(map((data:any) => {
        return data;
      }));
    }

    eliminar(id): Observable<any>{
      
      return this._http.post<any>(`${this.urlBase}/eliminar`, {IdLibro: id}).pipe(map((data:any) => {
        return data;
      }));
    }

    editar(body : any):Observable<any>{
      return this._http.post<any>(`${this.urlBase}/editar`, body).pipe(map((data:any) => {
        return data;
      }));
    }
  
   
}
