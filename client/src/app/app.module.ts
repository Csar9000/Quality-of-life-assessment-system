import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteLayoutComponent } from './shared/layouts/site-layout/site-layout.component';
import { TestingPageComponent } from './testing-page/testing-page.component';
import { QuestionSingleFormComponent } from './testing-page/question-single-form/question-single-form.component';
import { QuestionMultipleFormComponent } from './testing-page/question-multiple-form/question-multiple-form.component';
import { QuestionScaleFormComponent } from './testing-page/question-scale-form/question-scale-form.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExcelShowPageComponent } from './excel-show-page/excel-show-page.component';
import {MatDatepickerModule} from  '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from  '@angular/material/input'
import {MatCardModule} from '@angular/material/card'
import {MatDialogModule} from '@angular/material/dialog';
import {MatRadioModule} from  '@angular/material/radio'
import {MatListModule} from  '@angular/material/list'
import { LopinPageComponent } from './lopin-page/lopin-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { TokenInterceptor } from './shared/classes/token.interceptor';
import { QuestionConstrutorComponent } from './question-construtor/question-construtor.component';
import { QuestionSingleConstructorComponent } from './question-single-constructor/question-single-constructor.component';
import { ChooseFactorsComponent } from './choose-factors/choose-factors.component';

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
    RegisterPageComponent,
    QuestionConstrutorComponent,
    QuestionSingleConstructorComponent,
    ChooseFactorsComponent
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    MatDatepickerModule,
    MatInputModule,
    MatRadioModule,
    AppRoutingModule,
    MatListModule,
    MatCardModule,
    MatTabsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],

  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: TokenInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
