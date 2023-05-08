import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-ajout-marque',
  templateUrl: './ajout-marque.component.html',
  styleUrls: ['./ajout-marque.component.css']
})
export class AjoutMarqueComponent implements OnInit {
  constructor(private http:HttpClient,private route:Router){}
  ngOnInit(): void {}
  MarqueDto={
    nommar:'',
    profil:'',
    geo:'',
    cible:''
  }
ajouter(){
this.http.post("http://localhost:8080/api/auth/ajout-marque",this.MarqueDto)
.subscribe(res=>{console.log("Marque Ajoutée");
this.route.navigate(['/GCD/gestion-marque'])
},err=>{console.log(err)})
}
}
