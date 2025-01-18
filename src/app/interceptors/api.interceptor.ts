import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    // console.log("----API INTERCEPTOR-----");
    // console.log(req);
    if (req.url.includes('white_')) {
      const requestClone = req.clone({ url: req.url.replace('white_', '') });
      return next.handle(requestClone);
    }

    const headers = req.headers.set(
      'Autorization',
      localStorage.getItem('token')!,
    );
    const requestClone = req.clone({ headers });

    return next.handle(requestClone);
  }
}
