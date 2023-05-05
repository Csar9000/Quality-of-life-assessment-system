import { Component, Inject, OnInit } from '@angular/core';
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

  constructor(private testingService: testingService,
    public dialogRef: MatDialogRef<ChooseFactorsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User) {}
  ngOnInit(): void {
    this.testingService.getFactors().subscribe((data: any)=>
    {
      this.factors = data
      console.log(this.factors)
    }
    )
  }

  
  onNoClick(): void {
    this.dialogRef.close();
  }
}


