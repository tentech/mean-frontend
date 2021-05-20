import { Component, OnInit } from '@angular/core';

import { NgForm } from "@angular/forms";
import { PersonaService } from "../../services/persona.service";
import {Persona} from "../../models/persona"


@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],
  providers: [PersonaService],
})
export class PersonaComponent implements OnInit {
  constructor( public personaService: PersonaService ) {}

  ngOnInit(): void {
    this.getPersonas();
  }

  addPersona(form: NgForm) {
      if (form.value._id) {
        this.personaService.putPersona(form.value).subscribe((res) => {
          this.resetForm(form);
          this.getPersonas();
        });
      } else {
        this.personaService.postPersona(form.value).subscribe((res) => {
          this.getPersonas();
          this.resetForm(form);
        });
      }
    }
  

  getPersonas() {
    this.personaService.getPersonas().subscribe((res) => {
      this.personaService.personas = res;
    });
  }
  
  editPersona(persona: Persona) {
    this.personaService.selectedPersona = persona;
  }

  deletePersona(_id: string, form: NgForm) {
    if (confirm("Desea eliminar el registro?")) {
      this.personaService.deletePersona(_id).subscribe((res) => {
        this.getPersonas();
        this.resetForm(form);
      });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.personaService.selectedPersona = new Persona();
    }
  }

}
