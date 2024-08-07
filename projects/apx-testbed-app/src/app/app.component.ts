import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ApxSideMenuComponent, TitleColor } from 'apx-side-menu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ApxSideMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'apx-testbed-app';

  TitleColor = TitleColor;
  isAuthenticated = signal(true);
}
