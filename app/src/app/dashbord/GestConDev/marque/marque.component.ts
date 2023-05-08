import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-marque',
  templateUrl: './marque.component.html',
  styleUrls: ['./marque.component.css']
})
export class MarqueComponent implements OnInit {
  searchTerm:any;
  marque:any
  constructor(private http:HttpClient){}
  ngOnInit(): void {
this.http.get<any>("http://localhost:8080/api/auth/getAllMarque").subscribe(res=>{
  this.marque=res
},err=>{console.log(err)})
  }
  onSearch(){
    this.http.get<any>(`http://localhost:8080/api/auth/rechercheparNomMarque?nommar=${this.searchTerm}`)
    .subscribe(res=>{this.marque=res},err=>{console.log(err)})
  }
  selectedMarque: any; // variable pour stocker la ligne sélectionnée

onSelect(marque: any) {
  this.selectedMarque = marque;
}
  exportToExcel(){
    const element = document.getElementById('my-table'); // sélectionnez votre tableau HTML par son identifiant
    const worksheet = XLSX.utils.table_to_sheet(element);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    XLSX.writeFile(workbook, 'marque.xlsx');
  }
  generateXML(){}
  delete(id:any){
    this.http.delete("http://localhost:8080/api/auth/delete-marque/"+id)
    .subscribe(res=>{
      this.ngOnInit;
    },err=>{console.log(err)})

  }
}
