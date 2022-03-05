import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserAddComponent } from './user-add/user-add.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { UserCategoryComponent } from './user-category/user-category.component';

@NgModule({
  declarations: [
    UserAddComponent,
    UserCategoryComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    CoreModule
  ]
})
export class UserModule { }
