import { Component, Input } from '@angular/core';
import { THEME_KEY, Theme, ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss']
})
export class ThemeSwitcherComponent {

  @Input() type: 'hover' | 'flat' = 'flat';

  currentTheme: Theme = localStorage.getItem(THEME_KEY) as Theme;

  constructor(
    private themeService: ThemeService,
  ) { }

  // Swap them out, and keep track of the new theme
  switchTheme(newTheme: Theme): void {
    this.themeService.setTheme(newTheme);
    this.currentTheme = newTheme;
  }

}
