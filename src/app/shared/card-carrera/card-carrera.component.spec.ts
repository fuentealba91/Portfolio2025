import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCarreraComponent } from './card-carrera.component';

describe('CardCarreraComponent', () => {
  let component: CardCarreraComponent;
  let fixture: ComponentFixture<CardCarreraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardCarreraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCarreraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
