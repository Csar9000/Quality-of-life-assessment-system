import { Component } from '@angular/core';
import { QuestionInTest} from '../interfaces';
import { testingService } from '../shared/services/testing.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-questions-in-test',
  templateUrl: './questions-in-test.component.html',
  styleUrls: ['./questions-in-test.component.css']
})
export class QuestionsInTestComponent {
  displayedColumns: string[] =[]
  ELEMENT_DATA!: QuestionInTest[]
  dataSource: any

  idTest?: number | undefined

  constructor(private testingService: testingService, private router:Router, private activatedRoute: ActivatedRoute){
      this.activatedRoute.params.subscribe((params: any) => 
    this.idTest = Number(params['testId'])
    );
    //console.log(this.idQuestion)
    this.testingService.getQuestionsInTest(this.idTest!!).subscribe((data: any)=>{
     
      this.ELEMENT_DATA = JSON.parse(JSON.stringify(data))
     //console.log(this.ELEMENT_DATA)
      this.dataSource = this.ELEMENT_DATA;
    })
    this.displayedColumns = ['id','textQuestion', 'typeQuestion', 'count', 'string_agg', 'btn'];
    
  }

  changeQuestion(idQuestion: any){
    this.router.navigate(["/edit", idQuestion], { queryParams: { origin: 'question-list' } })
  }

  createQuestion(){
    this.router.navigate(["/constructor"], { queryParams: { origin: 'question-create-add-in-test', idTest: this.idTest } })
  }
}
