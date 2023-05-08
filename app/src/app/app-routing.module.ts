import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChangerMdpComponent } from './web/changer-mdp/changer-mdp.component';
import { ForgotPasswordComponent } from './web/forgot-password/forgot-password.component';
import { LoginComponent } from './web/login/login.component';
import { RegisterComponent } from './web/register/register.component';
import { TopbarComponent } from './dashbord/topbar/topbar.component';
import { GestConDevComponent } from './dashbord/gest-con-dev/gest-con-dev.component';
import { VehciuleComponent } from './dashbord/GestConDev/vehciule/vehciule.component';
import { ActionComponent } from './dashbord/GestConDev/action/action.component';
import { FamilleComponent } from './dashbord/GestConDev/famille/famille.component';
import { CdcComponent } from './dashbord/GestConDev/cdc/cdc.component';
import { MarqueComponent } from './dashbord/GestConDev/marque/marque.component';
import { VersionComponent } from './dashbord/GestConDev/version/version.component';
import { AjoutComponent } from './dashbord/GestConDev/ajout/ajout.component';
import { AjoutVehiculeComponent } from './dashbord/GestConDev/ajout/ajout-vehicule/ajout-vehicule.component';
import { ModifierComponent } from './dashbord/GestConDev/modifier/modifier.component';
import { ModifierVehiculeComponent } from './dashbord/GestConDev/modifier/modifier-vehicule/modifier-vehicule.component';
import { AjoutMarqueComponent } from './dashbord/GestConDev/ajout/ajout-marque/ajout-marque.component';
import { ModifierMarqueComponent } from './dashbord/GestConDev/modifier/modifier-marque/modifier-marque.component';
import { ModifierCdcComponent } from './dashbord/GestConDev/modifier/modifier-cdc/modifier-cdc.component';
import { AjoutCdcComponent } from './dashbord/GestConDev/ajout/ajout-cdc/ajout-cdc.component';

import { GestUtilComponent } from './dashbord/gest-util/gest-util.component';
import { UtilisateurComponent } from './dashbord/GestUtil/utilisateur/utilisateur.component';
import { ModifierUtilisateurComponent } from './dashbord/GestConDev/modifier/modifier-utilisateur/modifier-utilisateur.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'mot-de-passe-oublie',component:ForgotPasswordComponent},
 {path:'changer-mdp',component:ChangerMdpComponent},
 {path:'',component:TopbarComponent,children: [

  {path:'gestion-utilisateur',component:GestUtilComponent,children:[
    {path:'user',component:UtilisateurComponent}
  ]},
  {path:'GCD',component:GestConDevComponent,children:[
    {path:'gestion-vehicule',component:VehciuleComponent},
    {path:'gestion-action',component:ActionComponent},
    {path:'gestion-famille',component:FamilleComponent},
    {path:'gestion-cdc',component:CdcComponent},
    {path:'gestion-marque',component:MarqueComponent},
    {path:'gestion-version',component:VersionComponent},
    {path:'',component:AjoutComponent,children:[
      {path:'ajout-vehicule',component:AjoutVehiculeComponent},
      {path:'ajout-marque',component:AjoutMarqueComponent},
      {path:'ajout-cdc',component:AjoutCdcComponent}
    ]},
    {path:'m',component:ModifierComponent,children:[
      {path:'modifier-vehicule/:id',component:ModifierVehiculeComponent},
      {path:'modifier-marque/:id',component:ModifierMarqueComponent},
      {path:'modifier-cdc/:id',component:ModifierCdcComponent},
      {path:'modifier-utilisateur/:id',component:ModifierUtilisateurComponent}
    ]}
  ]}
 ]},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
