import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Provincia } from '../models/provincia';

@Injectable({
  providedIn: 'root'
})
export class ProvinciaService {

  provincias: Provincia[];
  readonly URL_API="http://localhost:3000/api/provincia";
  constructor(private http:HttpClient) {
       this.provincias =[];
  }
   
  getProvincias()
  {
    return this.http.get<Provincia[]>(this.URL_API);
  }
}
