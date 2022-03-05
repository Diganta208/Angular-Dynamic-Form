import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from './core/core.module';

const routes: Routes = [{ path: 'user', loadChildren: () => import('./user/user.module')
                          .then(m => m.UserModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes),CoreModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
