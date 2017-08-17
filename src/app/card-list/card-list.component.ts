import { Component, OnInit, Input } from '@angular/core';
import {filter} from 'lodash';
import {Card} from '../models/card';

@Component({
  selector: 'app-card-list',
  template: `
    <div class="container-fluid text-center pb-5" *ngIf="annyPinned()">
    <p class="h6">Pinned</p>
      <div class="row">
        <app-card class="col-4" *ngFor="let card of getPineed(cards)" [card]="card"></app-card>
      </div>
    </div>
    <div class="container-fluid text-center pb-5">
    <p class="h6" *ngIf="annyPinned()">Others</p>
      <div class="row">
        <app-card class="col-4" *ngFor="let card of getPineed(cards, false)" [card]="card"></app-card>
      </div>
    </div>
  `,
  styles: []
})
export class CardListComponent implements OnInit {

  @Input() cards: Array<any>;

  constructor() { }

  ngOnInit() {
    console.log(this.cards);
  }

  annyPinned() {
    return this.getPineed(this.cards).length > 0;
  }

  getPineed(cards, pinned = true) {
    return filter(cards, (card: Card) => pinned ? card.pinned === true : card.pinned !== true);
  }

}
