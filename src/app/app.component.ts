import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<nav class="navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top">
              <a href="#" class="navbar-brand">Keep clone</a>
            </nav>
            <div class="container-fluid text-center pb-5">
              <div class="row justify-content-end">
                <app-new-card-input (onCardAdd)="addCard($event)"></app-new-card-input>
              </div>
            </div>
            <app-card-list [cards]="cards"></app-card-list>`
})
export class AppComponent {
  public cards: Array<any> = [
    {text: 'card1'},
    {text: 'card2'},
    {text: 'card3'},
    {text: 'card4'},
    {text: 'card5'},
    {text: 'card6'},
    {text: 'card7'},
    {text: 'card8'},
    {text: 'card9'}
  ];

  addCard(card_text: string) {
    this.cards.push({text: card_text});
  }
}
