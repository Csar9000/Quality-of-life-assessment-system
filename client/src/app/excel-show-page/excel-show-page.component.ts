import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { ExcelServicesService } from '../shared/services/excel-services.service';
import { Testinglist } from '../interfaces';
import { testingService } from '../shared/services/testing.service';
import { ResultService } from '../shared/services/result.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

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
  public searchForm?: FormGroup 

  date: any
  name: any
  department: any
  excel: never[] =[];



  idTest: any

  ngOnInit() {

  }
   
   
    constructor(private excelService:ExcelServicesService,
       private testingService: testingService,
       private http: HttpClient,
       private ResultService: ResultService,
       private router: Router){
        this.searchFormInit();
      
      this.testingService.getTestings().subscribe((data: any)=>{
        this.ELEMENT_DATA = JSON.parse(data)
       // console.log(this.ELEMENT_DATA)
       this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
       
       /* Filter predicate used for filtering table per different columns
       *  */
       this.dataSource.filterPredicate = this.getFilterPredicate();
      })
      this.displayedColumns = ['id','departmentNum', 'testName', 'dateNotificationDate', 'datePassingTest', 'actions'];
      
    }
    searchFormInit() {
      this.searchForm = new FormGroup({
        arrivalStation: new FormControl('', Validators.pattern('^[a-zA-Z ]+$')),
        testName: new FormControl('', Validators.pattern('^[a-zA-Z ]+$')),
        departureDate: new FormControl('')
      });
    }

    getFilterPredicate() {
      return (row: Testinglist, filters: string) => {
        // split string per '$' to array
        const filterArray = filters.split('$');
        const departureDate = filterArray[0];
        const testName = filterArray[1];
        const arrivalStation = filterArray[2];
  

        const matchFilter = [];
  
        // Fetch data from row
        const columnDepartureDate = new Date(row.dateNotificationDate);
        const columnTestName = row.testName;
        const columnArrivalStation = row.departmentNum;

      
  
        // verify fetching data by our searching values
        const customFilterTN = columnTestName.toLowerCase().includes(testName);
        const customFilterDD = columnDepartureDate.toDateString().toLowerCase().includes(departureDate);
        const customFilterAS = columnArrivalStation.toLowerCase().includes(arrivalStation);
  
        // push boolean values into array
        matchFilter.push(customFilterDD);
        matchFilter.push(customFilterTN);
        matchFilter.push(customFilterAS);
  
        // return true if all values in array is true
        // else return false
        return matchFilter.every(Boolean);
      };
  }

    applyFilter() {
      const date = this.searchForm.get('departureDate').value;
      const as = this.searchForm.get('arrivalStation').value;
      const testName = this.searchForm.get('testName').value;
  
      this.date = (date === null || date === '') ? '' : date.toDateString();
      this.department = as === null ? '' : as;
      this.name = testName === null ? '' : testName;
  
      // create string of our searching values and split if by '$'
      const filterValue = this.date + '$' + this.name + '$' + this.department;
      this.dataSource.filter = filterValue.trim().toLowerCase();
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

    checkPassTest(idTest:number, idDepartment:number){
      this.router.navigate(["/passing-check"], { queryParams: { idTest: idTest, idDepartment: idDepartment } })
    }

}
