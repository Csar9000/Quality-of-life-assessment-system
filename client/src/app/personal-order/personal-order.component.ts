import { AfterViewInit, Component } from '@angular/core';
import { Chart, ChartConfiguration, ChartOptions, Ticks, plugins } from 'chart.js';
import { min } from 'rxjs';
import { ResultService } from '../shared/services/result.service';


@Component({
  selector: 'app-personal-order',
  templateUrl: './personal-order.component.html',
  styleUrls: ['./personal-order.component.css']
})
export class PersonalOrderComponent implements AfterViewInit {
  title = 'ng2-charts-demo';
  DATA: any
  

  // PolarArea
  public polarAreaChartLabels: string[] = [];
  public polarAreaChartDatasets: ChartConfiguration<'polarArea'>['data']['datasets'] = [];
  public polarAreaLegend = true;

  public polarAreaOptions: ChartOptions = {
    responsive:false,
    
    maintainAspectRatio: false,
  };


  constructor(private resultService:ResultService) {
    this.resultService.getPersonalOrder(15).subscribe(data =>{
      this.DATA = data
      this.DATA.forEach(element => {
        this.polarAreaChartLabels.push(element.mainFactor)
      });

      var number_arr: number[] = []
      this.DATA.forEach(element => {
        number_arr.push(Number(element.sum))
      });
      var polarAreaChartDatasets: ChartConfiguration<'polarArea'>['data']['datasets'] = [
        { data: number_arr}
      ];
      this.polarAreaChartDatasets = polarAreaChartDatasets
      
    })
  }
  ngAfterViewInit(): void {

  }

  
}
