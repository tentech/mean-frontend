import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Persona } from '../models/persona';
@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  
  selectedPersona: Persona;
  personas: Persona[];
  readonly URL_API="http://localhost:3000/api/persona";
  constructor(private http:HttpClient) {
    this.selectedPersona = new Persona();
    this.personas =[];
   }
   
  getPersonas()
  {
    return this.http.get<Persona[]>(this.URL_API);
  }
  postPersona(persona: Persona)
  {
    return this.http.post(this.URL_API, persona);
  }
  putPersona(persona: Persona) {
    return this.http.put(this.URL_API + `/${persona._id}`, persona);
  }

  deletePersona(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
