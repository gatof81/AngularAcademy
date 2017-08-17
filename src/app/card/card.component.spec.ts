import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardyComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardyComponent;
  let fixture: ComponentFixture<CardyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
