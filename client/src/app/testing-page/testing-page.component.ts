import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, RouteReuseStrategy } from '@angular/router';
import { Question, Result, Root } from '../interfaces';
import { HttpClient } from '@angular/common/http';
import { MaterialService } from '../shared/classes/material.service';
import { ResultService } from '../shared/services/result.service';
import { testingService } from '../shared/services/testing.service';
import { QuestionMultipleFormComponent } from './question-multiple-form/question-multiple-form.component';
import { QuestionSingleFormComponent } from './question-single-form/question-single-form.component';
import { Json } from 'sequelize/types/utils';
import { Observable, find, map, mergeMap, switchMap, tap, toArray } from 'rxjs';

@Component({
  selector: 'app-testing-page',
  templateUrl: './testing-page.component.html',
  styleUrls: ['./testing-page.component.css']
})
export class TestingPageComponent {

  categories$!: Root;
  question!:any

  singleQuestion:Question[] = []
  multipleQuestion:Question[] = []

  d: any
  accounts!: Root
  

  @ViewChild(QuestionSingleFormComponent)
  childComponentSingleQuestion?: QuestionSingleFormComponent;

  @ViewChild(QuestionMultipleFormComponent)
  childComponentMultipleQuestion?: QuestionMultipleFormComponent;
  responseuserName: any

  constructor(private testingService: testingService,
              private router:Router,private route: ActivatedRoute,private http: HttpClient){   
  }
  ngOnInit() {
    this.testingService.getQuestions().subscribe((data: any)=>
      {
       
        this.categories$ = JSON.parse(data);
       
        this.categories$.questions.forEach(d=>{
          //console.log(d)
          switch(d.typeQuestion){
            case 1: this.singleQuestion.push(d)
              break;
            case 2: this.multipleQuestion.push(d)
              break;
          }
        })

        this.childComponentSingleQuestion?.viewQuestions(this.singleQuestion)
        //this.childComponentMultipleQuestion?.getResult(this.multipleQuestion)


        //console.log(this.singleQuestion)
        //console.log(this.multipleQuestion)
        // var funcs: (() => Question)[] = []
        // this.categories$.questions.forEach( (i) => funcs.push( () => i  ) )
        // console.log(funcs)
        // this.categories$ = data;   
        // this.responseuserName = this.categories$['questions']; 
        // console.log(this.categories$.questions)

        

    })

    // this.testingService.getQuestions()
    //       .pipe(
    //         mergeMap(async (accounts) => accounts),
    //         map((account: Root) => account.questions),
    //         toArray()
    //       )
    //       .subscribe((customers) => { console.info(customers)} )
  }
  

  onSubmit(){
    this.childComponentSingleQuestion?.getResult()
    this.childComponentMultipleQuestion?.getResult()


    //this.d = JSON.stringify(this.responseuserName)
    //this.accounts = JSON.parse(this.d)
    
    
    //alert(`Address: ${this.categories$.subscribe(event => this.question = event)}`);
    
    //console.log(`Address: ${ data$}`);
    MaterialService.toast('Ваши результаты сохранены!')
    
  }

}
