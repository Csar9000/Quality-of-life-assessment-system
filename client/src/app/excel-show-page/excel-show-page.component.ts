import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ExcelServicesService } from '../shared/services/excel-services.service';

@Component({
  selector: 'app-excel-show-page',
  templateUrl: './excel-show-page.component.html',
  styleUrls: ['./excel-show-page.component.css']
})
export class ExcelShowPageComponent {
  title = 'excel-upload-download';
  
  ngOnInit(){
  }
  
   excel=[];
   headers:string[] | undefined;
   
    constructor(private excelService:ExcelServicesService,private http: HttpClient){
      
      this.getJSON().subscribe((data: never[]) => {
        data.forEach(row => {
          this.excel.push(row);
        })       
      });
    }
    
    exportAsXLSX():void {
      
       this.excelService.exportAsExcelFile(this.excel, 'sample');
    }
    public getJSON(): Observable<any> {
      let data$ = this.http.get('api/getResult')
      this.headers = Object.keys(data$)
      return data$;
    }
}
