import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  constructor() { console.log('home.component -- constructor'); }
  ngOnInit() { console.log('home.component -- ngOnInit'); }
  ngOnChanges() { console.log('home.component -- ngOnChanges'); }
  ngDoCheck() { console.log('home.component -- ngDoCheck'); }
  ngAfterContentInit() { console.log('home.component -- ngAfterContentInit'); }
  ngAfterContentChecked() { console.log('home.component -- ngAfterContentChecked'); }
  ngAfterViewInit() { console.log('home.component -- ngAfterViewInit'); }
  ngAfterViewChecked() { console.log('home.component -- ngAfterViewChecked'); }
  ngOnDestroy() { console.log('home.component -- ngOnDestroy'); }

}
