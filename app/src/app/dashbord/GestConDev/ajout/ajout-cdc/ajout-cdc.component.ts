import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout-cdc',
  templateUrl: './ajout-cdc.component.html',
  styleUrls: ['./ajout-cdc.component.css']
})
export class AjoutCdcComponent implements OnInit {
  cdc={
    nomCDC:'',
refCDC:'',
indCDC:'',
idSite:'',
creation:'',
signatureOk:'',
refCDCArdia:'',
  }
  constructor(private http:HttpClient,private route:Router){}
  ngOnInit(): void {}
ajouter(){

  this.http.post("http://localhost:8080/api/auth/ajout-cdc",this.cdc).subscribe(res=>{
    console.log("cdc ajouté",this.cdc);
    this.route.navigate(['/GCD/gestion-cdc'])
},err=>{console.log(err)})

}
}
