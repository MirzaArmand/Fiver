import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StakeholderPage } from './stakeholder.page';

describe('StakeholderPage', () => {
  let component: StakeholderPage;
  let fixture: ComponentFixture<StakeholderPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(StakeholderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
