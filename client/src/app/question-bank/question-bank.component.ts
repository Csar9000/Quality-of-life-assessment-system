import { Component, OnInit } from '@angular/core';
import { Root } from '../interfaces';
import { testingService } from '../shared/services/testing.service';
import { Question } from '../interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Answer } from '../interfaces';
import { Factor } from '../interfaces';

@Component({
  selector: 'app-question-bank',
  templateUrl: './question-bank.component.html',
  styleUrls: ['./question-bank.component.css']
})
export class QuestionBankComponent implements OnInit {

  questionRoot$!: Root;
  displayedColumns: string[] =[]
  dataSource: any
  ELEMENT_DATA: Question[] = []

  idTest?: number | undefined

  panelOpenState: boolean = false;
  
  public searchForm?: FormGroup 

  nameFactor: any
  nameQuestion: any

  constructor(private testingService: testingService, private router:Router, private activatedRoute: ActivatedRoute){
    this.activatedRoute.params.subscribe((params: any) => 
  this.idTest = Number(params['idTest'])

  );}

  ngOnInit(){
    this.searchFormInit();
    this.displayedColumns = ['id','textQuestion','answers', 'factors'];
    this.testingService.getQuestions().subscribe((data: any)=>
      {
        this.questionRoot$ = JSON.parse(data);

        this.questionRoot$.questions.forEach(element => {
          this.ELEMENT_DATA.push(element)
        });
        this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
        this.dataSource.filterPredicate = this.getFilterPredicate();
    })

   // console.log(this.ELEMENT_DATA)
  }

  searchFormInit() {
    this.searchForm = new FormGroup({
      questionName: new FormControl('', Validators.pattern('^[a-zA-Zа-яА-Я]+$')),
      factorName: new FormControl('', Validators.pattern('^[a-zA-Zа-яА-Я ]+$'))
    });
  }

  getFilterPredicate() {
    return (row: Question, filters: string) => {
      const matchFilter = [];
      const filterArray = filters.split('$');
      const nameQuestion = filterArray[0];
      const nameFactor = filterArray[1];

      const columnNameQuestion = row.textQuestion;
     // const columnNameFactor = row2.nameFactor

      // verify fetching data by our searching values
      const customFilterTN = columnNameQuestion.toLowerCase().includes(nameQuestion);
      //const customFilterAS = columnNameFactor.toLowerCase().includes(nameFactor);
      matchFilter.push(customFilterTN);
     // matchFilter.push(customFilterAS);
      return matchFilter.every(Boolean);
    };
}

  applyFilter() {
    const as = this.searchForm.get('questionName').value;
    const factorName = this.searchForm.get('factorName').value;

    this.nameQuestion = (as === null || as === '') ? '' : as;
    this.nameFactor = (factorName === null || factorName === '') ? '' : factorName;

    // create string of our searching values and split if by '$'
    const filterValue = this.nameQuestion + '$' + this.nameFactor
    console.log(filterValue)
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  addQuestiontoTest(idQuestion: any){
    var id = Number(idQuestion)
    this.testingService.addQuestionToTest(id, this.idTest!).subscribe()
  }
}
