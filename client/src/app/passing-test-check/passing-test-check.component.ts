import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PassingTestOrder } from '../interfaces';
import { ResultService } from '../shared/services/result.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-passing-test-check',
  templateUrl: './passing-test-check.component.html',
  styleUrls: ['./passing-test-check.component.css']
})
export class PassingTestCheckComponent {
  displayedColumns: string[] =[]
  ELEMENT_DATA!: PassingTestOrder[]
  dataSource: any

  idTest!: number
  idDepartment!: number

  constructor(private route: ActivatedRoute, private resultService: ResultService){
    this.route.queryParams.subscribe(
      (queryParam: any) => {
        this.idTest= Number(queryParam.idTest)
        this.idDepartment = Number(queryParam.idDepartment)
      }
    )

    this.resultService.getPassingTestOrder(this.idTest, this.idDepartment).subscribe((data: any)=>{
      this.ELEMENT_DATA = JSON.parse(JSON.stringify(data))
      console.log(this.ELEMENT_DATA)
      this.dataSource = this.ELEMENT_DATA

    })
    this.displayedColumns = ['id', 'codeUser', 'departmentNum', 'passing_check', 'testName'];
  }
  
}
