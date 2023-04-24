import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Result } from "src/app/interfaces";

@Injectable({
    providedIn: 'root'
})
export class ResultService{
    private results$ =  new Subject<number[][]>();


    constructor(private http: HttpClient){
        
    }
    fetch(): Observable<Result[]>{
        return this.http.get<Result[]>('/api/result')
    }

    create(idFactor:number,idAnswer:number):Observable<Result>{
        console.log(idFactor,idAnswer)

        return this.http.post<Result>('/api/createResult', {"idAnswer": idAnswer, "idFactor": idFactor});
    }

    getExcel():void{
        this.http.get('/api/createExcel');
    }


}