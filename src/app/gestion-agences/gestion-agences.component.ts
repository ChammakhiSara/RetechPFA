import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AgenceServiceService } from '../services/agence-service.service';

@Component({
  selector: 'app-gestion-agences',
  templateUrl: './gestion-agences.component.html',
  styleUrls: ['./gestion-agences.component.css']
})
export class GestionAgencesComponent implements OnInit {
  // variable for service reponse 
  message : any;

  submitted = false;

  
  agences: any;
  index: number;

  /*  initialisation des entrées du formulaire add  */
  addAgencesForm = new FormGroup({
    nom: new FormControl('', [Validators.required]),
    adresse: new FormControl('', [Validators.required]),
    telephone: new FormControl('', [Validators.required])
  });

   /*  initialisation des entrées du formulaire edit */
   editAgencesForm = new FormGroup({
    nom: new FormControl('', [Validators.required]),
    adresse: new FormControl('', [Validators.required]),
    telephone: new FormControl('', [Validators.required])
  });

  constructor(private route:ActivatedRoute, private service:AgenceServiceService) { }

  ngOnInit(): void {
    let response= this.service.getAgences(); 
    response.subscribe((data)=>this.agences= data);
    //this.agences = JSON.parse(localStorage.getItem('agences')) || []; 

    /*  on identifiant l'index que l'on va utilisé comme paramétre: < this.route.snapshot.params["index"]+constructor(private route:ActivatedRoute) > */
    // this.index = this.route.snapshot.params["index"];
   }


/*  code de la fonction click addAgence */
  addAgence(){
    this.submitted = true;
    if (this.addAgencesForm.invalid) {
      return;
    }
    else {
      /*let agences = JSON.parse(localStorage.getItem('agences')) || [];
      let agence = this.addAgencesForm.value;
      agences.push(agence);
      localStorage.setItem('agences', JSON.stringify(agences));*/

      let agence = this.addAgencesForm.value;
      console.log(agence);
      let response = this.service.addAgence(agence);
      response.subscribe((data)=>this.message = data);
      //alert(this.message);
      console.log(this.message);
      

    }
  }

/*  code de la fonction click editAgence */
  editAgence(index){
    this.agences = JSON.parse(localStorage.getItem('agences')) || []; 
    let agen = this.editAgencesForm.value;
    this.agences.splice(this.index, 1, agen);

    localStorage.setItem('agences', JSON.stringify(this.agences));
  }  

/*  code de la fonction click deleteAgence */
  deleteAgence(id){
    let response = this.service.deleteAgence(id);
    response.subscribe((data)=>this.agences= data);
    console.log(id);
    

  }
  // copy des données à modifer dans le form du modification
  moveDataToModifForm(index : any){
   let currentAgence = this.agences[index];
    //  mettre les valeurs de l'objet < currentAgence > dans les champs du formulaire edit 
    this.editAgencesForm.patchValue(currentAgence);
    /*this.editAgencesForm.setValue({

      nom: agence.nom,
      adresse: agence.adresse,
      telephone: agence.telephone



     });*/
  }


}
