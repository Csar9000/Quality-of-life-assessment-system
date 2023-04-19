import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteLayoutComponent } from './shared/layouts/site-layout/site-layout.component';
import { TestingPageComponent } from './testing-page/testing-page.component';
import { QuestionSingleFormComponent } from './testing-page/question-single-form/question-single-form.component';
import { QuestionMultipleFormComponent } from './testing-page/question-multiple-form/question-multiple-form.component';
import { QuestionScaleFormComponent } from './testing-page/question-scale-form/question-scale-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExcelShowPageComponent } from './excel-show-page/excel-show-page.component';
import { LopinPageComponent } from './lopin-page/lopin-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteLayoutComponent,
    TestingPageComponent,
    QuestionSingleFormComponent,
    QuestionMultipleFormComponent,
    QuestionScaleFormComponent,
    ExcelShowPageComponent,
    LopinPageComponent,
    RegisterPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
