import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private API_SERVER="http://localhost:8080/persona";
  constructor(
    private httpclient:HttpClient
  ) { }

  public getAllPersonas():Observable<any>{
    return this.httpclient.get(this.API_SERVER);
  }
  public savePersona(persona:any): Observable<any>{
    return this.httpclient.post(this.API_SERVER,persona)
  }
  
}
