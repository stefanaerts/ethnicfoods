import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-md-card-subtitle',
  templateUrl: './md-card-subtitle.component.html',
  styleUrls: ['./md-card-subtitle.component.css']
})
export class MdCardSubtitleComponent implements OnInit {

@Input()
title:string;

@Input()
product: string;

@Input()
description;

  constructor() { }

  ngOnInit() {
  }

}
