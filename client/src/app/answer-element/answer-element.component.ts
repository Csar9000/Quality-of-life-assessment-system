import { AfterContentChecked, AfterViewInit, Component, ContentChild, ElementRef, OnChanges, OnInit, QueryList, Renderer2, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
import { AnswerToSave, FactorOrigin, FactorToSave, QuestionData } from '../interfaces';
import { testingService } from '../shared/services/testing.service';


@Component({
  selector: 'app-answer-element',
  templateUrl: './answer-element.component.html',
  styleUrls: ['./answer-element.component.css']
})
export class AnswerElementComponent implements AfterContentChecked{

  counter = 0
  arr: any = []
  factors: FactorOrigin[] = []
  rawFactors: FactorToSave[] = []
  rawAnswers: string[]= []

  weights: any[] = []

  textQuestion: string = ''
  typeQuestion: number = 1

  answers: AnswerToSave[] = []
  
  uniqueAnswers: any[] = []

  count = 0

  allowInput = true


  @ViewChildren("weight") weightsToSave: QueryList<ElementRef> | undefined;

  @ViewChildren('el',{read: ElementRef}) el: QueryList<ElementRef> | undefined;

  @ContentChild('el') myRef: ElementRef | undefined;

  @ViewChildren("answerText") answersEl: QueryList<ElementRef> | undefined;

  constructor(private testingService: testingService){
  }
  ngAfterContentChecked(): void {
    if(this.weights.length>0){
      this.count+=1
      console.log(this.count)
      if(this.allowInput){
        this.setWeights()
      }
      if(this.count>=3){
        this.allowInput = false
      }

    }
   
  }

  setWeights(){
    if(this.weights.length>0){
      
      if(this.allowInput){
        this.weightsToSave?.forEach((item,index) => item.nativeElement.value=this.weights[index]);
      }
    }

  }

  createEl():void {
    this.counter+=1
    this.arr.push(this.counter)

  }

  updateQuestion(idQuestion: any, idTest: number){
    idQuestion = Number(idQuestion)
    this.rawFactors = []
    this.answersEl?.forEach(element=> {
      this.rawAnswers.push(element.nativeElement.value)
    })

    this.weightsToSave?.forEach(element => {
      
      this.rawFactors.push({idFactor: element.nativeElement.id,  weight: element.nativeElement.value})
    });
    

    this.rawAnswers?.forEach((element) => {
      let item: AnswerToSave = {textAnswer: '', factor: []}
      item.textAnswer = element
      if(this.rawFactors.length>0){
        for (let i = 0; i < this.factors.length; i++) {
          item.factor.push({idFactor: this.rawFactors[i].idFactor, weight: this.rawFactors[i].weight})
        }

        this.rawFactors.splice(0, this.factors.length);
      }
      if(item.factor.length!=0){
        this.answers.push(item)
      }
    });
    this.testingService.updateQuestion(idQuestion,this.textQuestion, this.typeQuestion, this.answers).subscribe()
    this.answers = []
  }


  saveQuestion(save: number, idTest: number){
    this.rawFactors = []
    this.answersEl?.forEach(element=> {
      this.rawAnswers.push(element.nativeElement.value)
    })

    this.weightsToSave?.forEach(element => {
      
      this.rawFactors.push({idFactor: element.nativeElement.id,  weight: element.nativeElement.value})
    });
    

    this.rawAnswers?.forEach((element) => {
      let item: AnswerToSave = {textAnswer: '', factor: []}
      item.textAnswer = element
      if(this.rawFactors.length>0){
        for (let i = 0; i < this.factors.length; i++) {
          item.factor.push({idFactor: this.rawFactors[i].idFactor, weight: this.rawFactors[i].weight})
        }

        this.rawFactors.splice(0, this.factors.length);
      }
      if(item.factor.length!=0){
        this.answers.push(item)
      }
    });
    this.testingService.createQuestion(this.textQuestion, this.typeQuestion, this.answers, save, idTest).subscribe()
    this.answers = []
  }
}
