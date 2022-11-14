import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiscalizacaoComponent } from './fiscalizacao.component';

describe('FiscalizacaoComponent', () => {
  let component: FiscalizacaoComponent;
  let fixture: ComponentFixture<FiscalizacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiscalizacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiscalizacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
