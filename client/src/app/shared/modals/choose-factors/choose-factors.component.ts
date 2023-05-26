import { Renderer2, Component, ElementRef, Inject, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FactorOrigin, User } from '../../../interfaces';
import { testingService } from '../../services/testing.service';
import { ModalCreateFactorComponent } from '../modal-create-factor/modal-create-factor.component';
import { DialogRef } from '@angular/cdk/dialog';

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

  constructor(private testingService: testingService, private dialog: MatDialog,
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

  onAddClick(){
    //console.log(typeof(this.checkBox))
    this.chosenFactorsRef?.forEach((el: ElementRef) => {
      if(el.nativeElement.checked){
        this.checkBox.push(Number(el.nativeElement.id))       
      }
    });
    this.chozenFactors = this.factors.filter(x => this.checkBox.includes(x.idFactor));

    this.dialogRef.close(this.chozenFactors);
  }

  onCreateClick(){
    //create-factor

    const dialogRef = this.dialog.open(ModalCreateFactorComponent, {
      //data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
    
      // this.factors = result
      // this.childAnswerElement!!.textQuestion = this.qText?.nativeElement.value
      // this.childAnswerElement!!.factors = result

    });
  }
  
  onNoClick(): void {
    
  }
}


