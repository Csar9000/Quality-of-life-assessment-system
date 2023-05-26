import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modal-create-factor',
  templateUrl: './modal-create-factor.component.html',
  styleUrls: ['./modal-create-factor.component.css']
})
export class ModalCreateFactorComponent {

  factorForm: FormGroup
  selected = 'option2';
  mainFactors=[
    'Здоровье',
    'Профессиональное',
    'Социальное',
    'Эмоциональное',
    'Финансовое',
  ]

}
