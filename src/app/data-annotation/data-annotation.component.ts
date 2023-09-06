import { Component } from '@angular/core';

@Component({
  selector: 'app-data-annotation',
  templateUrl: './data-annotation.component.html',
  styleUrls: ['./data-annotation.component.css']
})
export class DataAnnotationComponent {
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top with smooth animation
  }
}
