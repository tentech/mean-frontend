import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Ciudad } from '../models/ciudad';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {

  ciudades: Ciudad[];
  readonly URL_API="http://localhost:3000/api/ciudad";
  constructor(private http:HttpClient) {
       this.ciudades =[];
  }
   
  getCiudades(idProvincia:number)
  {
    return this.http.get<Ciudad[]>(this.URL_API+`/${idProvincia}`);
  }
}
