import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule}from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './web/login/login.component';
import { RegisterComponent } from './web/register/register.component';
import { RouterModule } from '@angular/router';
import { ForgotPasswordComponent } from './web/forgot-password/forgot-password.component';
import { ChangerMdpComponent } from './web/changer-mdp/changer-mdp.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { TopbarComponent } from './dashbord/topbar/topbar.component';
import { GestConDevComponent } from './dashbord/gest-con-dev/gest-con-dev.component';
import { VehciuleComponent } from './dashbord/GestConDev/vehciule/vehciule.component';
import { ActionComponent } from './dashbord/GestConDev/action/action.component';
import { CdcComponent } from './dashbord/GestConDev/cdc/cdc.component';
import { FamilleComponent } from './dashbord/GestConDev/famille/famille.component';
import { VersionComponent } from './dashbord/GestConDev/version/version.component';
import { MarqueComponent } from './dashbord/GestConDev/marque/marque.component';
import { AjoutComponent } from './dashbord/GestConDev/ajout/ajout.component';
import { AjoutVehiculeComponent } from './dashbord/GestConDev/ajout/ajout-vehicule/ajout-vehicule.component';
import { ModifierComponent } from './dashbord/GestConDev/modifier/modifier.component';
import { ModifierVehiculeComponent } from './dashbord/GestConDev/modifier/modifier-vehicule/modifier-vehicule.component';
import { ModifierMarqueComponent } from './dashbord/GestConDev/modifier/modifier-marque/modifier-marque.component';
import { AjoutMarqueComponent } from './dashbord/GestConDev/ajout/ajout-marque/ajout-marque.component';
import { AjoutCdcComponent } from './dashbord/GestConDev/ajout/ajout-cdc/ajout-cdc.component';
import { ModifierCdcComponent } from './dashbord/GestConDev/modifier/modifier-cdc/modifier-cdc.component';

import { GestUtilComponent } from './dashbord/gest-util/gest-util.component';
import { UtilisateurComponent } from './dashbord/GestUtil/utilisateur/utilisateur.component';
import { ModifierUtilisateurComponent } from './dashbord/GestConDev/modifier/modifier-utilisateur/modifier-utilisateur.component';








@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ChangerMdpComponent,
    DashbordComponent,
    TopbarComponent,
    GestConDevComponent,
    VehciuleComponent,
    ActionComponent,
    CdcComponent,
    FamilleComponent,
    VersionComponent,
    MarqueComponent,
    AjoutComponent,
    AjoutVehiculeComponent,
    ModifierComponent,
    ModifierVehiculeComponent,
    ModifierMarqueComponent,
    AjoutMarqueComponent,
    AjoutCdcComponent,
    ModifierCdcComponent,

    GestUtilComponent,
    UtilisateurComponent,
    ModifierUtilisateurComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
