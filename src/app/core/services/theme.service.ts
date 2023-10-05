import { DOCUMENT } from '@angular/common';
import { Injectable, Inject } from '@angular/core';

export type Theme = 'default' | 'bh' | 'kiwi-dark';
export const THEME_KEY = "omniak-demo2-theme";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {


  constructor(
    @Inject(DOCUMENT) private document: Document,
  ) { }

  setTheme(newTheme: Theme) {
    this.document.body.classList.remove('default', 'kiwi-dark', 'bh');
    localStorage.setItem(THEME_KEY, newTheme);
    this.document.body.classList.add(newTheme);

    /* Change PWA status bar color */
    const metaThemeColor = document.querySelector("meta[name=theme-color]") as Element;
    switch (newTheme) {
      case 'default':
        metaThemeColor.setAttribute("content", "#102c3d");
        break;
      case 'kiwi-dark':
        metaThemeColor.setAttribute("content", "#242424");
        break;
      case 'bh':
        metaThemeColor.setAttribute("content", "#042620");
        break;
      default:
        break;
    }
  }

}
