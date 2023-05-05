import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from "rxjs";
import { Root } from 'src/app/interfaces';


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
}