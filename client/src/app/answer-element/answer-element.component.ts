import { Component, ContentChild, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { AnswerToSave, FactorOrigin, FactorToSave } from '../interfaces';
import { elementAt } from 'rxjs';
import { testingService } from '../shared/services/testing.service';

@Component({
  selector: 'app-answer-element',
  templateUrl: './answer-element.component.html',
  styleUrls: ['./answer-element.component.css']
})
export class AnswerElementComponent {

  counter = 0
  arr: any = []
  factors: FactorOrigin[] = []
  rawFactors: FactorToSave[] = []
  rawAnswers: string[]= []

  textQuestion: string = ''
  typeQuestion: number = 1

  answers: AnswerToSave[] = []
  


  @ViewChildren("weight") weightsToSave: QueryList<ElementRef> | undefined;

  @ViewChildren('el',{read: ElementRef}) el: QueryList<ElementRef> | undefined;

  @ContentChild('el') myRef: ElementRef | undefined;

  @ViewChildren("answerText") answersEl: QueryList<ElementRef> | undefined;

  constructor(private testingService: testingService){

  }

  createEl():void {
    this.counter+=1
    this.arr.push(this.counter)
  }

  saveQuestion(){
    this.rawFactors = []
    this.answersEl?.forEach(element=>{
      this.rawAnswers.push(element.nativeElement.value)
    })

    
    //this.textQuestion = this.qText?.nativeElement.value
    //item.textAnswer = this.w?.nativeElement.value
    this.weightsToSave?.forEach(element => {
      this.rawFactors.push({idFactor: element.nativeElement.id,  weight: element.nativeElement.value})
    });
    

    this.rawAnswers?.forEach((element) => {
      let item: AnswerToSave = {textAnswer: '', factor: []}
      item.textAnswer = element
      if(this.rawFactors.length>0){
        for (let i = 0; i < this.factors.length; i++) {
          //console.log (i+" Block statement execution " + this.rawFactors[i].textAnswer);
          item.factor.push({idFactor: this.rawFactors[i].idFactor, weight: this.rawFactors[i].weight})
        }
        //console.log(this.rawFactors[0].weight)
        this.rawFactors.splice(0, this.factors.length);
      }
      
      //console.log (this.factors.length + "   Leng");
      
      if(item.factor.length!=0){
        this.answers.push(item)
      }

      // this.rawFactors.forEach((element: { textAnswer: string; }) => {
      //   console.log ("Block statement execution " + element.textAnswer);
      // });
      // console.log ("------");
      // let elementsToRemove = this.factors.length;
      // console.log(this.rawFactors.length + " DOO")
      // console.log(limit + " Limit")
      // this.rawFactors = this.rawFactors.splice(beginLimit, elementsToRemove);
      // console.log(this.rawFactors.length)
      // beginLimit = limit
    });
    this.testingService.createQuestion(this.textQuestion, this.typeQuestion, this.answers).subscribe()
    this.answers = []
    
 
    // this.answersToSave?.forEach((el: ElementRef) => {
    //   item.textAnswer = el.nativeElement.value
      
      // this.factors.forEach(f=>{
      // this.weightsToSave?.forEach(element => {   
      //     item.factor.push({idFactor: element.nativeElement.id, weight: element.nativeElement.value})
      // })
        
      // });
    // });
      
     

  }

  
}
