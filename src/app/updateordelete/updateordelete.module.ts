import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateordeletePageRoutingModule } from './updateordelete-routing.module';

import { UpdateordeletePage } from './updateordelete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateordeletePageRoutingModule
  ],
  declarations: [UpdateordeletePage]
})
export class UpdateordeletePageModule {}
