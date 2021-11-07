import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSucursalPage } from './add-sucursal.page';

const routes: Routes = [
  {
    path: '',
    component: AddSucursalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AddSucursalPageRoutingModule {}
