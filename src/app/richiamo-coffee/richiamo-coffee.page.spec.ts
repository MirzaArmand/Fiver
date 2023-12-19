import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RichiamoCoffeePage } from './richiamo-coffee.page';

describe('RichiamoCoffeePage', () => {
  let component: RichiamoCoffeePage;
  let fixture: ComponentFixture<RichiamoCoffeePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RichiamoCoffeePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
