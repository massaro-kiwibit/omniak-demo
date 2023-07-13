import { filter } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { THEME_KEY, Theme, ThemeService } from './core/services/theme.service';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private themeService: ThemeService,
    private swUpdate: SwUpdate
  ) {
    const theme = localStorage.getItem(THEME_KEY) as Theme | null;
    this.themeService.setTheme(theme ?? 'default');
  }

  ngOnInit(): void {
    this.swUpdate.versionUpdates
      .pipe(filter((evt): evt is VersionReadyEvent => evt.type === 'VERSION_READY'))
      .subscribe(evt => {
        if (confirm()) {
          // Reload the page to update to the latest version.
          document.location.reload();
        }
      });
  }
}