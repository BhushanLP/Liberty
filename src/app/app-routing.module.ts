import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePackageComponent } from './home-package/home-package.component';
import { BusinessPackageComponent } from './business-package/business-package.component';
import { UserComponent } from './user/user.component';

const routes:Routes=[
      {
        path:'' , redirectTo: 'home' , pathMatch:'full',
      },
      {
        path:'home' , component: HomePackageComponent
      },
      {
        path:'business' , component: BusinessPackageComponent
      },
      {
        path:'user' , component: UserComponent
      },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
