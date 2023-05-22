import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';


@Component({
  selector: 'app-personal-order',
  templateUrl: './personal-order.component.html',
  styleUrls: ['./personal-order.component.css']
})
export class PersonalOrderComponent {
  title = 'ng2-charts-demo';

  // PolarArea
  public polarAreaChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales' ];
  public polarAreaChartDatasets: ChartConfiguration<'polarArea'>['data']['datasets'] = [
    { data: [ 100, 86.5, 74.5, 44.5, 39.2 ] }
  ];
  public polarAreaLegend = true;

  public polarAreaOptions: ChartConfiguration<'polarArea'>['options'] = {
    responsive: false,
  };

  constructor() {
  }
}
