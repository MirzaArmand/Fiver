import { Component } from '@angular/core';

@Component({
  selector: 'app-richiamo-coffee',
  templateUrl: './richiamo-coffee.page.html',
  styleUrls: ['./richiamo-coffee.page.scss'],
})
export class RichiamoCoffeePage {
  selectedSection: { name: string; content: string; isEditMode: boolean } | null = null;

  toggleEditMode(section: { name: string; content: string; isEditMode: boolean }) {
    section.isEditMode = !section.isEditMode;
    this.selectedSection = section.isEditMode ? section : null;
  }

  saveGrades() {
    // Perform any actions needed when saving grades
    console.log('Saved grades:', this.selectedSection);
    // You can add further logic here
    // For example, you might want to reset isEditMode to false after saving
    if (this.selectedSection) {
      this.selectedSection.isEditMode = false;
    }
  }
}
