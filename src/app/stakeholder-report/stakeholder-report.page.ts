
import { Component } from '@angular/core';

@Component({
  selector: 'app-stakeholder-report',
  templateUrl: './stakeholder-report.page.html',
  styleUrls: ['./stakeholder-report.page.scss'],
})

export class StakeholderReportPage  {
  isGridViewActive = false;

  listView() {
    this.isGridViewActive = false;
  }

  gridView() {
    this.isGridViewActive = true;
  }
}


