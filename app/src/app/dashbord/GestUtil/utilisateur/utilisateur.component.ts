import { HttpBackend, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {

  employee:any
  constructor(private http:HttpClient){}
  ngOnInit(): void {
   this.http.get<any>("http://localhost:8080/api/auth/getAllUtilisateur").subscribe(
    res=>{console.log("reussite")
  this.employee=res}
   ,err=>{console.log(err)})
  }
delete(id:any){
 console.log(id);
//this.http.delete("http://localhost:8080/api/auth/delete-utilisateur"+id)
}
}
