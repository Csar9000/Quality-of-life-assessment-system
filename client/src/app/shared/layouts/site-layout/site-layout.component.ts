import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.css']
})
export class SiteLayoutComponent {


  links=[
     {url:'/testing',name:'Тестирование'},
     {url:'/results',name:'Результаты'},
     {url:'/constructor',name:'Создание вопроса'},
     {url:'/testing-list', name: 'Тестирования цехов'},
     {url:'/question-bank', name: 'Банк вопросов'},
     {url:'/personalOrder', name: 'TT'}
    // {url:'/order',name:'Добавить заказ'},
    // {url:'/categories',name:'Ассортимент'}
  ]

  constructor(private router:Router){
              
  } 
}

