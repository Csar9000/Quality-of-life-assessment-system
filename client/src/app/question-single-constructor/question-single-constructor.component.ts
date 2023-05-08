import { Component, ComponentFactoryResolver, ContentChildren, ElementRef, Inject, QueryList, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatDialogRef} from '@angular/material/dialog';
import { MatFormField } from '@angular/material/form-field';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Answer, AnswerToSave, FactorOrigin,FactorToSave, User } from '../interfaces';
import { ChooseFactorsComponent } from '../choose-factors/choose-factors.component';
import { type } from 'os';
import { AnswerElementComponent } from '../answer-element/answer-element.component';


@Component({
  selector: 'app-question-single-constructor',
  templateUrl: './question-single-constructor.component.html',
  styleUrls: ['./question-single-constructor.component.css']
})
export class QuestionSingleConstructorComponent {
  counter = 1
  arr: any = []
  factors: FactorOrigin[] = []

  textQuestion: string = ''
  typeQuestion: number = 1

  @ViewChild(AnswerElementComponent)
  childAnswerElement: AnswerElementComponent | undefined;

  @ViewChild('textQuestion') qText: ElementRef | undefined
  
  answers: AnswerToSave[] | undefined



  constructor(public dialog: MatDialog) {
    this.arr.push(this.counter)
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


