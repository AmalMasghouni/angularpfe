import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cdc',
  templateUrl: './cdc.component.html',
  styleUrls: ['./cdc.component.css']
})
export class CdcComponent  implements OnInit{
  cdc:any;
  idCDC:any
  searchTerm:any
  constructor(private http:HttpClient){}
  ngOnInit(): void {
    this.http.get<any>("http://localhost:8080/api/auth/getAllCdcSite").subscribe(
      res=>{
        this.cdc=res
      },err=>{console.log(err)}
    )
  }
  onSearch(){
    this.http.get<any>(`http://localhost:8080/api/auth/rechercheparRefCdc?refCDC=${this.searchTerm}`).subscribe(
     res=>{this.cdc=res} ,
     err=>{console.log(err)}

    )
  }
  exportToExcel(){}
  delete(idCDC:any){
    this.http.delete("http://localhost:8080/api/auth/delete-cdc/"+idCDC).subscribe(
            res=>{console.log("cdc supprime")},
            err=>{console.log(err)}
)
  }
  generateXML() {}

}
