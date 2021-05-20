import { Component, OnInit } from '@angular/core';

import { NgForm } from "@angular/forms";
import { PersonaService } from "../../services/persona.service";
import { VacunaService } from "../../services/vacuna.service";
import { CiudadService } from "../../services/ciudad.service";
import { ProvinciaService } from "../../services/provincia.service";
import {Persona} from "../../models/persona"
import { Provincia } from 'src/app/models/provincia';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],
  providers: [PersonaService, 
              VacunaService, 
              CiudadService,
              ProvinciaService]
})
export class PersonaComponent implements OnInit {
  constructor(public personaService: PersonaService, 
              public vacunaService: VacunaService,
              public ciudadService: CiudadService,
              public provinciaService: ProvinciaService
               ) {}

  ngOnInit(): void {
    this.getPersonas();
    this.getVacunas();
    this.getProvincia();
  }

  addPersona(form: NgForm) {
      if (form.value._id) {
          this.personaService.putPersona(form.value).subscribe((res) => {
          this.resetForm(form);
          this.getPersonas();
         
        });
        console.log("if");
      } else {
          this.personaService.postPersona(form.value).subscribe((res) => {
          this.getPersonas();
          this.resetForm(form);
        });
        console.log("else"+form.value);
      }
    }
  
  getPersonas() {
      this.personaService.getPersonas().subscribe((res) => {
      this.personaService.personas = res;
    });
  }

  getVacunas() {
      this.vacunaService.getVacunas().subscribe((res) => {
      this.vacunaService.vacunas = res;
    });
  }
  
  getProvincia() {
      this.provinciaService.getProvincias().subscribe((res) => {
      this.provinciaService.provincias = res;
      console.log("provincia:"+this.provinciaService.provincias);
    });
  }
  getCiudades(idProvincia:number) {
      this.ciudadService.getCiudades(idProvincia).subscribe((res) => {
      this.ciudadService.ciudades = res;
    });
  }
  editPersona(persona: Persona) {
    this.personaService.selectedPersona = persona;
    this.onChageProvincia(this.personaService.selectedPersona.provincia);
  }

  deletePersona(_id: string, form: NgForm) {
    if (confirm("Desea eliminar el registro?")) {
      this.personaService.deletePersona(_id).subscribe((res) => {
        this.getPersonas();
        this.resetForm(form);
      });
    }
  }

  resetForm(form: NgForm) {
    if (form) {
      //form.reset();
      this.personaService.selectedPersona = new Persona();
    }
  }
  onChageProvincia(valor:any)
  {
      console.log("aqui provincia: "+valor);
      this.getCiudades(valor as number);
  }

}
