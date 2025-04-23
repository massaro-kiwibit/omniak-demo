import { Component } from '@angular/core';
import { THEME_KEY, Theme, ThemeService } from './core/services/theme.service';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { UpdaterService } from './core/services/updater.service';
import { filter } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent {
  constructor(
    private themeService: ThemeService,
    private swUpdate: SwUpdate,
    private updater: UpdaterService,
  ) {
    const theme = localStorage.getItem(THEME_KEY) as Theme | null;
    this.themeService.setTheme(theme ?? 'default');
    this.swUpdate.versionUpdates
      .pipe(filter((evt): evt is VersionReadyEvent => evt.type === 'VERSION_READY'))
      .subscribe(evt => {
        console.log(`Found a new app version ready for use: ${evt.latestVersion.hash}`);
        this.updater.showUpdateNotification()
          .onAction()
          .subscribe(() => document.location.reload());
      });

  }
}