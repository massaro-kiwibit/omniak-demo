import { BreakpointObserver } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { MediaQueries } from '../config/breakpoints.config';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {

  constructor(private bpObs: BreakpointObserver) { }

  get isMobile$() {
    return this.bpObs.observe([
      MediaQueries.get("xs")!,
      MediaQueries.get("sm")!
    ]).pipe(map(({ matches }) => matches));
  }

  get isDesktop$() {
    return this.bpObs.observe([
      MediaQueries.get("md")!,
      MediaQueries.get("lg")!,
      MediaQueries.get("xl")!,
    ]).pipe(map(({ matches }) => matches));
  }

}
