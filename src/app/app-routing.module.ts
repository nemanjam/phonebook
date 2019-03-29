import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListNumbersComponent } from './list-numbers/list-numbers.component';
import { EditNumberComponent } from './edit-number/edit-number.component';
import { AddNumberComponent } from './add-number/add-number.component';


const routes: Routes = [{ path: 'add-number', component: AddNumberComponent },
                        { path: 'edit-number/:id', component: EditNumberComponent },
                        { path: '', component: ListNumbersComponent }
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
