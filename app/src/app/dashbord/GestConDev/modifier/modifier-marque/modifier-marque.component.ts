import { HttpBackend, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modifier-marque',
  templateUrl: './modifier-marque.component.html',
  styleUrls: ['./modifier-marque.component.css']
})
export class ModifierMarqueComponent implements OnInit {
  constructor(private http:HttpClient,private act:ActivatedRoute,private route:Router){}
  codmar:any
  MarqueDto= {
    profil:'',
    nommar:'',
    geo:'',
    cible:''
   }
   marqueDto= {
    profil:'',
    nommar:'',
    geo:'',
    cible:0
   }
  ngOnInit(): void {
    this.codmar=this.act.snapshot.paramMap.get('id');
  console.log(this.codmar);
  this.http.get<any>("http://localhost:8080/api/auth/getMarque/"+this.codmar)
  .subscribe(
    res=>{this.MarqueDto=res;
console.log(this.MarqueDto)

  }
    ,err=>{console.log(err)})
  }
  modifier(){
    this.codmar=this.act.snapshot.paramMap.get('id');
    console.log(this.MarqueDto);
    this.http.put("http://localhost:8080/api/auth/modifier-marque/"+this.codmar,this.MarqueDto).
    subscribe(res=>{console.log("marque modifie");
  this.route.navigate(['/GCD/gestion-marque'])},err=>{console.log(err)})
  }



}
