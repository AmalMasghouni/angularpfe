import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modifier-utilisateur',
  templateUrl: './modifier-utilisateur.component.html',
  styleUrls: ['./modifier-utilisateur.component.css']
})
export class ModifierUtilisateurComponent implements OnInit {

  id: any;





  constructor(private fb: FormBuilder, private http: HttpClient,private Route:Router , private act: ActivatedRoute){}
registerDto = {
firstName: "",
lastName: "",
role: "",
email: "",
responsableequipe: "",
employeecode: ""
  }
 /* registrationForm = this.fb.group({
    id : ['', Validators.required],
   firstName : ['', Validators.required],
   lastName : ['', Validators.required],
    role : ['', Validators.required],
    email: ['', [Validators.required, Validators.email, Validators.pattern(/^[a-z0-9._%+-]+@actia-engineering\.tn$/)]],
    responsableequipe : ['', Validators.required],
    password: ['', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/)
    ]],
    employeecode : ['', Validators.required]
  });*/




  ngOnInit(): void {


    this.id = this.act.snapshot.paramMap.get('id');


  this.http.get<any>('http://localhost:8080/api/auth/getbyid/'+this.id ).subscribe(

    response => {this.registerDto=response;
console.log(this.registerDto);

  },

    error=> {console.error('Error registering user', error);}

  );

   }


OnSubmit(){
 // if (this.registrationForm.controls.email.invalid || !this.registrationForm.controls.email.value?.endsWith('@actia-eng.com')) {

    /*if (this.registrationForm.controls.password.invalid) {
     alert('password invalid');
  }*/
  /*console.log(this.registrationForm.value);

    }
    const formData = this.registrationForm.value;

    const registerDtorole = {
     id:formData.id,
     firstName:formData.firstName,
     lastName:formData.lastName,
     role:formData.role,
     email:formData.email,
     responsableequipe:formData.responsableequipe,
     password: formData.password,
     employeecode:formData.employeecode};
*/
    this.id = this.act.snapshot.paramMap.get('id');

  this.http.put('http://localhost:8080/api/auth/modifier-utilisateur/'+this.id ,this.registerDto).subscribe(
    response => {console.log('User  registred  successfully');
    console.log(this.registerDto);

    this.Route.navigate(['/user']);
  },

    error=> {console.error('Error registering user', error);}

  );

  }

}

