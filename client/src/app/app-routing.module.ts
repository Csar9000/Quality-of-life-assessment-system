import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExcelShowPageComponent } from './excel-show-page/excel-show-page.component';
import { SiteLayoutComponent } from './shared/layouts/site-layout/site-layout.component';
import { TestingPageComponent } from './testing-page/testing-page.component';
import { LopinPageComponent } from './lopin-page/lopin-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { AuthGuard } from './shared/classes/auth.guard';

const routes: Routes = [
  {
    path: '', component: LopinPageComponent, children:[
      {path: '', redirectTo: '/login', pathMatch: 'full'},
      {path: 'login', component: LopinPageComponent},
      {path: 'register', component: RegisterPageComponent}
  ]
  },
  {
    path: '', component: SiteLayoutComponent,canActivate:[AuthGuard], children:[
      {path:'results', component: TestingPageComponent},
      {path:'testing', component: ExcelShowPageComponent}
      // {path:'history', component: HistoryPageComponent},
      // {path:'order', component: OrderPageComponent},
      // {path:'categories', component: CategoriesPageComponent},
      // {path:'categories/new', component: CategoriesFormComponent},
      // {path:'categories/:id', component: CategoriesFormComponent}
  ]
  }

];

@NgModule({
  imports:[
    RouterModule.forRoot(routes,
      { onSameUrlNavigation: 'reload' })
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
