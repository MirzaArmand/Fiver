import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StakeholderReportPage } from './stakeholder-report.page';

describe('StakeholderReportPage', () => {
  let component: StakeholderReportPage;
  let fixture: ComponentFixture<StakeholderReportPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(StakeholderReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
