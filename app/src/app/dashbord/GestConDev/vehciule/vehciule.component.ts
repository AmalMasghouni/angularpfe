import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-vehciule',
  templateUrl: './vehciule.component.html',
  styleUrls: ['./vehciule.component.css']
})
export class VehciuleComponent implements OnInit {
  vehicule:any;
  searchTerm:""|undefined;
  constructor(private http:HttpClient){}
  ngOnInit(): void {
this.http.get<any>("http://localhost:8080/api/auth/getAllVehiculeMarque").subscribe(res=>{
  this.vehicule=res;
},err=>{console.log(err)})
  }
  delete(id:any){
    this.http.delete("http://localhost:8080/api/auth/delete-vehicule/"+id)
    .subscribe(res=>{
      this.ngOnInit;
    },err=>{console.log(err)})

  }
  onSearch(){
    this.http.get<any>(`http://localhost:8080/api/auth/chercherVehiculeparNom?nomVeh=${this.searchTerm}`).subscribe(res=>{
      this.vehicule=res;
      console.log(res);
    },err=>{console.log(err)})
  }


  exportToExcel() {
    const element = document.getElementById('my-table'); // sélectionnez votre tableau HTML par son identifiant
    const worksheet = XLSX.utils.table_to_sheet(element);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    XLSX.writeFile(workbook, 'vehicule.xlsx');
  }


  generateXML() {
    // Récupérez les données du tableau
    const data = this.vehicule;
     // Définissez les options de conversion XML
    const options = {
      compact: true,
      ignoreComment: true,
      spaces: 4
    };// Convertissez les données en XML
    //const xml = convertJsToXml({table: {tbody: {tr: data}}}, options);
    // Sélectionner le tableau
const table = document.getElementById("my-table")as HTMLTableElement;

// Créer un élément de document XML
const xml = document.createElement("table");

// Parcourir chaque ligne du tableau
if(table){
for (let i = 0; i < table.rows.length; i++) {
  // Créer une ligne dans le document XML
  const xmlRow = document.createElement("tr");

  // Parcourir chaque cellule de la ligne du tableau
  for (let j = 0; j < table.rows[i].cells.length; j++) {
    // Créer une cellule dans le document XML
    const xmlCell = document.createElement("td");

    // Copier le contenu de la cellule du tableau dans la cellule XML
    xmlCell.innerHTML = table.rows[i].cells[j].innerHTML;

    // Ajouter la cellule XML à la ligne XML
    xmlRow.appendChild(xmlCell);
  }

  // Ajouter la ligne XML au tableau XML
  xml.appendChild(xmlRow);
}}

// Convertir le document XML en chaîne de caractères
const xmlString = new XMLSerializer().serializeToString(xml);

// Créer un objet Blob à partir de la chaîne XML
const blob = new Blob([xmlString], {type: 'text/xml'});


    // Téléchargez l'XML dans un fichier
   const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'table.xml';
    a.click();
    window.URL.revokeObjectURL(url);
  }
  logout(){
    this.http.post("http://localhost:8080/api/auth/logo",{}).subscribe(
      res=>{console.log("logout")},
      err=>{console.log(err)}
    )
  }
}
