import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputExamenPage } from './input-examen.page';

describe('InputExamenPage', () => {

  let component: InputExamenPage;
  let fixture: ComponentFixture<InputExamenPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InputExamenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
