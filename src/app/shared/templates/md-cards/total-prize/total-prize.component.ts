import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-total-prize',
  templateUrl: './total-prize.component.html',
  styleUrls: ['./total-prize.component.css']
})
export class TotalPrizeComponent implements OnInit {


@Input()
totalPrize: number;

@Input()
mdCardColor: string= 'md-card-green';

@Input()
mdCardTitleColor: string= 'md-card-title-default';

  constructor() { }

  ngOnInit() {
  }

}
