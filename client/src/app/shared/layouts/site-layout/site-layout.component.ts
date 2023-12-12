import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.css']
})
export class SiteLayoutComponent {


  links=[
    {url:'/cognitive-map', name: 'Когнитивная карта'},
     {url:'/results',name:'Результаты'},
     {url:'/constructor',name:'Создание вопроса'},
     {url:'/testing-list', name: 'Тестирования цехов'},
     {url:'/question-bank', name: 'Банк вопросов'}
  ]

  constructor(private router:Router){
              
  } 
}

