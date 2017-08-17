import {
  Component,
  OnInit,
  EventEmitter,
  HostBinding,
  HostListener,
  Output,
  ViewChild
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { card } from '../models/card';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/filter';
import {dummyValidator} from '../shared/dummy.validator';

@Component({
  selector: 'app-new-card-input',
  template: `
  <div class="card">
    <div class="card-block">
        <input placeholder="enter new cards" name="card_text" class="form-control" [formControl]="newCardForm.controls['text']">
    </div>
  </div>`,
  styles: [
    '.card {margin-bottom: 1.5rem;}'
  ]
})
export class NewCardInputComponent implements OnInit {
  @HostBinding('class') class = 'col-8';
  @Output() onCardAdd = new EventEmitter<string>();

  newCardForm: FormGroup;

  public newCard: card = {text: ''};

  @HostListener('keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.charCode === 13 && this.newCardForm.valid) {
      this.addCard(this.newCardForm.controls['text'].value);
    }
  }

  constructor(fb: FormBuilder) {
    this.newCardForm = fb.group({
      'text': [null, Validators.compose([Validators.required, Validators.minLength(2), dummyValidator])]
    });
    this.newCardForm.valueChanges
    .debounceTime(1000)
    .filter( value => this.newCardForm.valid)
    .subscribe(data => {
      console.log(data);
    });
  }

  ngOnInit() {
  }

  addCard(card_text: string) {
    this.onCardAdd.emit(card_text);
    this.newCardForm.reset();
  }

}
