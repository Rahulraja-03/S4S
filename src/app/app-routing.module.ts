import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component';
import { DataAnnotationComponent } from './data-annotation/data-annotation.component';
import { AccessComponent } from './access/access.component';
import { DigitalComponent } from './digital/digital.component';
import { SoftwareComponent } from './software/software.component';

const routes: Routes = [
  { path:'' , component : HomeComponent},
  { path:'about' , component : AboutComponent},
  { path:'data' , component : DataAnnotationComponent},
  { path:'access' , component : AccessComponent },
  { path:'digital' , component : DigitalComponent },
  { path:'software' , component : SoftwareComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
