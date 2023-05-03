import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs'

@Component({
  selector: 'app-question-construtor',
  templateUrl: './question-construtor.component.html',
  styleUrls: ['./question-construtor.component.css']
})
export class QuestionConstrutorComponent implements AfterViewInit {
  @ViewChild('collapsible') elCollapsible: ElementRef | undefined;

  ngAfterViewInit(): void {

  }

  
}
