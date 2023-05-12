import { Component, OnInit } from '@angular/core';
import { Root } from '../interfaces';
import { testingService } from '../shared/services/testing.service';
import { Question } from '../interfaces';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-question-bank',
  templateUrl: './question-bank.component.html',
  styleUrls: ['./question-bank.component.css']
})
export class QuestionBankComponent implements OnInit {

  questionRoot$!: Root;
  displayedColumns: string[] =[]
  dataSource: Question[] = []
  ELEMENT_DATA: Question[] = []

  idTest?: number | undefined

  panelOpenState: boolean = false;
  

  constructor(private testingService: testingService, private router:Router, private activatedRoute: ActivatedRoute){
    this.activatedRoute.params.subscribe((params: any) => 
  this.idTest = Number(params['idTest'])
 
  );}

  

  ngOnInit(){
    this.displayedColumns = ['id','textQuestion','answers', 'factors'];
    this.testingService.getQuestions().subscribe((data: any)=>
      {
        this.questionRoot$ = JSON.parse(data);

        this.questionRoot$.questions.forEach(element => {
          this.ELEMENT_DATA.push(element)
        });
        this.dataSource = this.ELEMENT_DATA
    })

    console.log(this.ELEMENT_DATA)
  }


  addQuestiontoTest(idQuestion: any){
    var id = Number(idQuestion)
    this.testingService.addQuestionToTest(id, this.idTest!).subscribe()
  }

}
