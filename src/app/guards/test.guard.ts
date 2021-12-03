import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { DialogContentComponent } from '../components/dialog-content/dialog-content.component';

@Injectable({
  providedIn: 'root'
})
export class TestGuard implements CanActivate {

  constructor(
    private dialog: MatDialog,
    private router: Router
  ) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree> {
      const dialogRef = this.dialog.open(DialogContentComponent);
      return new Promise((resolve, reject) => {

        dialogRef.afterClosed().subscribe(result => {
          if (result) {
            resolve(true);
          } else {
            resolve(this.router.parseUrl('/no-auth'));
          }
        });

      });
  }

}
