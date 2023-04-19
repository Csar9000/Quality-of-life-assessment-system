import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Result } from 'src/app/interfaces';
import { ResultService } from 'src/app/shared/services/result.service';

@Component({
  selector: 'app-question-multiple-form',
  templateUrl: './question-multiple-form.component.html',
  styleUrls: ['./question-multiple-form.component.css']
})
export class QuestionMultipleFormComponent {

  @ViewChildren("checkbox") elRef?: QueryList<ElementRef>;

  form?:FormGroup
  result?: Result

  constructor(private resultService: ResultService){}
  
  async getResult(){
    let ob$
    this.elRef?.forEach((el: ElementRef) => {
      if(el.nativeElement.checked){
        var str = el.nativeElement.id
        //console.log(el.nativeElement.id)
        var splitted = str.split("-", 2); 
        //console.log(splitted)

        this.resultService.create(Number(splitted[0]),Number(splitted[1]))
        .subscribe({
          next: (v) => console.log(v),
        error: (e) => console.error(e),
        complete: () => console.info('complete') 
        }
          
        );
      }
      
    });
  }


  // onSubmit(){
  //   let obs$
  //   this.form?.disable()
  //   obs$ = this.categoriesService.create(this.form?.value.name,this.image)

  //   obs$.subscribe(
  //     category =>{
  //       this.category = category
  //       MaterialService.toast('Изменения сохранены')
  //       this.form?.enable()
  //     },
  //     error=>{
  //       MaterialService.toast(error.error.message)
  //       this.form?.enable()
  //     }
  //   )
  // }
}
