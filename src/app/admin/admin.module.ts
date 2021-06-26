import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialDesign } from '../material/material.module';
import { IncomeComponent } from './income/income.component';
import { IncomeDetailComponent } from './income-detail/income-detail.component';
import { ChargeComponent } from './charge/charge.component';
import { ChargeDetailComponent } from './charge-detail/charge-detail.component';

const routes: Routes = [
  {
    path:'',
    component:AdminComponent,
    children:[
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'income',
        component:IncomeComponent
      },
      {
        path:'charge',
        component:ChargeComponent
      },
      {
        path:'',
        pathMatch:'full',
        redirectTo:'/admin/dashboard' 
      }
    ]
  }
]

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    IncomeComponent,
    IncomeDetailComponent,
    ChargeComponent,
    ChargeDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialDesign
  ]
})
export class AdminModule { }
