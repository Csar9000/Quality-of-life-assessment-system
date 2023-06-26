import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-create-factor',
  templateUrl: './modal-create-factor.component.html',
  styleUrls: ['./modal-create-factor.component.css']
})
export class ModalCreateFactorComponent {

  factorForm: FormGroup
  mainFactorInput: FormGroup
  selected = 'option2';
  mainFactors=[
    'Здоровье',
    'Профессиональное',
    'Социальное',
    'Эмоциональное',
    'Финансовое',
  ]

  constructor(){
    this.searchFormInit();
  }

  searchFormInit() {
    this.factorForm = new FormGroup({
      departmentName: new FormControl('', Validators.pattern('^[a-zA-Z ]+$')),
      testName: new FormControl('', Validators.pattern('^[a-zA-Z ]+$')),
      testingBeginDate: new FormControl(''),
      testingEndDate: new FormControl('')
    });
    this.mainFactorInput = new FormGroup({
      departmentName: new FormControl('', Validators.pattern('^[a-zA-Z ]+$')),
      testName: new FormControl('', Validators.pattern('^[a-zA-Z ]+$')),
      testingBeginDate: new FormControl(''),
      testingEndDate: new FormControl('')
    });
  }

}
