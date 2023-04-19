import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, RouteReuseStrategy } from '@angular/router';
import { Result } from '../interfaces';
import { MaterialService } from '../shared/classes/material.service';
import { ResultService } from '../shared/services/result.service';
import { QuestionMultipleFormComponent } from './question-multiple-form/question-multiple-form.component';
import { QuestionSingleFormComponent } from './question-single-form/question-single-form.component';

@Component({
  selector: 'app-testing-page',
  templateUrl: './testing-page.component.html',
  styleUrls: ['./testing-page.component.css']
})
export class TestingPageComponent {


  @ViewChild(QuestionSingleFormComponent)
  childComponentSingleQuestion?: QuestionSingleFormComponent;

  @ViewChild(QuestionMultipleFormComponent)
  childComponentMultipleQuestion?: QuestionMultipleFormComponent;

  constructor(private resultService: ResultService,
              private router:Router,private route: ActivatedRoute){
  }


  onSubmit(){
    this.childComponentSingleQuestion?.getResult()
    this.childComponentMultipleQuestion?.getResult()
    MaterialService.toast('Ваши результаты сохранены!')
    //this.resultService.getExcel()
  }

  // onExcel(){
  //   this.router.navigate(['excel']);
  // }

}
