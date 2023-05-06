import { Renderer2, Component, ElementRef, Inject, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FactorOrigin, User } from '../interfaces';
import { testingService } from '../shared/services/testing.service';

@Component({
  selector: 'app-choose-factors',
  templateUrl: './choose-factors.component.html',
  styleUrls: ['./choose-factors.component.css']
})

export class ChooseFactorsComponent implements OnInit{
  factors: FactorOrigin[] = []
  checkBox: any= []
  chozenFactors: FactorOrigin[] = []

  @ViewChildren("factor") chosenFactorsRef?: QueryList<ElementRef>;

  constructor(private testingService: testingService,
    private renderer: Renderer2,
    public dialogRef: MatDialogRef<ChooseFactorsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FactorOrigin[]) {
      data = this.chozenFactors
    }
  ngOnInit(): void {
    this.testingService.getFactors().subscribe((data: any)=>
    {
      this.factors = data
    }
    )
  }

  
  onNoClick(): void {
    console.log(typeof(this.checkBox))
    this.chosenFactorsRef?.forEach((el: ElementRef) => {
      if(el.nativeElement.checked){
        this.checkBox.push(Number(el.nativeElement.id))       
      }
    });
    this.chozenFactors = this.factors.filter(x => this.checkBox.includes(x.idFactor));

    this.dialogRef.close(this.chozenFactors);
  }
}


