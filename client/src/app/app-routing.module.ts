import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExcelShowPageComponent } from './excel-show-page/excel-show-page.component';
import { SiteLayoutComponent } from './shared/layouts/site-layout/site-layout.component';
import { TestingPageComponent } from './testing-page/testing-page.component';

const routes: Routes = [
  {
    path: '', component: SiteLayoutComponent, 
    children:[
       {path:'result', component: TestingPageComponent },
       {path:'excel', component: ExcelShowPageComponent },
      // {path:'analytics', component: AnalyticsPageComponent},
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
