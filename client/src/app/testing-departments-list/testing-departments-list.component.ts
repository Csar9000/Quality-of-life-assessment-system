import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { Testinglist } from '../interfaces';
import { testingService } from '../shared/services/testing.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-testing-departments-list',
  templateUrl: './testing-departments-list.component.html',
  styleUrls: ['./testing-departments-list.component.css']
})
export class TestingDepartmentsListComponent {
  displayedColumns: string[] =[]
  ELEMENT_DATA!: Testinglist[]
  dataSource: any

  clickedRows = new Set<Testinglist>();

  constructor(private testingService: testingService, private router:Router){
    this.testingService.getTestings().subscribe((data: any)=>{
     
      this.ELEMENT_DATA = JSON.parse(data)
      console.log(this.ELEMENT_DATA)
      this.dataSource = this.ELEMENT_DATA;
    })
    this.displayedColumns = ['departmentNum', 'testName', 'dateNotificationDate', 'datePassingTest', 'testCreatingDate'];
    
  }

  getTestQuestions(){
    this.router.navigate(["/test", 1])
  }
  

}
