import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modifier-vehicule',
  templateUrl: './modifier-vehicule.component.html',
  styleUrls: ['./modifier-vehicule.component.css']
})
export class ModifierVehiculeComponent implements OnInit {
  constructor(private http:HttpClient,private act:ActivatedRoute,private route:Router){}
  codeVeh:any;
  vehidDto={
    nomVeh:'',
  nomInterne:'',
  marque:'',
  testGlobal:false,
  msgDiag:'',
  grpMarq:'',
  fro:'',
  t:'',
  remarque:'',
  upd:'',
  onlyElec:false,
  avertissElec:false,
  avertissHybrid:false,
  }

  ngOnInit(): void {
  this.codeVeh=this.act.snapshot.paramMap.get('id');
  console.log(this.codeVeh);
  this.http.get<any>("http://localhost:8080/api/auth/getVehicule/"+this.codeVeh)
  .subscribe(
    res=>{this.vehidDto=res;
    console.log(this.vehidDto)}
    ,err=>{console.log(err)})

  }

  modifier(){
    this.codeVeh=this.act.snapshot.paramMap.get('id')
   this.http.put("http://localhost:8080/api/auth/modifier-vehicule/"+this.codeVeh,this.vehidDto).
    subscribe(res=>{console.log("vehicule modifier");
  this.route.navigate(['/GCD/gestion-vehicule'])},err=>{console.log(err)})
  }



}
