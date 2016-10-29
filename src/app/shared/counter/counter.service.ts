import { Injectable, OnInit } from '@angular/core';



@Injectable()
export class CounterService implements OnInit {

  private counters = new Array();
constructor() {
}
  inc(counterId) {
    if (typeof this.counters[counterId] === 'undefined') {
      this.counters[counterId] = { count: 0 };
      this.counters[counterId].count++;
    } else {
      this.counters[counterId].count++;
    }
  }

  dec(counterId) {
    this.counters[counterId].count--;
  }

  getCount(counterId): number {
    if (typeof this.counters[counterId] === 'undefined') {
      return 0;
    } else {
      return this.counters[counterId].count;
    }
  }

  deleteCounter(counterId) {
    delete this.counters[counterId];
  }

  ngOnInit() {

  }
}
