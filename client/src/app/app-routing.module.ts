import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExcelShowPageComponent } from './excel-show-page/excel-show-page.component';
import { SiteLayoutComponent } from './shared/layouts/site-layout/site-layout.component';
import { TestingPageComponent } from './testing-page/testing-page.component';
import { LopinPageComponent } from './lopin-page/lopin-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { AuthGuard } from './shared/classes/auth.guard';
import { QuestionConstrutorComponent } from './question-construtor/question-construtor.component';
import { TestingDepartmentsListComponent } from './testing-departments-list/testing-departments-list.component';
import { QuestionBankComponent } from './question-bank/question-bank.component';
import { QuestionsInTestComponent } from './questions-in-test/questions-in-test.component';
import { QuestionSingleConstructorComponent } from './question-single-constructor/question-single-constructor.component';
import { PassingTestCheckComponent } from './passing-test-check/passing-test-check.component';
import { PersonalOrderComponent } from './personal-order/personal-order.component';
import { ModalCreateFactorComponent } from './shared/modals/modal-create-factor/modal-create-factor.component';

const routes: Routes = [
  {
    path: '', component: LopinPageComponent, children:[
      {path: '', redirectTo: '/login', pathMatch: 'full'},
      {path: 'login', component: LopinPageComponent},
      {path: 'register', component: RegisterPageComponent}
  ]
  },
  {
    path: '', component: SiteLayoutComponent, canActivate:[AuthGuard], children:[
      {path:'testing', component: TestingPageComponent},
      {path:'results', component: ExcelShowPageComponent},
      {path:'constructor', component: QuestionConstrutorComponent},
      {path:'history', component: QuestionConstrutorComponent},
      {path:'testing-list', component: TestingDepartmentsListComponent},
      {path:'question-bank', component: QuestionBankComponent},
      {path: 'test/:testId', component: QuestionsInTestComponent },
      {path: 'edit/:questionId', component: QuestionSingleConstructorComponent },
      {path: 'questionBank/:idTest', component: QuestionBankComponent },
      {path: 'passing-check', component: PassingTestCheckComponent },
      {path: 'personalOrder', component: PersonalOrderComponent},
      {path: 'create-factor', component: ModalCreateFactorComponent}
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
