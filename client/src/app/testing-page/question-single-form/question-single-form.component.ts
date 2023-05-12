import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, Injectable, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { log } from 'console';
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

export class QuestionSingleFormComponent implements AfterViewInit{
  public questions: Question[] = []
  public answ: Answer[] = []

  @ViewChildren("myname") elRef?: QueryList<ElementRef>;
  
  constructor(private resultService: ResultService,private http: HttpClient){}

  ngAfterViewInit(): void {

    this.elRef?.changes.subscribe((list: QueryList<ElementRef>)=>{
      this.elRef?.forEach((el: ElementRef) => {
        var id = el.nativeElement.id
        var str = ''
        this.questions.forEach(element => {
          element.answers.forEach(ans=>{
            if(ans.idAnswer == id){
              str = ans.idAnswer.toString()
              //console.log(str)
              ans.factor.forEach(f => {
                str+=`-${f.idFactor.toString()}`
              });
            }
            
          })
          
        });
        el.nativeElement.id = str
    });
    })
    
  }

  getResult(){
    let obs$:any
    this.elRef?.forEach((el: ElementRef) => {
      if(el.nativeElement.checked){
        var str = el.nativeElement.id
        
        var splitted = str.split("-");
        for (let i = 1; i < splitted.length; i++) {
          this.resultService.create(Number(splitted[0]),Number(splitted[i])).subscribe()
          console.log(Number(splitted[0]),Number(splitted[i]))
          
        }
        //console.log(splitted)

        
        //console.log(obs$)
        //
      }
    });
    
  }

  
  viewQuestions(questions: Question[]){
      this.questions = questions
  }
}
