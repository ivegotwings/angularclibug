import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { ConfigComponent } from '@requireundefined/config';
import { loadFormFields } from '@requireundefined/schema';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, ConfigComponent],
  selector: 'requireundefined-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'requireundefined';
  constructor() {
    loadFormFields('workload_flavour');
  }
}
