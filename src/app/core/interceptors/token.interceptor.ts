import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageKey } from '../enum/storage-key.enum';
import { LocalStorageService } from '../services/local-storage/local-storage.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private localStorageService: LocalStorageService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.localStorageService.get(StorageKey.Token);

    if (token) {
      req = req.clone({ setHeaders: { Authorization: `${token}` } });
    }

    return next.handle(req);
  }
}
