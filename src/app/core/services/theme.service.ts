import { DOCUMENT } from '@angular/common';
import { Injectable, Inject } from '@angular/core';

export type Theme = 'default' | 'bh' | 'kiwi-dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(
    @Inject(DOCUMENT) private document: Document,
  ) { }

  setTheme(newTheme: Theme) {
    this.document.body.classList.remove('default', 'kiwi-dark', 'bh');
    localStorage.setItem('omniak-theme', newTheme);
    this.document.body.classList.add(newTheme);
  }

}
