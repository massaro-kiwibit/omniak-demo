import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UpdaterService {

  constructor(
    private snackBar: MatSnackBar
  ) { }

  showUpdateNotification() {
    return this.snackBar.open("Nuova versione disponibile.", "Aggiorna", {
      panelClass: 'updater-snackbar',
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 10000
    });
  }

}
