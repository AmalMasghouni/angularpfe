import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-ajout-vehicule',
  templateUrl: './ajout-vehicule.component.html',
  styleUrls: ['./ajout-vehicule.component.css']
})
export class AjoutVehiculeComponent implements OnInit {
  constructor(private http:HttpClient,private route:Router){}
ngOnInit(): void {

}
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
ajouter(){
  this.http.post("http://localhost:8080/api/auth/ajout-vehicule",this.vehidDto).subscribe(res=>{
    console.log(this.vehidDto);
    this.route.navigate(['/GCD/gestion-vehicule'])
},err=>{console.log(err)})

}
}
