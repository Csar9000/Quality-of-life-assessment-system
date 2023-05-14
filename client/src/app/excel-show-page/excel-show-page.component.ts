import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ExcelServicesService } from '../shared/services/excel-services.service';
import { Testinglist } from '../interfaces';
import { testingService } from '../shared/services/testing.service';
import { ResultService } from '../shared/services/result.service';

@Component({
  selector: 'app-excel-show-page',
  templateUrl: './excel-show-page.component.html',
  styleUrls: ['./excel-show-page.component.css']
})
export class ExcelShowPageComponent {
  title = 'excel-upload-download';
  displayedColumns: string[] =[]
  ELEMENT_DATA!: Testinglist[]
  dataSource: any

  idTest: any

  ngOnInit(){
  }
  
   excel=[];
   
    constructor(private excelService:ExcelServicesService, private testingService: testingService,private http: HttpClient, private ResultService: ResultService){
      
      this.testingService.getTestings().subscribe((data: any)=>{
        this.ELEMENT_DATA = JSON.parse(data)
       // console.log(this.ELEMENT_DATA)
        this.dataSource = this.ELEMENT_DATA;
      })
      this.displayedColumns = ['id','departmentNum', 'testName', 'dateNotificationDate', 'datePassingTest', 'actions'];
    }


  

    
    exportAsXLSX(idTest: number, departmentNum: string):void {
      this.excel = []

      this.ResultService.getResultsByIdTest(idTest).subscribe((data: never[]) => {
        if(data!=null){
          data.forEach(row => {
            this.excel.push(row);
          })       
        }
        this.excelService.exportAsExcelFile(this.excel, 'sample');
      });
      
      
    }

}
