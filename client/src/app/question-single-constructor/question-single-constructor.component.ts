import { Component,  ContentChildren, ElementRef, Inject, QueryList, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatDialogRef} from '@angular/material/dialog';
import { MatFormField } from '@angular/material/form-field';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { testingService } from '../shared/services/testing.service';
import { Answer, AnswerToSave, FactorOrigin,FactorToSave, QuestionData, User } from '../interfaces';
import { ChooseFactorsComponent } from '../choose-factors/choose-factors.component';
import { type } from 'os';
import { AnswerElementComponent } from '../answer-element/answer-element.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Json } from 'sequelize/types/utils';


@Component({
  selector: 'app-question-single-constructor',
  templateUrl: './question-single-constructor.component.html',
  styleUrls: ['./question-single-constructor.component.css']
})
export class QuestionSingleConstructorComponent {
  counter = 1
  arr: any = []
  factors: FactorOrigin[] = []

  questionData: QuestionData[] = []
  

  textQuestion: string = ''
  typeQuestion: number = 1

  @ViewChild(AnswerElementComponent)
  childAnswerElement: AnswerElementComponent | undefined;

  @ViewChild('textQuestion') qText: ElementRef | undefined
  
  answers: AnswerToSave[] | undefined
  idQuestion?: number | undefined


  constructor(public dialog: MatDialog, private testingService: testingService, private router:Router, private activatedRoute: ActivatedRoute, ) {
    this.arr.push(this.counter)

    this.activatedRoute.params.subscribe((params: any) => 
    this.idQuestion = Number(params['questionId'])
    

    );
    if(this.idQuestion!=null){
     this.testingService.getQuestionData(this.idQuestion).subscribe((data: any)=>{
       this.questionData = JSON.parse(JSON.stringify(data))
       //var arr = this.questionData[0].string_agg.split(', ')
        this.questionData.forEach(element => {
          this.factors.push({
            idFactor: element.idFactor,
            nameFactor: element.nameFactor
          })
        });
       //this.childAnswerElement!!.factors = 
       
     })
     console.log(this.factors)
    }
  }

  saveQuestion(){
    this.childAnswerElement?.saveQuestion()
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ChooseFactorsComponent, {
      //data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
    
      this.factors = result
      this.childAnswerElement!!.textQuestion = this.qText?.nativeElement.value
      this.childAnswerElement!!.factors = result

    });
  }
}


