import { Component } from '@angular/core';
import { Theme, ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private themeService: ThemeService
  ) {
    const theme = localStorage.getItem('omniak-theme') as Theme | null;
    this.themeService.setTheme(theme ?? 'default');
  }
}