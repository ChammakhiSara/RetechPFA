import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gestion-agences',
  templateUrl: './gestion-agences.component.html',
  styleUrls: ['./gestion-agences.component.css']
})
export class GestionAgencesComponent implements OnInit {

  addAgencesForm: FormGroup;
  submitted = false;

  editAgencesForm: FormGroup;
  agences: any;
  index: number;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.agences = JSON.parse(localStorage.getItem('agences')) || []; 
   /*  initialisation des entrées du formulaire add  */
    this.addAgencesForm = new FormGroup({
      nom: new FormControl('', [Validators.required]),
      adresse: new FormControl('', [Validators.required]),
      telephone: new FormControl('', [Validators.required])
    });
    /*  initialisation des entrées du formulaire edit */
    this.editAgencesForm = new FormGroup({
      nom: new FormControl('', [Validators.required]),
      adresse: new FormControl('', [Validators.required]),
      telephone: new FormControl('', [Validators.required])
    });
    /*  on identifiant l'index que l'on va utilisé comme paramétre: < this.route.snapshot.params["index"]+constructor(private route:ActivatedRoute) > */
    this.index = this.route.snapshot.params["index"];
      
   
    let currentAgence = this.agences[this.index];
    /*  mettre les valeurs de l'objet < currentAgence > dans les champs du formulaire edit */
    this.editAgencesForm.patchValue(currentAgence); 
  }

/*  code de la fonction click addAgence */
  addAgence(){
    this.submitted = true;
    if (this.addAgencesForm.invalid) {
      return;
    }
    else {
      let agences = JSON.parse(localStorage.getItem('agences')) || [];
      let agence = this.addAgencesForm.value;
      agences.push(agence);
      localStorage.setItem('agences', JSON.stringify(agences));
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
  deleteAgence(index){
    
  }
}
