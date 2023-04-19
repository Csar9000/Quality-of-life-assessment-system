import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.css']
})
export class SiteLayoutComponent {


  links=[
     {url:'/result',name:'Тестирование'},
     {url:'/excel',name:'Результаты'}
    // {url:'/history',name:'История'},
    // {url:'/order',name:'Добавить заказ'},
    // {url:'/categories',name:'Ассортимент'}
  ]

  constructor(private router:Router){
              
  } 
}

