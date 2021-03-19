import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { StorageKey } from '../enum/storage-key.enum';
import { LocalStorageService } from '../services/local-storage/local-storage.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private storageService: LocalStorageService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    if (this.storageService.get(StorageKey.Token)) {
      return true;
    }

    this.router.navigate(['/']);

    return false;
  }
}
