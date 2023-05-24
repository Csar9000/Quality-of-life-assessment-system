import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { ReplaySubject, Subject, takeUntil, take } from 'rxjs';


export interface Bank {
  name: string;
}



/** list of banks */
export const BANKS: Bank[] = [
  {name: 'Bank A (Switzerland)'},
  {name: 'Bank B (Switzerland)'},
  {name: 'Bank C (France)'},
  {name: 'Bank D (France)'},
  {name: 'Bank E (France)'},
  {name: 'Bank F (Italy)'},
  {name: 'Bank G (Italy)'},
  {name: 'Bank H (Italy)'},
  {name: 'Bank I (Italy)'},
  {name: 'Bank J (Italy)'},
  {name: 'Bank Kolombia (United States of America)'},
  {name: 'Bank L (Germany)'},
  {name: 'Bank M (Germany)'},
  {name: 'Bank N (Germany)'},
  {name: 'Bank O (Germany)'},
  {name: 'Bank P (Germany)'},
  {name: 'Bank Q (Germany)'},
  {name: 'Bank R (Germany)'}
];



@Component({
  selector: 'app-modal-create-testing',
  templateUrl: './modal-create-testing.component.html',
  styleUrls: ['./modal-create-testing.component.css']
})

export class ModalCreateTestingComponent implements OnInit, AfterViewInit, OnDestroy{
  public searchForm?: FormGroup 

  
  constructor(){
    this.searchFormInit();
  }

  searchFormInit() {
    this.searchForm = new FormGroup({
      departmentName: new FormControl('', Validators.pattern('^[a-zA-Z ]+$')),
      testName: new FormControl('', Validators.pattern('^[a-zA-Z ]+$')),
      testingBeginDate: new FormControl(''),
      testingEndDate: new FormControl('')
    });
  }


    /** list of banks */
    protected departments: Bank[] = BANKS;

    /** control for the selected bank */
    public bankCtrl: FormControl<Bank> = new FormControl<Bank>(null);
  
    /** control for the MatSelect filter keyword */
    public bankFilterCtrl: FormControl<string> = new FormControl<string>('');
  
    /** list of banks filtered by search keyword */
    public filteredBanks: ReplaySubject<Bank[]> = new ReplaySubject<Bank[]>(1);
  
    @ViewChild('singleSelect', { static: true }) singleSelect: MatSelect;
  
    /** Subject that emits when the component has been destroyed. */
    protected _onDestroy = new Subject<void>();



  ngOnInit() {
    // set initial selection
    this.bankCtrl.setValue(this.departments[10]);

    // load the initial bank list
    this.filteredBanks.next(this.departments.slice());

    // listen for search field value changes
    this.bankFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterBanks();
      });
  }

  ngAfterViewInit() {
    this.setInitialValue();
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  protected setInitialValue() {
    this.filteredBanks
      .pipe(take(1), takeUntil(this._onDestroy))
      .subscribe(() => {
        this.singleSelect.compareWith = (a: Bank, b: Bank) => a && b && a.name === b.name;
      });
  }

  protected filterBanks() {
    if (!this.departments) {
      return;
    }
    // get the search keyword
    let search = this.bankFilterCtrl.value;
    if (!search) {
      this.filteredBanks.next(this.departments.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the banks
    this.filteredBanks.next(
      this.departments.filter(bank => bank.name.toLowerCase().indexOf(search) > -1)
    );
  }

}
