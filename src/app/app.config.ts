import { ApplicationConfig } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import ROUTES_ROOT from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { ErrorApiInterceptor } from './interceptors/error-api.interceptor';
import { DemoInterceptor } from './interceptors/demo.interceptor';
import { ApiInterceptor } from './interceptors/api.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(ROUTES_ROOT, withHashLocation()), // Resuelve las rutas
    provideAnimationsAsync(),   // Resuelve dependencias de Angular Material
    provideHttpClient(withInterceptorsFromDi(), withInterceptors([ErrorApiInterceptor])),        // Resuelve dependencias para peticiones HTTP
    { provide: HTTP_INTERCEPTORS, useClass: DemoInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
  ],
};
