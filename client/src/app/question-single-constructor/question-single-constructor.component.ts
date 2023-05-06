import { Component, ComponentFactoryResolver, ElementRef, Inject, ViewChild, ViewContainerRef } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatDialogRef} from '@angular/material/dialog';
import { MatFormField } from '@angular/material/form-field';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FactorOrigin, User } from '../interfaces';
import { ChooseFactorsComponent } from '../choose-factors/choose-factors.component';


@Component({
  selector: 'app-question-single-constructor',
  templateUrl: './question-single-constructor.component.html',
  styleUrls: ['./question-single-constructor.component.css']
})
export class QuestionSingleConstructorComponent {
  counter = 1
  arr: any = []
  factors: FactorOrigin[] = []

  @ViewChild('R') d1:ElementRef | undefined;
  @ViewChild('el') d2:ElementRef | undefined;

  createEl():void {
    this.counter+=1
    //this.d1?.nativeElement.insertAdjacentHTML('beforeend', this.d2?.nativeElement.innerHTML);
    this.arr.push(this.counter)
  }
  constructor(public dialog: MatDialog) {
    this.arr.push(this.counter)
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ChooseFactorsComponent, {
      //data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      
      console.log('The dialog was closed');
      this.factors = result
      console.log(this.factors)
    });
  }
}


