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

  public createQuestion(textQuestion: string, typeQuestion: number, answers:AnswerToSave[], save:number, idTest:number): any{
    var req ={
      answers: answers,
      textQuestion: textQuestion,
      typeQuestion: typeQuestion,
      save: save,
      idTest: idTest
    }
    return this.http.post('api/createQuestion',req)
  }

  public updateQuestion(idQuestion:number, textQuestion: string, typeQuestion: number, answers:AnswerToSave[]): any{
    var req ={
      idQuestion: idQuestion,
      answers: answers,
      textQuestion: textQuestion,
      typeQuestion: typeQuestion
    }
    return this.http.post('api/updateQuestion',req)
  }

  public getTestings(): any{
    return this.http.get('api/getTestings')
  }

  public addQuestionToTest(idQuestion: number, idTest:number): any{
    var req ={
      idQuestion: idQuestion,
      idTest: idTest
    }
    return this.http.post('api/addQuestionToTest', req)
  }


  public getQuestionsInTest(idQuestion: number): any{
    var req ={
      idQuestion: idQuestion
    }
    return this.http.post('api/getQuestionsInTest', req)
  }

  public getQuestionData(idQuestion: number): any{
    var req ={
      idQuestion: idQuestion
    }
    return this.http.post('api/getQuestionData', req)
  }
}