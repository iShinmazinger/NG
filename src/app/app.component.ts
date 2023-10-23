import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import {PersonaService} from './services/persona/persona.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  personaForm:FormGroup;
  personas:any;

  constructor(
    public fb:FormBuilder,
    public personaService:PersonaService
  ){
  }
  ngOnInit(): void {
    this.personaForm=this.fb.group({
      personanombre:['', Validators.required],
      personaedad:['', Validators.required],
      personaemail:['', Validators.required]
    })

    this.personaService.getAllPersonas().subscribe(resp=>{
      this.personas=resp;
    },
    error=>{console.error(error)}
    )
  }

  guardar():void{
    this.personaService.savePersona(this.personaForm.value).subscribe(resp=>{
      this.personaForm.reset();
      
    },
    error=>{console.error(error)}
    )
  }

}
