import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CostumerFormComponent } from '@app/main/pages/costumer-form/costumer-form.component';

const routes: Routes = [{ path: '', component: CostumerFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
