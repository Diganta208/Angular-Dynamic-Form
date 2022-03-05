import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAddComponent } from './user-add/user-add.component';
import { UserCategoryComponent } from './user-category/user-category.component';

const routes: Routes = [{ path: 'add', component: UserAddComponent },
                        { path: 'category', component: UserCategoryComponent }
                        ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
