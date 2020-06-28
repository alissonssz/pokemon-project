import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPokemonInfoComponent } from './modal-pokemon-info.component';

describe('ModalPokemonInfoComponent', () => {
  let component: ModalPokemonInfoComponent;
  let fixture: ComponentFixture<ModalPokemonInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPokemonInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPokemonInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
