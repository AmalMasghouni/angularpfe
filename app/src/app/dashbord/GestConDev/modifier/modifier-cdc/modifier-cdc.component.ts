import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modifier-cdc',
  templateUrl: './modifier-cdc.component.html',
  styleUrls: ['./modifier-cdc.component.css']
})
export class ModifierCdcComponent implements OnInit {
  idCDC:any
  cdc={
    nomCDC:'',
refCDC:'',
indCDC:'',
idSite:'',
creation:'',
signatureOk:'',
refCDCArdia:'',
  }
  constructor(private http:HttpClient,private route:Router,private act :ActivatedRoute){}
  ngOnInit(): void {
    this.idCDC=this.act.snapshot.paramMap.get('id');
  console.log(this.idCDC);
  this.http.get<any>("http://localhost:8080/api/auth/getAllCdcSiteById/"+this.idCDC)
  .subscribe(
    res=>{this.cdc=res[0];
console.log(this.cdc)

  }
    ,err=>{console.log(err)})
  }
  modifier(){
    this.idCDC=this.act.snapshot.paramMap.get('id');
    console.log(this.cdc);
    this.http.put("http://localhost:8080/api/auth/modifier-cdc/"+this.idCDC,this.cdc).
    subscribe(res=>{console.log("marque modifie");
  this.route.navigate(['/GCD/gestion-marque'])},err=>{console.log(err)})

  }

  }


