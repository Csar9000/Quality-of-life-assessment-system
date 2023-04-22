import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { MaterialService } from '../shared/classes/material.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-lopin-page',
  templateUrl: './lopin-page.component.html',
  styleUrls: ['./lopin-page.component.css']
})
export class LopinPageComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  aSub!: Subscription
  
  constructor(private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute){}

  ngOnInit(): void {
    this.form = new FormGroup({
      codeUser: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])

    })

    this.route.queryParams.subscribe((params: Params)=>{
      if(params['registered']){
        ///
      }
      else if (params['accessDenied']){
        ////
      }
    })
  }

  ngOnDestroy() {
    if (this.aSub){
      this.aSub.unsubscribe()
    }
  }

  onSubmit(){
    const user = {
      codeUser: this.form.value.codeUser,
      password: this.form.value.password
    }
    this.aSub = this.auth.login(user).subscribe({
      next: ()=> this.router.navigate(['/results']),
    error:error => {
      //MaterialService.toast(error.error.message)
      this.form?.enable()
    }
    }
    )
  }
  
}
