import { Injectable } from '@angular/core';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserdataService } from './services/usersdata.service';


@Injectable()
export class AuthinterceptorService implements HttpInterceptor {
  constructor(private UserdataService: UserdataService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const TokenVariable = localStorage.getItem('token');
    // console.log(TokenVariable);
    if (TokenVariable) {
      const authReq = request.clone({
        setHeaders: {
          // 'ngrok-skip-browser-warning': '69420',
          Authorization: `Bearer ${TokenVariable}`,
        },
      });

      return next.handle(authReq);
    }

    return next.handle(request);
  }
}