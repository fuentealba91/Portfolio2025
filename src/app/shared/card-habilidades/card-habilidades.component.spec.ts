import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHabilidadesComponent } from './card-habilidades.component';

describe('CardHabilidadesComponent', () => {
  let component: CardHabilidadesComponent;
  let fixture: ComponentFixture<CardHabilidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardHabilidadesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardHabilidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
