import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from "rxjs";
import { Answer, AnswerToSave, Root } from 'src/app/interfaces';


@Injectable({
  providedIn: 'root'
})
export class testingService {

  constructor(private http: HttpClient){ }
  public getQuestions(): any{
    return this.http.get('api/getQuestions')
  }

  public getFactors():any{
    return this.http.get('api/getFactors')
  }

  public createQuestion(textQuestion: string, typeQuestion: number, answers:AnswerToSave[]): any{
    var req ={
      answers: answers,
      textQuestion: textQuestion,
      typeQuestion: typeQuestion
    }
    return this.http.post('api/createQuestion',req)
  }

  public getTestings(): any{
    return this.http.get('api/getTestings')
  }
}