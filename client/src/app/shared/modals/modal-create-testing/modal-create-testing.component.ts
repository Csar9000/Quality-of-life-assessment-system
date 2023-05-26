import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { ReplaySubject, Subject, takeUntil, take } from 'rxjs';
import { testingService } from '../../services/testing.service';


export interface Departments {
  idDepartment: number,
  departmentNum: string;
}



@Component({
  selector: 'app-modal-create-testing',
  templateUrl: './modal-create-testing.component.html',
  styleUrls: ['./modal-create-testing.component.css']
})

export class ModalCreateTestingComponent implements OnInit, AfterViewInit, OnDestroy{
  public testingForm?: FormGroup 
  protected departments: Departments[] = [] 

    public bankCtrl: FormControl<Departments> = new FormControl<Departments>(null);
  
    /** control for the MatSelect filter keyword */
    public bankFilterCtrl: FormControl<string> = new FormControl<string>('');
  
    /** list of banks filtered by search keyword */
    public filteredDepartments: ReplaySubject<Departments[]> = new ReplaySubject<Departments[]>(1);
  
    @ViewChild('singleSelect', { static: true }) singleSelect: MatSelect;
  
    /** Subject that emits when the component has been destroyed. */
    protected _onDestroy = new Subject<void>();

  constructor(private testingService: testingService){
    this.testingService.getDepartments().subscribe(data=>{
      this.departments = data
    })
    this.searchFormInit();

  }

  searchFormInit() {
    this.testingForm = new FormGroup({
      departmentName: new FormControl('', Validators.pattern('^[a-zA-Z ]+$')),
      testName: new FormControl('', Validators.pattern('^[a-zA-Z ]+$')),
      testingBeginDate: new FormControl(''),
      testingEndDate: new FormControl('')
    });
  }

  ngOnInit() {
    this.testingService.getDepartments().subscribe(data=>{
      this.departments = data

      // set initial selection
    //this.bankCtrl.setValue(this.departments[0]);

    // load the initial bank list
    this.filteredDepartments.next(this.departments.slice());

    // listen for search field value changes
    this.bankFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterBanks();
      });
    })
    
  }

  ngAfterViewInit() {
    this.setInitialValue();
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  protected setInitialValue() {
    
    this.filteredDepartments
      .pipe(take(1), takeUntil(this._onDestroy))
      .subscribe(() => {
        this.singleSelect.compareWith = (a: Departments, b: Departments) => a && b && a.departmentNum === b.departmentNum;
      });
  }

  protected filterBanks() {

    if (!this.departments) {
      return;
    }
    // get the search keyword
    let search = this.bankFilterCtrl.value;
    if (!search) {
      this.filteredDepartments.next(this.departments.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the banks
    this.filteredDepartments.next(
      this.departments.filter(bank => bank.departmentNum.toLowerCase().indexOf(search) > -1)
    );
  }

}
