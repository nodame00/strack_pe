import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddSucursalPageRoutingModule } from './add-sucursal-routing.module';

import { AddSucursalPage } from './add-sucursal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddSucursalPageRoutingModule
  ],
  declarations: [AddSucursalPage]
})
export class AddSucursalPageModule {}
