import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateordeletePage } from './updateordelete.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateordeletePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateordeletePageRoutingModule {}
