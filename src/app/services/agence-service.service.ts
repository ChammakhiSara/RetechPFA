import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AgenceServiceService {

  constructor(private http:HttpClient) { }
  // add agence with backend 
  public addAgence(agence: any){
    return this.http.post("http://localhost:8080/agences/",agence,{responseType:'text' as 'json'})
  }

  // get all agences from backend
  public getAgences(){
    return this.http.get("http://localhost:8080/agences/");
  }
  // delete agence with backend
  public deleteAgence(id){
    return this.http.delete("http://localhost:8080/agences/"+id);
  }

  // edit agence with backend
  public modifAgence(id,agence){
    return this.http.put("http://localhost:8080/agences/"+id,agence,{responseType:'text' as 'json'});
  }


}
