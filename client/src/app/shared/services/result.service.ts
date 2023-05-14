import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Result } from "src/app/interfaces";

@Injectable({
    providedIn: 'root'
})
export class ResultService{

    constructor(private http: HttpClient){
        
    }
    fetch(): Observable<Result[]>{
        return this.http.get<Result[]>('/api/result')
    }

    create(idFactor:number,idAnswer:number):Observable<Result>{
        return this.http.post<Result>('/api/createResult', {"idAnswer": idFactor, "idFactor": idAnswer});
    }

    getResultsByIdTest(idTest: number): Observable<any>{
        var req={
            idTest: idTest
          }
        return this.http.post('api/getResult', req)
    }


}