import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Vacuna } from '../models/vacuna';
@Injectable({
  providedIn: 'root'
})
export class VacunaService {

  vacunas: Vacuna[];
  readonly URL_API="http://localhost:3000/api/vacuna";
  constructor(private http:HttpClient) {
       this.vacunas =[];
  }
   
  getVacunas()
  {
    return this.http.get<Vacuna[]>(this.URL_API);
  }
}
