import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Subscription } from 'rxjs';
import { MaterialService } from 'src/app/shared/classes/material.service';
import { ResultService } from 'src/app/shared/services/result.service';

@Component({
  selector: 'app-question-single-form',
  templateUrl: './question-single-form.component.html',
  styleUrls: ['./question-single-form.component.css']
})
export class QuestionSingleFormComponent {
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
    
    
    //this.resultService.fetch()
  }
}
