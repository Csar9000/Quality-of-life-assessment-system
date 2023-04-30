import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Subscription } from 'rxjs';
import { Question } from 'src/app/interfaces';
import { Answer } from 'src/app/interfaces';
import { MaterialService } from 'src/app/shared/classes/material.service';
import { ResultService } from 'src/app/shared/services/result.service';

@Component({
  selector: 'app-question-single-form',
  templateUrl: './question-single-form.component.html',
  styleUrls: ['./question-single-form.component.css']
})
export class QuestionSingleFormComponent {
  public questions: Question[] = []
  public answ: Answer[] = []

  @ViewChildren("myname") elRef?: QueryList<ElementRef>;
  
  constructor(private resultService: ResultService,private http: HttpClient){
    
   
  }

  getResult(){
    let obs$:any
    this.elRef?.forEach((el: ElementRef) => {
      if(el.nativeElement.checked){
        var str = el.nativeElement.id
        //console.log(div.nativeElement.id)
        var splitted = str.split("-", 2); 
        //console.log(splitted)

        obs$ = this.resultService.create(Number(splitted[0]),Number(splitted[1]))
        //console.log(obs$)
        obs$.subscribe()
      }
    });
    
  }

  
  viewQuestions(questions: Question[]){
      this.questions = questions

      this.elRef?.forEach((el: ElementRef) => {
        var id = el.nativeElement.id
        var str = ''
        this.questions.forEach(element => {
          element.answers.forEach(ans=>{
            if(ans.idAnswer == id){
              str = ans.idAnswer.toString()
              console.log(str)
              ans.factor.forEach(f => {
                str+=`-${f.idFactor.toString()}`
              });
            }
            
          })
          
        });
        el.nativeElement.id = str
    });
      
      
  }
}
